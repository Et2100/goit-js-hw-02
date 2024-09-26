// Task 3. Spam Checking

// The function  checkForSpam(message) takes a string of characters (parameter  message), checks it for the forbidden words  spam and  sale, and returns the result of the check. The words in the string of characters  message can be any case, for example  SPAM or  sAlE.

// Complete the function code so that:

// spam If a forbidden word ( or  ) is found sale, the function returns a logical value true
// If there are no forbidden words in the string, the function returns a logical value false
// Take the code below and insert it after your function declaration to verify that it is working correctly. The console will display the results of its execution.

const checkForSpam = (message) => {
    message = message.toLowerCase();
    if (message.includes('spam') || message.includes('sale')) {
        return true
    } else {
        return false
    }
}

console . log (checkForSpam( "Latest technology news" )); // false 
console . log (checkForSpam( "JavaScript weekly newsletter" )); // false 
console . log (checkForSpam( "Get best sale offers now!" )); // true 
console . log (checkForSpam( "Amazing SalE, only tonight!" )); // true 
console . log (checkForSpam( "Trust me, this is not a spam message" )); // true 
console . log (checkForSpam( "Get rid of spaM emails. Our book in on sale!" )); // true 
console . log (checkForSpam( "[SPAM] How to earn fast money?" )); // true



