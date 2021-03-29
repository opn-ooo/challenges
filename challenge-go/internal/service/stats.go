package service

import (
	"fmt"

	"github.com/dustin/go-humanize"
)

//Stats type
type Stats struct {
	Donors map[uint]*Donor
}

//NewStatsService constructor
func NewStatsService() *Stats {
	return &Stats{Donors: make(map[uint]*Donor)}
}

//Donor to collects donation stats
type Donor struct {
	ID      uint
	Name    string
	Amount  int64
	IsValid bool
}

//CollectDonorStats record donation with default validity=false
func (sh *Stats) CollectDonorStats(id uint, name string, amount int64) {
	sh.Donors[id] = &Donor{
		ID:      id,
		Name:    name,
		Amount:  amount,
		IsValid: false, //default
	}
}

//SetValidDonor record validity setter
func (sh *Stats) SetValidDonor(id uint, isValid bool) {
	sh.Donors[id].IsValid = isValid
}

//PrintSummary prints out stats collected and reset collected data
func (sh *Stats) PrintSummary() {
	var totalReceive int64
	var totalSuccess int64
	var totalFault int64
	var topAmount int64
	var topDonors []*Donor

	for _, donor := range sh.Donors {
		totalReceive += donor.Amount
		if donor.IsValid {
			totalSuccess += donor.Amount
		} else {
			totalFault += donor.Amount
		}

		if donor.IsValid { //only valid donation
			if topAmount < donor.Amount { //find max donor
				topAmount = donor.Amount
				topDonors = []*Donor{donor}
			} else if topAmount == donor.Amount { //means we have more than one rich person
				topDonors = append(topDonors, donor)
			}
		}
	}

	line1 := fmt.Sprintf("\n%25v", "Total Receieve :")
	line1 = fmt.Sprintf("%v %v %-25v", line1, "THB", humanize.Commaf(float64(totalReceive)))

	line2 := fmt.Sprintf("%25v", "Successfully Donated :")
	line2 = fmt.Sprintf("%v %v %-25v", line2, "THB", humanize.Commaf(float64(totalSuccess)))

	line3 := fmt.Sprintf("%25v", "Faulty Donation :")
	line3 = fmt.Sprintf("%v %v %-25v", line3, "THB", humanize.Commaf(float64(totalFault)))

	line4 := fmt.Sprintf("%25v", "Average per person :")
	line4 = fmt.Sprintf("%v %v %-25v", line4, "THB", humanize.Commaf(float64(totalReceive)/float64(len(sh.Donors))))
	fmt.Printf("%s\n%s\n%s\n\n%s\n", line1, line2, line3, line4)

	if len(topDonors) > 0 { //only if top donator exists
		line5 := fmt.Sprintf("%25v", "Top donate amount :")
		line5 = fmt.Sprintf("%v %v %-25v", line5, "THB", humanize.Commaf(float64(topDonors[0].Amount)))

		line6 := fmt.Sprintf("%25v", "Top donors :")
		for i, top := range topDonors {
			if i == 0 {
				line6 = fmt.Sprintf("%v %v", line6, top.Name)
			} else {
				line6 = fmt.Sprintf("%v\n%48v", line6, top.Name)

			}
		}
		fmt.Printf("%s\n%s\n", line5, line6)
	} else {
		fmt.Printf("%25v\n", "Does not have valid donations, No top donator.")
	}

	sh.Donors = make(map[uint]*Donor)
}
