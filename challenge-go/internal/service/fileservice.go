package service

import (
	"os"
	"strings"

	"github.com/pkg/errors"
	"gitlab.com/moiammo/opn-challange/cipher"
	"gitlab.com/moiammo/opn-challange/internal/logger"
)

type FileService struct {
}

//ReadRot128 decode with rot128reader return lines without header line
func (fs FileService) ReadRot128(fn string) ([]string, error) {
	file, err := os.Open(fn)
	if err != nil {
		logger.Log.Printf("\nopen file err - %+v", err)
		os.Exit(1)
	}
	defer func() {
		file.Close()
	}()

	filestat, err := file.Stat()
	if err != nil {
		return nil, errors.Wrapf(err, "fileservice get filestat")
	}

	reader, err := cipher.NewRot128Reader(file)
	if err != nil {
		return nil, errors.Wrapf(err, "fileservice initialize reader")
	}

	b := make([]byte, int(filestat.Size()))
	_, err = reader.Read(b)
	if err != nil {
		return nil, errors.Wrapf(err, "fileservice reader ")
	}
	lines := strings.Split(string(b), "\n")
	return lines[1:], nil
}
