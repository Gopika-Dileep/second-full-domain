// setTimeout

// let count=0
// const val = setInterval(()=>{
//     console.log(count)
//     count++
    
//     if(count > 10){
//     clearInterval(val)
// }
// },1000)

// // while 


// function * gen(mul) {
//     let count = 1
//     while(count) {
//         yield mul * count
//         count++;
//     }
// }

// let newGen = gen(5);
// console.log(newGen.next().value)
// console.log(newGen.next().value)
// console.log(newGen.next().value)
// console.log(newGen.next().value)
// console.log(newGen.next().value)
// console.log(newGen.next().value)
// console.log(newGen.next().value)


// console.log(newGen.next().value)




// // print from 5 to 0 leaving i sec gap between every prints using generator function

// // 1) A tiny delay helper: returns a Promise that resolves after ms milliseconds
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// // 2) A normal (sync) generator: yields start, start-1, ..., 0
// function* countdownGen(start) {
//   let count = start;
//   while (count >= 0) {
//     yield count;   // hand one value to the caller, then pause here
//     count--;
//   }
// }

// // 3) An async runner: consumes the generator, pausing 1s between values
// async function runCountdown(gen) {
//   for (let value of gen) {     // pulls each 'yield' value from the generator
//     console.log(value);        // print it
//     await wait(1000);          // pause this async function for ~1 second
//   }
// }

// // 4) Create the generator and run it
// const gen = countdownGen(5);
// runCountdown(gen);             // returns a Promise (you could await/then it)


// my way of doing that

// function timer(time){
//     return new Promise(resolve=>setTimeout(resolve,time))
// }

// function * gen(start){
//     let count = start
//     while(count>=0){
//         yield count
//         count--
//     }
// }

// async function count(gen){
//     for(let value of gen){
//         console.log(value)
//         await timer(1000)
//     }
    
// }

// const newGen = gen(5)
// count(newGen)





// // print even numbers in reverse loop using timer skip elements between that 

// function* evenCountdown(start) {
//   let skip = false; // toggle between print and skip
//   for (let i = start; i >= 0; i--) {
//     if (i % 2 === 0) {
//       if (!skip) {
//         yield i; // only yield if not skipping
//       }
//       skip = !skip; // flip between true/false
//     }
//   }
// }

// async function printWithDelay() {
//   const gen = evenCountdown(10);

//   for (const num of gen) {
//     console.log(num);        // print number
//     await new Promise(r => setTimeout(r, 1000)); // wait 1 sec
//   }
// }

// printWithDelay();

// // my way 

// function * gen(start){
//     let flag = false 
//  for(i=start;i>=0;i--){
//      if(i%2==0){    
//          if(!flag){
//              yield i
//          }
//          flag = !flag
         
//      }
//  }
// }


// async function count(){
//     const newGen=gen(100)
//     for(let value of newGen){
//         console.log(value)
//         await new Promise(resolve => setTimeout(resolve,1000))
//     }
// }

// count()


// // print random even number between 0 to 100

// function start(){
//    let val = Math.floor(100*Math.random())
//    if(val%2==0){
//        return val
//    }else{
//       return  start()
//    }
// }


// console.log(start())



// // callback hell
// function doSomething(callback) {
//     setTimeout(() => {
//         console.log("Step 1: Did something");
//         callback("Result of Step 1");
//     }, 500);
// }

// function doSomethingElse(input, callback) {
//     setTimeout(() => {
//         console.log("Step 2: Did something else with", input);
//         callback("Result of Step 2");
//     }, 500);
// }

// function doThirdThing(input, callback) {
//     setTimeout(() => {
//         console.log("Step 3: Did third thing with", input);
//         callback("Result of Step 3");
//     }, 500);
// }

// function doFourthThing(input, callback) {
//     setTimeout(() => {
//         console.log("Step 4: Did fourth thing with", input);
//         callback("Result of Step 4");
//     }, 500);
// }


