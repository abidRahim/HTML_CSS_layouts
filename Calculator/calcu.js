const numberButton =  document.querySelectorAll(".number,.operator");
const equalTo = document.querySelector(".equal");
const operator = document.querySelectorAll(".operator");
let display = ""

numberButton.forEach(i=>{i.addEventListener("click",function(){
    display+=i.textContent;
    document.querySelector(".header").textContent = display;})})

equalTo.addEventListener("click",function(){
const operatorIndex = display.search(/[+\-*/]/);
if (operatorIndex === -1) {
    document.querySelector(".header").textContent = "Invalid expression";
    return;
}

const num1 = parseFloat(display.slice(0, operatorIndex));
const num2 = parseFloat(display.slice(operatorIndex + 1));
const operator = display[operatorIndex];

let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            document.querySelector(".header").textContent = "Division by zero";
            return;
        }
        result = num1 / num2;
        break;
    default:
        document.querySelector(".header").textContent = "Invalid operator";
        return;
    }
document.querySelector(".header").textContent = result;
});
const clear = document.querySelector(".clear");
clear.addEventListener("click",function(){
    display = "";
    document.querySelector(".header").textContent = display;
})

