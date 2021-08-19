// tictactoe dan sonra devam edilecek

const inputDisplay = document.querySelector('#grid-display');
const resultDisplay = document.querySelector('#grid-display-result');
const buttons = document.querySelectorAll('.button');

const numbersArray = ["1","2","3","4","5","5","6","7","8","9","0"];
const operatorArray = ["+","-","*","/"];


let input = "";

let firstNum = "";
let secNum = "";

let operator = "";

let result = "";

// buttons on click
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        input = event.target.value;
        inputDisplay.innerText += input;
        //if input number
        if(numbersArray.includes(input)){
            ifNumber(input);

        }else if(operatorArray.includes(input)){
            ifOperator(input);

        }else if(input === "="){
            ifEquality(input);
        }else if(input === "clear"){
            ifClear();
        }
        
    })
})

function ifOperator(input){
    if (isReadyToOperate()) {
        result = operate(firstNum, secNum, operator);

        resultDisplay.innerText = result;
        

        firstNum = result;
        secNum = "";
        result = "";
        operator = input;

    } else {
        if(firstNum !== ""){
            operator = input;
            resultDisplay.innerText = firstNum + operator;
        }else{
            inputDisplay.innerText = "";
        }
        
    }
}


function ifNumber(input){
    
    if (isFirstNum(input)) {
        firstNum += input
    } else {
        secNum += input
    }
}

function isFirstNum(input){

    return (operator === "");
}

function ifEquality(input){
    result = operate(firstNum, secNum, operator);
    firstNum = result;
    secNum = "";
    resultDisplay.innerText = result;
    inputDisplay.innerText = "";
    result = "";
}


function ifClear(){
    inputDisplay.innerText = "";
    resultDisplay.innerText = "";
    firstNum = "";
    secNum = "";
    operator = "";
    
}

function isReadyToOperate(){
    return (firstNum !== "" && secNum !== "" && operator !== "");
}


//numbers operation
function operate(number1, number2, operator) {
    firstNumber = parseInt(number1);
    secondNumber = parseInt(number2);
    
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
            break;
        case "-":
            return firstNumber - secondNumber;
            break;
        case "*":
            return firstNumber * secondNumber;
            break;
        case "/":
            return firstNumber / secondNumber;
            break;        
        default:
            break;
    }
    
}



