# TAMBOON

Song-pah-pa (ซองผ้าป่า) is a white envelope with money collected from many people and the donor name printed on the front.
The propose of those money is to repair or construct new temple buildings.

Since we're a payment gateway, we can do better than that. The envelope will contain,
instead, credit card numbers (fake ones, not a real working card) and the desired donation
amount.

### EXERCISE

Write a program that, when given the CSV input of donators, calls the [Charge API][0] to
make donations by creating a charge for each one and produce useful summary such as
`total donations`, `successful charges`, `failed charges`, `average amount per person` and `top x donators`.

### PROGRAMMING LANGUAGES
* Elixir / Erlang
* Javascript / TypeScript

### EXAMPLE INPUT

* `donations.csv` - An example CSV file contains list of donator's name, credit card number and donation amount.

### WHAT WE REVIEW

* Easy to review - The application must contain README explaining the solution and how to run tests and program in a reproducible way.
* Correctness - The application do what we asked correctly. If there is anything missing or should be concerned, please describes it in README.
* Code Quality - The code is easy to understand and maintainable.
* Testing - Write useful tests and easy to change when new requirements come.
* Technical Choices - Choices of libraries and implementations. For example, How do you handle concurrency? How do you handle a rate limit in external services?

[0]: https://www.omise.co/charges-api
