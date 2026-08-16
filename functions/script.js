function helloWorld() {
    console.log("hElLoWoRlD");
}
helloWorld();


function hello() {
    return "hello"
}

console.log(hello());

// rest parameter....


// With out rest 
function numbers(num1, num2, num3, num4) {
    console.log("The number are :-> ", num1, num2, num3, num4);
}
numbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

// with rest

function numbersRest(num1, num2, num3, num4, ...rest) {
    console.log("The number are :-> ", num1, num2, num3, num4, ...rest);

}
numbersRest(1, 2, 3, 4, 5, 6, 7, 8, 9);