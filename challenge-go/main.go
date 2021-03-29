package main

import (
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	"github.com/joho/godotenv"
	"gitlab.com/moiammo/opn-challange/internal/handler"
	"gitlab.com/moiammo/opn-challange/internal/logger"
	"gitlab.com/moiammo/opn-challange/internal/service"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Printf("Get environment variable from OS\n")
	}
}

func main() {
	start := time.Now()
	if len(os.Args) != 2 {
		logger.Log.Printf("invalid argements count\n")
		os.Exit(1)
	}
	fn := os.Args[1]

	if fn == "" {
		logger.Log.Printf("not found input file name\n")
		os.Exit(1)
	}
	fileservice := service.FileService{}
	lines, err := fileservice.ReadRot128(fn)
	if err != nil {
		logger.Log.Printf("read file error %+v - err\n", err)
		os.Exit(1)
	}
	statCollector := service.NewStatsService()
	mh := handler.NewTransactionHandler(statCollector) //initial transaction handler with stat collctor
	omisesv := service.NewOmiseService()
	var wg sync.WaitGroup
	fatalErr := make(chan error) //chan is channel which is a pipe to send goroutine value
	for round, line := range lines {
		time.Sleep(10 * time.Millisecond) //prevent concurrent map writes error
		logger.Log.Printf("round%d\n", round)
		wg.Add(1)
		go func(lineinput string) {
			defer wg.Done()
			err := mh.HandleTransaction(uint(round)+1, lineinput, omisesv)
			if err != nil {
				logger.Log.Printf("err %+v", err)
				fatalErr <- err //send error through channel to main worker immediately
			}
		}(line)
		reqPerRound := 2                         //more than 2 will cause 'too many request' error
		if round > 0 && round%reqPerRound == 0 { //let api server rest
			go syncWait(&wg, fatalErr)
			time.Sleep(500 * time.Millisecond)
			err = waitUntilError(fatalErr)
			if err != nil {
				logger.Log.Printf("go routune fatal err %+v\n", err) //any error
			}
			omisesv = service.NewOmiseService()
		}
	}
	// logger.Log.Printf("summary %v\n", len(mh.Donors))
	statCollector.PrintSummary()
	fmt.Printf("\n\nTotal execution time %v\n", time.Since(start))
	os.Exit(0)
}

func syncWait(wg *sync.WaitGroup, fatalErr chan error) {
	go func() {
		wg.Wait()
		fatalErr <- nil
	}()
}
func waitUntilError(fatalErr chan error) error {
	err := <-fatalErr //triggered if channel has sent error when any goroutine error occurs
	if err != nil {
		logger.Log.Printf("\n routine error %v", err)
		// return err // will break whole process if returned
	}
	return nil
}
