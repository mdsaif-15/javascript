console.log("if - else");

// if , else , elseif....

let isRain = true;

if (isRain == true) {
    console.log("raining outside");
}
else {
    console.log("not raining outside");
}

// voting system -

// if age is under 18 print→> not eligible for- vote. 
// if age is greater than 55 print → over aged.
// else →> eligible for vote.

let age = prompt("enter the age: ")
if (age < 18) {
    console.log("not eligible for vote....");
}
else if (age >= 18 && !age > 55) {
    console.log("eligible for vote....");

}
else {
    console.log("over age");
}

// falsy values -> null, undefined, 0, -1, t'', NaN, On 
// truthy values-> rest all

//switch case 

let day = "monday"

switch (day){
    case "monday":
        console.log("working day");
        break;
    case "tuesday":
        console.log("working day");
        break;
    case "wednesday":
        console.log("working day");
        break;
    case "thusday":
        console.log("working day");
        break;
    case "friday":
        console.log("working day");
        break;
    case "saturday":
        console.log("not working day");
        break;
    case "sunday":
        console.log("not working day");
        break;
}