package logger

import (
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

//Logger type
var (
	Log *log.Logger
)

//init constructor to initialize logger file location
func init() {
	err := godotenv.Load()
	if err != nil {
		log.Printf("Get environment variable from OS")
	}
	pwd, err := os.Getwd() //get current working directory
	if err != nil {
		log.Fatalf("get os working directory err %+v", err)
	}
	path := fmt.Sprintf("%s/%s", pwd, os.Getenv("LOG_FILE_NAME"))
	flag.Parse()
	file, err := os.Create(path)
	if err != nil {
		log.Fatalf("create logfile error %+v", err)
	}
	Log = log.New(file, "", log.LstdFlags|log.Lshortfile)
	fmt.Printf("Please check errorlog.txt for more log information after program ends. Located at [%+v]\n", path)
}
