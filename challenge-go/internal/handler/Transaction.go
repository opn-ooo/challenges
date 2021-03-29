package handler

import (
	"strconv"
	"strings"
	"time"

	"github.com/omise/omise-go"
	"github.com/omise/omise-go/operations"
	"github.com/pkg/errors"
	"gitlab.com/moiammo/opn-challange/internal/service"
)

//Transaction type
type Transaction struct {
	StatCollector *service.Stats
}

//NewTransactionHandler constructor
func NewTransactionHandler(stat *service.Stats) *Transaction {
	return &Transaction{StatCollector: stat}
}

const ( //Column index
	nameIndex            = 0
	amountIndex          = 1
	numberIndex          = 2
	securityCodeIndex    = 3
	expirationMonthIndex = 4
	expirationYearIndex  = 5
	totalColumn          = 6
)

//GetDonateAmount returns donate amount from lineArr
func (th *Transaction) GetDonateAmount(lineArr []string) (int64, error) {
	amount, err := strconv.Atoi(lineArr[amountIndex])
	if err != nil {
		return int64(amount), errors.Wrapf(err, "GetDonateAmount strconv")
	}
	return int64(amount), nil
}

//MakeOmiseTokenRequest prepare request for Omise card
func (th *Transaction) MakeOmiseTokenRequest(lineArr []string) (*operations.CreateToken, error) {
	expMonth, err := strconv.Atoi(lineArr[expirationMonthIndex])
	if err != nil {
		return nil, errors.New("error parsing Atoi month value")
	}
	expYear, err := strconv.Atoi(lineArr[expirationYearIndex])
	if err != nil {
		return nil, errors.New("error parsing Atoi year value")

	}
	return &operations.CreateToken{
		Name:            lineArr[nameIndex],
		Number:          lineArr[numberIndex],
		SecurityCode:    lineArr[securityCodeIndex],
		ExpirationMonth: time.Month(expMonth),
		ExpirationYear:  expYear,
	}, nil
}

//CreateCardToken create Omise card
func (th *Transaction) CreateCardToken(omiseSv *service.OmiseService, request *operations.CreateToken) (*omise.Card, error) {
	cardRes, err := omiseSv.CreateCardToken(omiseSv.Client, request)
	if err != nil {
		return nil, errors.Wrapf(err, "Transaction CreateCardToken")
	}
	return cardRes, nil
}

//MakeOmiseChargeRequest prepare request for Omise charge
func (th *Transaction) MakeOmiseChargeRequest(card *omise.Card, amount int64) (*operations.CreateCharge, error) {
	return &operations.CreateCharge{
		Customer: card.Name,
		Currency: "thb",
		Card:     card.ID,
		Amount:   amount,
	}, nil
}

//CreateCharge create Omise charge
func (th *Transaction) CreateCharge(omiseSv *service.OmiseService, request *operations.CreateCharge) (*omise.Charge, error) {
	cardRes, err := omiseSv.CreateCharge(omiseSv.Client, request)
	if err != nil {
		return cardRes, errors.Wrapf(err, "Transaction CreateChargeToken")
	}
	return cardRes, nil
}

//HandleTransaction creates card and charge + collects data and faulty transaction on error
func (th *Transaction) HandleTransaction(id uint, line string, omiseSv *service.OmiseService) error {
	lineArr := strings.Split(line, ",")
	if len(lineArr) != totalColumn {
		return errors.New("line not having correct number of columns")
	}
	donateAmount, err := th.GetDonateAmount(lineArr)
	if err != nil {
		// log.Println(err)
		return err
	}
	th.StatCollector.CollectDonorStats(uint(id), lineArr[nameIndex], donateAmount) //collect ids,name,amount
	tokenReq, err := th.MakeOmiseTokenRequest(lineArr)
	if err != nil {
		// log.Println(err)
		return err
	}

	card, err := th.CreateCardToken(omiseSv, tokenReq)
	if err != nil || card == nil {
		// log.Println(err)
		return err
	}

	chargeReq, err := th.MakeOmiseChargeRequest(card, int64(donateAmount))
	if err != nil {
		// log.Println(err)
		return err
	}
	charge, err := th.CreateCharge(omiseSv, chargeReq)
	if err != nil {
		// log.Println(err)
		return err
	}
	if charge.Authorized && charge.FailureCode == nil {
		th.StatCollector.SetValidDonor(id, true)
	}
	return nil
}
