// operators in javascript

// 1) Arithmatic operators...

// "+" ... addition
console.log(5+3);

// "-" ... subtraction
console.log(5-3);

// "*"... 
console.log(5*3);

// "/"...
console.log(6/3);

// "%"...
console.log(5%2);

// "**"... power
console.log(5**3);

// 2) Assignment operator

// "="...
let a = 5;
console.log(a);

// +=  -=  /=  *=  %= veriation

console.log(a += 3);

console.log(a -= 3);

console.log(a /= 3);

console.log(a *= 3);

console.log(a %= 3);

// 3) Comperison operator...

// == 

console.log(12==12);
console.log(12==13);
console.log(12=="12.00");

// ===

console.log(12===12);
console.log(12==="12.00");
console.log(12===13);

// != 
console.log(12!=12);
console.log(13!=12);

// !==
console.log(12!=="12");
console.log(12!==13);

// >=
console.log(12>=12);
console.log(13>=12);
console.log(10>=12);

// <=
console.log(12<=12);
console.log(12<=13);
console.log(12<=10);

// >
console.log(13>12);
console.log(12>12);

// <
console.log(12<13);
console.log(12<12);

// 4) Logical operators....

// AND -> "&&"

console.log(true&&true);
console.log(false&&true);
console.log(true&&true&&true);
console.log(true&&false&&true);

// OR -> "||"

console.log(true||false);
console.log(false||false);
console.log(true||true);

// NOT -> "!"

console.log(!true);
console.log(!false);

// 5) Ternary operators....

// ? :

// True/False?If true then this line or code  : else this line or code 

true ? console.log("I am true"):console.log("I am false");
false ? console.log("I am true"):console.log("I am false");

