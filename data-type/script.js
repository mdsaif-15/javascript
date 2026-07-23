// Data type 

// primintive data types 

// 1) string ----


let name = "Saif";

document.write(typeof (name) + "<br>");


// 2) number ----

let Roll = 34;
document.write(typeof (Roll) + "<br>");
let num1 = 10;
let num2 = -10;
let num3 = 10.002;
console.log(typeof (num1));
console.log(typeof (num2));
console.log(typeof (num3));


// 3) big int ----

let bigint = 1232346723n;

console.log(typeof (bigint));

// 4) undefined -----


let a;
console.log(typeof (a));

let b = undefined;
console.log(typeof (b));

// 5) null----


let c = null;
console.log(typeof (c));

// 6) symbol

let unique = Symbol("name");
console.log(typeof (unique));
console.log(unique)

// 7) boolean ----

let d = true
console.log(typeof (d))