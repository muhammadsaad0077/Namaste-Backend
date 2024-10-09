const fs = require('fs')
const a = 7;

setImmediate(()=> console.log("SetImmediate is called"));

fs.readFile("'/file.txt", 'utf-8', ()=>{
    console.log("File reading is done");
    
})

setTimeout(()=>{
    console.log("SetTimeout is called");
    
}, 0);

function printA(a){
    console.log('a = ', a);
}

printA(a);

console.log("Last line of the code ");

// Sample Output

// a = 7

// Last line of the code

// SetTimeout is called 

// setImmediate is called

// File reading is done


