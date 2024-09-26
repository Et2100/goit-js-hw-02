// Task 2. Formatting the message

// Declare a function  formatMessage(message, maxLength)that takes a string (parameter  message) and checks its length against a specified maximum length (parameter  maxLength).

// Complete the function code so that:

// If the length of the string is equal to or less than  maxLength, the function returns the initial string unchanged.
// If length exceeds  maxLength, the function truncates the string to  maxLength characters, adds three dots  "..." at the end, and returns the truncated version.


// Take the code below and insert it after your function declaration to verify that it is working correctly. The console will display the results of its execution.
const formatMessage = (message, maxLength) => {

    if (message.length <= maxLength) {
        return message;
    } else {
       
       const subMessage = message.slice(0, maxLength)
       return subMessage +"..."


    }
}


console . log (formatMessage( "Curabitur ligula sapien" , 16 )); // "Curabitur ligula..." 
console . log (formatMessage( "Curabitur ligula sapien" , 23 )); // "Curabitur ligula sapien" 
console . log (formatMessage( "Vestibulum facilisis purus nec" , 20 )); // "Vestibulum facilisis..." 
console . log (formatMessage( "Vestibulum facilisis purus nec" , 30 )); // "Vestibulum facilisis purus nec" 
console . log (formatMessage( "Nunc sed turpis a felis in nunc fringilla" , 15 )); // "Nunc sed turpis..." 
console . log (formatMessage( "Nunc sed turpis a felis in nunc fringilla" , 41 )); // "Nunc sed turpis a felis in nunc fringilla"



// Leave this code for your mentor to review.

// What will the mentor look for when checking:

// Declared function formatMessage(message, maxLength)
// The function call  formatMessage("Curabitur ligula sapien", 16) returns "Curabitur ligula..."
// The function call  formatMessage("Curabitur ligula sapien", 23) returns "Curabitur ligula sapien"
// The function call  formatMessage("Vestibulum facilisis purus nec", 20) returns "Vestibulum facilisis..."
// The function call  formatMessage("Vestibulum facilisis purus nec", 30) returns "Vestibulum facilisis purus nec"
// The function call  formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) returns "Nunc sed turpis..."
// The function call  formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) returns "Nunc sed turpis a felis in nunc fringilla"


