# CHALLENGE-MOBILE

### INSTRUCTIONS

2. You have 3-5 days to build an iOS or Android application based on the role you are applying for.
2. Please build your application using Swift (iOS) or Kotlin (Android). *Optionally*, you could build your UI using SwiftUI or Jetpack Compose; nonetheless the traditional way of building the UI is still totally fine.
3. We will be providing the instructions on what we are expecting in each screen, although the UI design is totally up to you.
4. We are expecting deliverables that are relevant to the timeframe given and the position that you are applying for. 
5. It is highly recommended that you spend some time planning your deliverables, implementation methods, and architecture before jumping into the implementation.
6. Submission is done via a [git format-patch](https://git-scm.com/docs/git-format-patch). Compress (zip) your patches and send them to the hiring team.

### CHALLENGE - A simple e-market application

You will be creating a simple e-market application which allows user to view the store details and products, add products to the basket, and place an order. You will be using this [Swagger mock API](https://app.swaggerhub.com/apis-docs/m-tul/opn-mobile-challenge-api/1.0.0#/) to perform all the requests; there you will also be able to see the API documentations.

The application should consists of three screens:

1. Store details & products screen:
   - Fetch the store detail from `/storeInfo` endpoint and display them in the upper part of the screen.
   - Fetch the list of products from `/products` endpoint and display them in a list below store detail section.
   - Add an ability for the user to select product(s). 
     - *Skills Challenge*: It is your choice on how you'd like to build this feature and the skills you'd like to demonstrate to us. 
       You could allow:
       - Multiple quantity (e.g. + and - button on each product) and mutiple products selection
       - Multiple products selection (e.g. checkboxes), but only a single quantity for each product
       - Only one product selection
   - Add a button at the bottom most of the screen to bring the user to the order summary screen.
2. Order summary screen:
   - Display the product(s) selected.
   - Display the total price.
   - Add one text box to allow user to fill in the delivery address.
   - Add a button at the bottom of the screen for the user to confirm order placement. Tapping on this button should display a loading indicator and make a request to post the data to `/order` endpoint. After the network request is completed, display a success screen.
3. Success screen:
   1. Show a simple dismiss button that brings the user back to the first screen.

**DOs**

* Git version-control is being used with relevant commit messages.
* Adhere to platform development guidelines and coding conventions.
* Code/architecture supports scaling and reusability.
* Write clean, readable and well-structured code.
* Code is loosely coupled and uses an architecture simliar to MVVM, CLEAN, VIPER, MVP, etc.
* Handles HTTP status codes properly.
* Follow recommended UI/UX principles.
* Unit tests.
* (Bonus) UI tests.

**CAUTIONs**

Your assignment could be rejected if
* The project fails to compile or compiles with servere warnings.
* The main functionalities are incomplete or do not work as expected.
* There is no unit tests with decent code coverage or the tests are failing.
* Unreasonable amount of external libraries being used.
* Code are inconsistent, anti-patterns, or shown to be a direct duplication from other sources.
