

const display = document.querySelector('#grid-display');
const buttons = document.querySelectorAll('.button');

const numberArray = ["1","2","3","4","5","6","7","8","9","0"];

let displayText = "";
let firstNumber;
let secondNumber;
let operator = "";


// buttons on click to change displayText and display.innerText to button values
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        display.innerText += event.target.value;
        displayText = display.innerText;
        //if button is operator
        if(!numberArray.includes(event.target.value)){
            if(event.target.value !== "="){
                operator = event.target.value;
                firstNumber = displayText.replace(operator, "");
                //if button is  =
            }else{
                // takeSecondNumber();
                secondNumber = displayText.replace(firstNumber, "").replace(operator, "").replace("=", "");

                
                display.innerText = operate(firstNumber, secondNumber, operator );
            }
        }
        
    })
})



//numbers operatıon
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


console.log(operate(1, 2, "+"));

