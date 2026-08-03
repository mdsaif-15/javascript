// Data type in javascript

// Primintive data types 

// 1) String ----


let name = "Saif";

document.write(typeof (name) + "<br>");


// 2) Number ----

let Roll = 34;
document.write(typeof (Roll) + "<br>");
let num1 = 10;
let num2 = -10;
let num3 = 10.002;
console.log(typeof (num1));
console.log(typeof (num2));
console.log(typeof (num3));


// 3) Big int ----

let bigint = 1232346723n;

console.log(typeof (bigint));

// 4) Undefined -----


let a;
console.log(typeof (a));

let b = undefined;
console.log(typeof (b));

// 5) Null----


let c = null;
console.log(typeof (c));

// 6) Symbol

let unique = Symbol("name");
console.log(typeof (unique));
console.log(unique)

// 7) Boolean ----

let d = true

console.log(typeof (a))

// Refrence datatype 

// 1) Array ----

let arr = [10, 24, true, null, 2.5];
console.log(typeof (arr));

console.log(arr[0]);
console.log(typeof (arr[2]));

// 2) Object ---- key & value pair combination

let obj1 = {
    roll: 1,
    "name": "saif",
    "class": "2nd year"
}

let obj2 = {
    roll: 2,
    "name": "rahul",
    "class": "2nd year"
}

// 3) Function ----

// her num1 and num2 is paramerter
function add(num1, num2) {
    return num1 + num2;
};

// 23,45 are the argument 
console.log(add(23, 45));