// doSomething(function (result1) {
//     doSomethingElse(result1, function (result2) {
//         doThirdThing(result2, function (result3) {
//             doFourthThing(result3, function (result4) {
//                 console.log("All done with", result4);
//             });
//         });
//     });
// });


// // promise chaining

// function doSomething() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 1: Did something");
//             resolve("Result of Step 1");
//         }, 500);
//     });
// }

// function doSomethingElse(input) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 2: Did something else with", input);
//             resolve("Result of Step 2");
//         }, 500);
//     });
// }

// function doThirdThing(input) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 3: Did third thing with", input);
//             resolve("Result of Step 3");
//         }, 500);
//     });
// }

// function doFourthThing(input) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 4: Did fourth thing with", input);
//             resolve("Result of Step 4");
//         }, 500);
//     });
// }

// doSomething()
//     .then(result1 => doSomethingElse(result1))
//     .then(result2 => doThirdThing(result2))
//     .then(result3 => doFourthThing(result3))
//     .then(result4 => console.log("All done with", result4))
//     .catch(err => console.error(err));


// // async/await 

// // Simulated async functions
// function doSomething() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 1: Did something");
//             resolve("Result of Step 1");
//         }, 500);
//     });
// }

// function doSomethingElse(input) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 2: Did something else with", input);
//             resolve("Result of Step 2");
//         }, 500);
//     });
// }

// function doThirdThing(input) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 3: Did third thing with", input);
//             resolve("Result of Step 3");
//         }, 500);
//     });
// }

// function doFourthThing(input) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 4: Did fourth thing with", input);
//             resolve("Result of Step 4");
//         }, 500);
//     });
// }

// async function runTasks() {
//     try {
//         const result1 = await doSomething();
//         const result2 = await doSomethingElse(result1);
//         const result3 = await doThirdThing(result2);
//         const result4 = await doFourthThing(result3);
//         console.log("All done with", result4);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

// // Start the process
// runTasks();


// closure

// function createCounter() {
//     let count = 0; // private variable
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.count); // undefined (can't access directly)


// generator function

// function * gen() {
//     console.log("hello");
//     yield
//     console.log("Gopika");
//     yield
//     console.log("Shamnad")
// }

// let newGen = gen();
// newGen.next()
// newGen.next()
// newGen.next()



// call apply bind

// function greet(city, country) {
//   console.log(`Hello, my name is ${this.name} from ${city}, ${country}`);
// }

// const person = { name: "Shamnad" };

// greet.call(person, "Malappuram", "India");
// // Output: Hello, my name is Shamnad from Malappuram, India

// greet.apply(person, ["Malappuram", "India"]);
// // Output: Hello, my name is Shamnad from Malappuram, India

// const greetShamnad = greet.bind(person, "Malappuram", "India");
// greetShamnad();
// Output: Hello, my name is Shamnad from Malappuram, India





// otp generation

// function genOtp() {
//     return Math.floor(1000000 * Math.random());
// }

// console.log(genOtp())
// console.log(genOtp())





// Date printing

// let date = new Date();
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleTimeString('en-GB'))

// let options = {
//     timeZone: "Asia/kolkata",
//     hour12: true
// }

// console.log(date.toLocaleTimeString('en-IN', options))



// proxy object example


// A Proxy in JavaScript is an object that lets you intercept and customize 
// operations performed on another object.

// Think of it like a middleman (or security guard) standing in 
// front of an object:

// Whenever you try to get, set, or perform some action on the object,
// the Proxy can decide what happens.

// 🔹 Example 1: Simple Proxy with get

// const user = {
//   name: "Alice",
//   age: 22
// };

// const proxy = new Proxy(user, {
//   get(target, property) {
//     console.log(`Accessing property: ${property}`);
//     return target[property];
//   }
// });

// console.log(proxy.name);  // logs "Accessing property: name" → "Alice"
// console.log(proxy.age);   // logs "Accessing property: age" → 22


