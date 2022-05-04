
function fun(){
    let date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

setInterval(fun,1000);


function getVal(){
    let a = document.querySelector("input").value;
console.log(a);
}




let numberOne = 20;
let numberTwo = 10;
let x = 5;
document.getElementById("addition").innerHTML = numberOne + numberTwo;
document.getElementById("sub").innerHTML = numberOne - numberTwo;
document.getElementById("multi").innerHTML = numberOne * numberTwo;
document.getElementById("division").innerHTML = numberOne / numberTwo;
document.getElementById("mod").innerHTML = numberOne % numberTwo;
console.log(numberOne++);
document.getElementById("increment").innerHTML = numberOne++;
console.log(numberOne--);
document.getElementById("decrement").innerHTML = numberOne--;


document.getElementById("additionAssignment").innerHTML = x+=10;
