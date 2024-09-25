var a = 10;
var b = 10;

console.log("Hello World");



function multiply(a, b){
    const result = a * b;
    return result;
}

setTimeout(()=>{              // This will be printed at last because libuv gives back the function to call stack when it is empty and call stack will be empty when all the synchronous code sucessfully executed and after that async code will be executed
    console.log("SetTimeOut is called after 0 seconds");
    
}, 0);

var c = multiply;
console.log("Multiplication result is ", c);


// Sample Output

// Hello World

// Multiplication result is 100

// SetTimeOut is called after 0 seconds