// 🔹 Example 2: With set

// const user = {
//   name: "Bob",
//   age: 25
// };

// const proxy = new Proxy(user, {
//   set(target, property, value) {
//     if (property === "age" && value < 0) {
//       throw new Error("Age cannot be negative!");
//     }
//     target[property] = value;
//     return true; // must return true to indicate success
//   }
// });

// proxy.age = 30;   // ✅ works
// console.log(proxy.age); 

// // proxy.age = -5;  // ❌ throws Error: Age cannot be negative!


// 🔹 Example 3: With deleteProperty

// const user = {
//   name: "Charlie",
//   age: 28
// };

// const proxy = new Proxy(user, {
//   deleteProperty(target, property) {
//     console.log(`Deleting property: ${property}`);
//     delete target[property];
//     return true;
//   }
// });

// delete proxy.age;   // logs "Deleting property: age"
// console.log(proxy); // { name: "Charlie" }



// ------- find the sum of even numbers using callback ,reduce,rest operator

// function sample1(callback,...nums){
//     return callback(...nums)
// }

// function sum(...nums){
//     let val = nums.filter(num=>num%2===0)
//     let result = val.reduce((acc,curr)=>acc+curr,0)
//     return result
// }

// console.log(sample1(sum,1,2,3,4,5,6,7))


// // Example With Event Delegation

// document.getElementById("buttonContainer").addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     console.log("Button clicked:", event.target.textContent);
//   }
// });




// ------------------------this keyword --------------------------------------


// --------------------------------explicit substitution----------------------

// call apply bind

// function greet(greeting) {
//     console.log(`${greeting}, I am ${this.name}`);
// }

// const person = { name: "Alice" };

// greet.call(person, "Hello");  // Hello, I am Alice


// greet.apply(person, ["Hi"]);  // Hi, I am Alice


// const boundGreet = greet.bind(person);
// boundGreet("Hey");  // Hey, I am Alice



// -----------------------------------Implicit this Substitution---------------------

// const obj1 = {
//     name: "Bob",
//     greet() {
//         console.log(this.name);
//     }
// };

// const obj2 = { name: "Charlie" };

// // Implicit substitution
// obj2.greet = obj1.greet;
// obj2.greet(); // Charlie

// ------------------------------------this in Arrow Functions (Lexical Substitution)

// const obj = {
//     name: "Alice",
//     greet: function() {
//         const arrowFunc = () => console.log(this.name);
//         arrowFunc();
//     }
// };

// obj.greet(); // Alice


// -----------constructor function ---------------------------------


// function Greet(name){
//     this.name = name
//     this.grt=function(){
//         console.log(`hello ${this.name}`)
//     }
// }

// const greet = new Greet("gopika")
// greet.grt()


// ------one more example 

// // Constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   };
// }

// // Creating an object using 'new'
// const person1 = new Person("Alice", 25);
// person1.greet(); // Hello, my name is Alice and I am 25 years old.

// ------------------------------------class constructor
// // Constructor class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// // Creating an object using 'new'
// const person2 = new Person("Bob", 30);
// person2.greet(); // Hello, my name is Bob and I am 30 years old.



// ---------------------------array destructuring -------------------------------------


// const numbers = [10, 20, 30];

// const [a, b, c] = numbers;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// -----------------------------object destructuring --------------------------

// const person = { name: "Alice", age: 25, city: "New York" };

// const { name, age, city } = person;

// console.log(name); // "Alice"
// console.log(age);  // 25
// console.log(city); // "New York"


// -------------------join two arrays using spread opertaor------------------------

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let newarr = [...arr, ...arr2]
// console.log(newarr)


// --------------------------------generator function -----------------------------------

// function *gen(limit){
//     let i=0
// while(i<limit){
//     yield i
//     i++
// }
// }


// let num = gen(4)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)



// -----------------------------shallo copy----------------------
// let arr  = [1,2,3,[6,7],4];
// let bb = [...arr]


