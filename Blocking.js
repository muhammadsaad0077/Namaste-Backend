const crypto = require('node:crypto')  // This is the way to include core node module but you can ignore the node:

var a = 234;
var b = 12;

console.log("Hello World");


// pbkdf means =>   Password Base key derivative function

// Synchronous function and it will block the main thread, don't use it 

crypto.pbkdf2Sync("helloworld", "salt", 500000000, 50, "sha512");
console.log("First key is generated");


// Async funtion

crypto.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key)=>{
    console.log("Second key is generated ");
})


function multiply(a, b){
    const result = a * b;
    return result;
}

var c = multiply;
console.log("Mutiplication result is : ", c);



// Sample Output

// Hello World

// First key is generated

// Multiplication result is : something

// Second key is generated
