// Task 1. Ordering Droids

// The repair droid sales station is ready to be launched, all that remains is to write software for the sales department. Declare a function  makeTransaction(quantity, pricePerDroid, customerCredits)that composes and returns a message about buying repair droids.



// It declares three parameters whose values ​​will be set when it is called:

// quantity — number of droids ordered
// pricePerDroid — price of one droid
// customerCredits — total funds in the customer's account


// Complete the function as follows:

// Declare a variable to hold the order total (the total value of all droids ordered) and assign it an expression that calculates that total.
// Add a check to see if the customer can pay for the order:
// if the amount to be paid exceeds the number of credits in the customer's account, the function should return a string "Insufficient funds!"
// otherwise the function should return a string  "You ordered <quantity> droids worth <totalPrice> credits!", where  <quantity> is the number of droids ordered, and  <totalPrice> is their total value.


// Take the code below and insert it after your function declaration to verify that it is working correctly. The console will display the results of its execution.

const makeTransaction = (quantity, pricePerDroid, customerCredits) => {
    const totalPrice = quantity * pricePerDroid;
    // console.log(total);
    if (totalPrice <= customerCredits) {
        // you can buy it! return the right string
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    } else {
        return "Insufficient funds!";
    }
}



console.log(makeTransaction( 5 , 3000 , 23000 )); // "You ordered 5 droids worth 15000 credits!" 
console.log(makeTransaction( 3 , 1000 , 15000 )); // "You ordered 3 droids worth 3000 credits!" 
console.log(makeTransaction( 10 , 5000 , 8000 )); // "Insufficient funds!" 
console.log(makeTransaction( 8 , 2000 , 10000 )); // "Insufficient funds!" 
console.log(makeTransaction( 10 , 500 , 5000 )); // "You ordered 10 droids worth 5000 credits!"
