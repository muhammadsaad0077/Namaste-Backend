const fs = require('fs');

setImmediate(()=> console.log("Setimmediate called"));

setTimeout(()=>{
    console.log("settimeout called");
    
}, 0);

Promise.resolve().then(()=>console.log("Promise resolved"));

fs.readFile("./file.txt", "utf-8", ()=>{
    setTimeout(()=>{
        console.log("2nd settimeout called");
        
    }, 0)

    process.nextTick(()=> console.log("2nd Nexttick called"));
    
    setImmediate(()=> console.log("2nd setimmediate called"));

    console.log("File reading");
    
})

process.nextTick(()=> console.log("nexttick called"));

console.log("Last line of the code");

// Sample Output

/*

Last line of the code
nexttick called
Promise resolved
settimeout called
Setimmediate called
File reading
2nd Nexttick called
2nd settimeout called
2nd setimmediate called



*/

