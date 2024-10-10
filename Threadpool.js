const fs = require('fs')
const crypto = require('crypto')

process.env.UV_THREADPOOL_SIZE = 5; // This is to set the size of thread pool to execute async processes at a time, by default it is 4

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("1 - cryptoPBKF2 done");
    
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("2 - cryptoPBKF2 done");
    
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("3 - cryptoPBKF2 done");
    
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("4 - cryptoPBKF2 done");
    
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("5 - cryptoPBKF2 done");
    
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("6 - cryptoPBKF2 done");
    
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("7 - cryptoPBKF2 done");
    
})