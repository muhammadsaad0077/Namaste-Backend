const fs = require('fs')
const a = 7;

setImmediate(()=> console.log("SetImmediate called"));

Promise.resolve().then(()=> console.log("Promise resolved"));

fs.readFile("./file.txt", 'utf-8', ()=>{
    console.log("File read done"); 
})

setTimeout(()=>{
    console.log("SetTimeout callled"); 
}, 0)

setTimeout(()=>{
    console.log("SetTimeout 2 callled"); 
}, 0)

process.nextTick(()=> console.log("process.nexttick is called"));

function printA(){
    console.log("a = ", a);
    
}

printA();
console.log("Last line of the code");

// Sample Output

// a = 7

// Last line of the code

// process.nextTick is called

// promise resolved

// settimeout is called

// settimeout 2 is called


// setimmediate is called

// File read done