// let obj = { a: 1, b: { c: 2 } };
// let copy = { ...obj };

// copy.a = 99;         
// console.log(obj.a);  // 1 → top-level property is independent

// copy.b.c = 100;      
// console.log(obj.b.c); // 100 → nested object is shared


// ----------------------------deep copy-------------------------------------------
// let arr = [1, 2, 3, [6, 7], 4];
// let bb = JSON.parse(JSON.stringify(arr));

// bb[3][0] = 100;
// console.log(arr[3][0]); // 6 → original array is untouched



// let obj = { a: 1, b: { c: 2 } };
// let deepCopy = JSON.parse(JSON.stringify(obj));

// deepCopy.b.c = 100;
// console.log(obj.b.c); // 2 → original object untouched








// ---------------------------------proxy object--------------------------------------------------------------------'-

// // Target object
// const target = {
//   name: "Alice",
//   age: 25
// };

// // Handler object with traps
// const handler = {
//   // Intercept property access
//   get: function(obj, prop) {
//     console.log(`Accessing property "${prop}"`);
//     return prop in obj ? obj[prop] : "Property does not exist";
//   },
  
//   // Intercept property assignment
//   set: function(obj, prop, value) {
//     console.log(`Setting property "${prop}" to "${value}"`);
//     if (prop === "age" && typeof value !== "number") {
//       throw new TypeError("Age must be a number");
//     }
//     obj[prop] = value;
//     return true; // indicate success
//   }
// };

// // Create a Proxy
// const proxy = new Proxy(target, handler);

// // Using the proxy
// console.log(proxy.name);  // Accessing property "name" -> Alice
// console.log(proxy.gender); // Accessing property "gender" -> Property does not exist

// proxy.age = 30;            // Setting property "age" to "30"
// console.log(proxy.age);    // 30

// // proxy.age = "thirty";   // Throws TypeError: Age must be a number



// --------------------my way of doing it 

// const obj={
//     name:"shamnad",
//     age:20
// }

// const handler={
//     get:function(obj,prop){
//         console.log(`property is  ${prop}`)
//         return prop in obj ?obj[prop]:"empty"
//     },
    
//     set:function(obj,prop,value){
//         console.log(`seting property is ${prop} to ${value}`)
//         if(prop==="age"&& typeof value!=="number"){
//             throw new Error("age should be number")
//         }
//         obj[prop] =value
//         return true
//     }
// }

// const proxy = new Proxy(obj,handler)

// // console.log(proxy.name)
// // console.log(proxy.gender)

// proxy.age = 21
// console.log(proxy.age)




// --------------------------function composition------------------------------

// const trim = str => str.trim();
// const toLowerCase = str => str.toLowerCase();
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);




// -----------------------------------------deep freeze----------------------------------------------------

// function deepFreeze(obj) {
//   // First, freeze the top-level object
//   Object.freeze(obj);

//   // Loop through each property
//   Object.keys(obj).forEach(key => {
//     const value = obj[key];
//     // If the property is an object and not null, recursively freeze it
//     if (value && typeof value === "object") {
//       deepFreeze(value);
//     }
//   });

//   return obj;
// }




// -------------------------------Set--------------------------

// let myset = new Set()

// myset.add(1)
// myset.add(2)
// myset.add(6)
// console.log(myset)

// console.log(myset.has(6))
// console.log(myset.delete(2))
// console.log(myset)


// -----------------------------new set------------------------

// let numbers = [1, 2, 2, 3, 4, 4, 5];

// let num = [...new Set(numbers)]

// console.log(num)


// -----------------------------largest odd number using reduce

// const numbers = [2, 17, 8, 25, 30, 41, 6];

// const largestOdd = numbers.reduce((max, n) => {
//   if (n % 2 !== 0 && n > max) {
//     return n;
//   }
//   return max;
// }, -Infinity);

// console.log(largestOdd); // 41



// ------------------------------------currying--------------------------------

// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const addTwo = add(2); // returns a function that adds 2
// addTwo(3); // 5


// --------------------------------------flat map ()--------------------------------------

// with map 

// const mapped = arr.map(x => [x, x * 2]);
// console.log(mapped);
// [[1, 2], [2, 4], [3, 6]]   <-- nested arrays

// withflatmap

// const flattened = arr.flatMap(x => [x, x * 2]);
// console.log(flattened);
// [1, 2, 2, 4, 3, 6]   <-- flat, no nesting


// --------flatmap

// const sentences = ["I love JS", "flatMap is cool"];

// const words = sentences.flatMap(sentence => sentence.split(" "));

// console.log(words);
// ["I", "love", "JS", "flatMap", "is", "cool"]


// -------

// const numbers = [1, 2, 3];

// const result = numbers.flatMap(n => [n, n * 2]);

// console.log(result);
// [1, 2, 2, 4, 3, 6]


// -----------------


// const nums = [1, 2, 3, 4, 5];

// // Keep only even numbers, and double them
// const evensDoubled = nums.flatMap(n => n % 2 === 0 ? [n * 2] : []);

// console.log(evensDoubled);
// [4, 8]




// --------------------------example for bind()-------------------------

const person = {
    name: "Alice",
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

const anotherPerson = { name: "Bob" };

// Normally, calling person.greet() works:
person.greet("Hello"); // Output: "Hello, my name is Alice"

// But if we extract the function:
const greetFunc = person.greet;
greetFunc("Hi"); // Output: "Hi, my name is undefined"

// Using bind to fix 'this':
const boundGreet = person.greet.bind(anotherPerson);
boundGreet("Hey"); // Output: "Hey, my name is Bob"



// ------------------------------------promise.all,race,allsettles,any

// const promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hello")
//     },1000)
// })

// const promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("world")
//     },1000)
// })

// Promise.all([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })

// Promise.race([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })

// Promise.any([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })

// Promise.allSettled([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })


// --------------------------------with reject
// const promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hello")
//     },1000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("world")
//     },1000)
// })

// Promise.all([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// Promise.race([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// Promise.any([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// Promise.allSettled([promise1,promise2])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })



// ---------------------------------proxy object


const user = {
  name: "Alice",
  age: 25
};

const proxyUser = new Proxy(user, {
  // Intercept property read
  get(target, prop) {
    console.log(`Getting "${prop}"`);
    return prop in target ? target[prop] : "Not Found";
  },

  // Intercept property write
  set(target, prop, value) {
    console.log(`Setting "${prop}" to`, value);

    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }

    target[prop] = value;
    return true; // must return true
  },

  // Intercept delete
  deleteProperty(target, prop) {
    console.log(`Deleting "${prop}"`);

    if (prop === "name") {
      console.log("Cannot delete name");
      return false;
    }

    delete target[prop];
    return true;
  },

  // Intercept `in` operator
  has(target, prop) {
    console.log(`Checking if "${prop}" exists`);
    return prop !== "password" && prop in target;
  }
});




console.log(proxyUser.name);
// Getting "name"
// Alice

proxyUser.age = 30;
// Setting "age" to 30

console.log(proxyUser.email);
// Getting "email"
// Not Found

console.log("age" in proxyUser);
// Checking if "age" exists
// true

console.log("password" in proxyUser);
// Checking if "password" exists
// false

delete proxyUser.age;
// Deleting "age"

delete proxyUser.name;
// Deleting "name"
// Cannot delete name



// --------------------------------------------todelete last key of obj(from pendings)
//normal way 
// delete user.age 


// const user={
//     name:"Alice",
//     age:25
// }

// let lastKey = Object.keys(user).pop()
// console.log(lastKey)

// delete user[lastKey]
// console.log(user)




// -------------------------------move negative number to left || right-----------------------------------
// moving to left

// let arr = [-1, 6, 9, -5, 0, 10, 3, -7];

