const fs = require('fs');
const https = require('https');

console.log("Hello World");

var a = 123;
var b = 233;

https.get( 'https://dummyjson.com/prducts/1', (res)=>{
        console.log("API Called Successfully");     
});


setTimeout(()=>{
    console.log("SetTimeout is  called after 5 seconds");
}, 5000);


fs.readFile("./file.txt", "utf-8" ,(err, data)=>{
    console.log("File data is : ", data);  
});

const multiply = (a, b) =>{
    return a * b;
};

var c = multiply(a, b);

console.log(`Multiply of two numbers = ${c}`);


// Sample Output

// Hello World

// Multiply of two numbers = ...(something)

// File data is : Data from the file

// API Called sucessfully

// SetTimeout called after 5 seconds




