function hello(){
    var a = 10;
    if(a > 0){
        var a = 20;
        console.log(a);
        
    }
    console.log(a);
    
}

hello()


function print(){
    console.log("Here is normal ftn ");
    console.log(this);
    
    
}

const a = ()=>{
    console.log("Here is arrow function ");
    console.log(this);
    
    
}

print()
a()

const person = {
    name: "Saad",
    age: 19,
    greet: function hello(){
        console.log("Hello " + this.name);
    },
    greetDelayed: function hey(){
        setTimeout(function(){
            console.log("Hello " + this.name);
        }, 1000)
        
        
    }
}

person.greet()
person.greetDelayed()

