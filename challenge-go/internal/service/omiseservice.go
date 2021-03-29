package service

import (
	"log"
	"os"

	"github.com/omise/omise-go"
	"github.com/omise/omise-go/operations"
)

type OmiseService struct {
	Client *omise.Client
}

//NewOmiseService constructor
func NewOmiseService() *OmiseService {
	omisePublicKey := os.Getenv("OMISE_PUBLIC_KEY")
	omiseSecretKey := os.Getenv("OMISE_SECRET_KEY")
	if omisePublicKey == "" || omiseSecretKey == "" {
		log.Println("missing public or secret key")
		os.Exit(1)
	}
	client, e := omise.NewClient(omisePublicKey, omiseSecretKey)
	if e != nil {
		// log.Fatal(e)
		return nil
	}
	return &OmiseService{Client: client}
}

//CreateCardToken  send request to create card with Omise
func (o *OmiseService) CreateCardToken(client *omise.Client, req *operations.CreateToken) (*omise.Card, error) {
	card := omise.Card{}
	err := o.Client.Do(&card, req)
	if err != nil {
		return nil, err
	}
	return &card, nil
}

//CreateCardToken  send request to make charge with Omise
func (o *OmiseService) CreateCharge(client *omise.Client, req *operations.CreateCharge) (*omise.Charge, error) {
	charge := omise.Charge{}
	err := o.Client.Do(&charge, req)
	if err != nil {
		return nil, err
	}
	return &charge, nil
}
