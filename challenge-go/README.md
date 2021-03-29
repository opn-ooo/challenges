```
- to run program
  go mod tidy
  go mod download
  go run main.go ./data/fng.1000.csv.rot128

Explain what i did 
1.decode the file received
2.for each lines,  collect donator name and amount
3.Create Card then use it to create Charge (via Omise). 
4.If any creation fails will counted as faulty donation. Faulty donation will not counted in top donors or donations
5.after all lines have been processed, will print out the summary showing like below

         Total Receieve : THB 1,322,693,174            
   Successfully Donated : THB 1,038,086,333            
        Faulty Donation : THB 284,606,841              

     Average per person : THB 2,640,106.1357285427     
      Top donate amount : THB 5,095,751                
             Top donors : Ms. Ruby P Whitfoot


Total execution time 4m25.288727848s
```


//Yarnadhis Poolsawat
