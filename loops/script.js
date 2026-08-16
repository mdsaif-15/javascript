document.writeln("loop", "</br>");

//let t = prompt("enter the number");

// for (let i = 1; i <= 10; i++) {
//     document.write(`${t} X ${i} = ${t * i}<br>`);
//     console.log(t + " X " + i + " = " + i * t + "<br>");
// }

// while loop----

let stopInstraction = ""
let i = 0;
while (i <= 100) {
    console.log(i);
    if (i === 56) {
        stopInstraction = "stop"
    }
    if (stopInstraction === "stop") {
        break;
    }
    i++;
}

