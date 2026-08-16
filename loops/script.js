document.writeln("loop", "</br>");

let t = prompt("enter the number");

for (let i = 1; i <= 10; i++) {
    document.write(`${t} X ${i} = ${t * i}<br>`);
    console.log(t + " X " + i + " = " + i * t + "<br>");
}