// let index = 0; // Tracks position for non-positive numbers

// // Move non-positive numbers to the front
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <=0) {
//         [arr[i], arr[index]] = [arr[index], arr[i]]; // Swap
//         index++; // Move the boundary
//     }
// }

// console.log(arr);


// ---moving to right
// let index = arr.length-1

// for(let i = arr.length-1; i>=0;i--){
//     if(arr[i]<0){
//         [arr[i],arr[index]] = [arr[index],arr[i]]
//         index--
//     }
// }

// console.log(arr)

// -------------------------------------moving zeros to left and right

// ----move to right
// let arr=[1,0,2,0,3,0,4,0,5,0,6,0,7]
// let j=0; 
// for(i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         arr[j]=arr[i]
//         j++
//     }
// }for(i=j;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr)


// ---move to left 
// let j = arr.length -1 

// for(let i = arr.length-1 ; i>=0;i--){
//     if(arr[i]!=0){
//         arr[j] = arr[i]
//         j--
//     }
// }

// for(let i = j ; i>=0;i--){
//     arr[i] = 0
// }

// console.log(arr)



// -------------------------------------------write a function which will convert an object to string

// function objectToString(obj) {
//     return Object.entries(obj)
//         .map(([key, value]) => `${key}=${value}`)
//         .join('&');
// }

// // Example usage:
// let obj = {
//     name: 'hisham',
//     age: 20
// };

// let output = objectToString(obj);
// console.log(output); // "name=hisham&age=20"






// ----------------------------------------------------OOPS Concept------------------------------------------------------

// 4 Main OOPS Concepts

// Encapsulation

// Abstraction

// Inheritance

// Polymorphism

// Before that, let’s see Class & Object.


// // ======class - a class is a blueprint

// class Person{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   greet(){
//     console.log(`hi, i am ${this.name},${this.age} `)
//   }
// }

// //====== Object - an object created from class

// const p1 = new Person("Gopika",22)
// p1.greet()




// ===============================Encapsulation 

// binding data + methods together and protecting data from direct access

// 🔹 Real-life example

// 💊 Capsule medicine
// Medicine is inside → you can’t see or touch it directly

// In JavaScript

// Variables are hidden

// Access happens through methods


// class BankAccount{
//   #balance =0

//   deposite(amount){
//     this.#balance+=amount
//   }

//   getBalance(){
//     return this.#balance
//   }
// }

// const acc = new BankAccount()

// acc.deposite(1000)
// console.log(acc.getBalance())

// acc.#balance // will cause error
// acc.#balance=1000 //will also cause error


// ==============================Abstraction 

// What it REALLY means

// Showing only what is necessary and hiding how it works internally


// Real- life example

// 🚗 Driving a car

// You press accelerator

// Car moves

// You don’t know engine logic

// class ATM{
//   withdraw(amount){
//     this.#verifyPin()
//     this.#checkBalance(amount)
//     console.log("cash withdraw")
//   }
//   #verifyPin(){
//     console.log("pin verified")
//   }
//   #checkBalance(amount){
//     console.log("balance checked")
//   }
// }

// const atm = new ATM()
// atm.withdraw(2000)

// =======================inheritance

// one class uses properties/methods of another class

// class Employee{
//   constructor(name){
//     this.name = name
//   }
//   work(){
//     console.log(this.name+"is working")
//   }
// }

// class Developer extends Employee{
//   code(){
//     console.log(this.name+"is coding")
//   }
// }


// const dev = new Developer("Gopika")
// dev.work()
// dev.code()


// ====Polymorphism

// same method name but different behavior

// class Animal{
//   sound(){
//     console.log("animal makes sound")
//   }
// }

// class Dog extends Animal{
//   sound(){
//     console.log("dog barks")
//   }
// }

// class Cat extends Animal{
//   sound(){
//     console.log("cats meows")
//   }
// }

// const animals = [new Dog() , new Cat()]

// animals.forEach(animal=>animal.sound())