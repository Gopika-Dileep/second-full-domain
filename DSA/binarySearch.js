// -------------------------------------linear search------------------------------------
function linearsearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}
console.log(linearsearch([1,2,3,4,5,6,7],8))


// ----------------------------binary search------------------------------------
function binary (arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(target==arr[middle]){
            return middle
        }
        if(target<arr[middle]){
            right = middle-1
        }else{
            left = middle+1
        }
    }
    return -1
}

console.log(binary([1,2,3,4,5,6,7],7))

// ---------------------------------binary search using recursion------------------------

function binary(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let middle = Math.floor((left+right)/2)
    if(arr[middle]==target){
        return middle
    }
    if(target<arr[middle]){
        return search(arr,target,left,middle-1)
    }else{
        return search(arr,target,middle+1,right)
    }
}

console.log(binary([1,2,3,4,5,6,7],7))



// ---------------------------------------------------------------

// HOC

// function greet(name){
//     return ` hi ${name}`
// }

// function greetings(callback){
//     let name = "gopika"
    
//     console.log(callback(name))
// }

// greetings(greet)


// CALLBACK

// function greet (name){
//     console.log(`hi ${name}`)
// }

// function greetings(callback){
//     let name = "gopika"
//     callback(name)
// }

// greetings(greet)


// ILLEGAL SHADOWING

// let a = 10
// {
//     var a = 20
//     console.log(a)
// }

// LEGAL 
// var a = 10;

// function test() {
//   var a = 20; // shadows outer 'a' — this is legal
//   console.log(a); // 20
// }
// test();


// ✅ Legal shadowing (same type: let → let or var → var):
// ❌ Illegal shadowing (let/const in outer scope, var in inner):


// THIS KEYWORD

// The this keyword in JavaScript is a special variable that refers to the object that is currently executing the function.

// const person={
//     name:"gopika",
//     age:21,
//     greet :function(){
//         console.log(this.name)
//     }
// }

// person.greet()

// --------

// function Person(name){
//     this.name = name
// }

// const p1 = new Person("Gopika");
// console.log(p1.name)


// function greet(){
//     console.log(this.name)
// }

// let obj ={name:"gopika"}

// greet.call(obj);
// greet.apply(obj);
// const say = greet.bind(obj)
// say()


// THIS IN ARROW FUNCTION

// Main Rule

// ➡️ Arrow functions do not have their own this.
// Instead, they use (inherit) this from the scope where they were created.
// This is called lexical this.


// const person = {
//   name: "Gopika",
//   normalFunc: function () {
//     console.log(this.name); // "Gopika"
//   },
//   arrowFunc: () => {
//     console.log(this.name); // undefined
//   }
// };

// person.normalFunc(); // "Gopika"
// person.arrowFunc();  // undefined (inherits 'this' from global scope)



//THIS SUBSTITUTION

// Only in non-strict mode.

// Only for regular functions (not arrow functions).

// If this is explicitly set to null or undefined.

// this substitution is a JavaScript behavior where, in non-strict mode, 
// if this is null or undefined, JavaScript automatically replaces it with the global 
// object (window in browsers, global in Node.js).



// function showThis() {
//   console.log(this);
// }

// showThis.call(null); 
// // In non-strict mode → Window (browser)
// // In strict mode → null



// STARVATION

// In computing, starvation (also called indefinite blocking) is a 
// situation where a process or thread waits indefinitely to get access
//  to a resource because other processes keep taking it before it gets a chance.

// Where it happens

// Operating Systems → in scheduling (CPU, I/O tasks)

// Example – CPU Scheduling

// Imagine 3 processes:

// P1 (high priority)

// P2 (medium priority)

// P3 (low priority)

// If the CPU scheduler always runs high-priority 
// processes first and new high-priority processes keep 
// coming, P3 might never run — that’s starvation.


// CONSTRUCTOR FUNCTION

// A constructor function in JavaScript is a special 
// type of function used to create and initialize objects.

// Key Points

// Naming convention → Constructor functions are usually 
// capitalized (e.g., Person, Car) so it’s easy to recognize them.

// Usage with new → When called with the new keyword, a constructor function:

// Creates a new empty object.

// Sets this to that new object.

// Links the new object to the constructor’s prototype.

// Returns the new object (unless you explicitly return another object).



// function Person(name,age){
//     this.name = name 
//     this.age = age
//     this.sayhello=function(){
//         console.log(`hi my name is ${this.name}, my age is ${this.age}`)
//     }
// }

// let p1 = new Person("gopika",21)
// let p2 = new Person("shamnad",22)

// p1.sayhello()
// p2.sayhello()


// Person is the constructor function.

// new Person(...) creates separate objects with their own properties.



// NULL POINTER EXCEPTION
// A Null Pointer Exception (often called Null Reference Error in JavaScript) happens 
// when your code tries to access a property or call a method on a variable that is null or undefined.


// FUNCTION COMPOSITION

// Function composition is the process of combining two or more functions to produce a new function.

// It’s like connecting pipes:

// Each function takes the output of the previous function as its input.

// The final function gives you the result.


// Why use function composition?

// Makes code cleaner and more reusable.

// Lets you build complex operations by chaining small, simple function

// const add1 = x=>x+1
// const add2 = x=>x+2

// const combine = x =>add2(add1(x))

// console.log(combine(7))

// REST OPERATOR

// The rest operator (...) in JavaScript allows you to collect multiple values into a single array or object.

// It’s called "rest" because it takes the rest of the values and packs them together.


// SPREAD OPERATOR

// Spread Operator (...)

// Purpose:

// To expand (spread out) elements of an array or object into individual items.

// Mostly used when copying, merging, or passing multiple values.


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// const combined = [...arr1, ...arr2]; 
// console.log(combined); 
// // Output: [1, 2, 3, 4, 5]



// ------------------------------------------------------------------NODE-------------------------------------------


// QUERY PARAMETERS

// Query parameters are extra pieces of information that 
// you attach to the end of a URL to send data to the server.

// They are usually written after a ? in the URL, with each 
// key–value pair joined by = and multiple pairs separated by &.

// const express = require('express')
// const app = express();

// // GET /users/123
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });

// // GET /search?name=gopike&age=2
// app.get('/search', (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send(`Searching for "${name}", age ${age}`);
// });


// app.listen(5000, () => console.log('Server running on port 5000'));


// const express = require('express')

// const app = express();



// // GET /users/123

// app.get('/users/:id', (req, res) => {

//     const userId = req.params.id;

//     res.send(`User ID: ${userId}`);

// });



// // GET /search/details?name=gopike&age=2

// app.get('/search/:type', (req, res) => {

//     const name = req.query.name;

//     const age = req.query.age;

//     const type = req.params.type

//     res.send(`Searching for "${name}", age ${age} and : ${type}`);

// });





// app.listen(5000, () => console.log('Server running on port 5000'));


