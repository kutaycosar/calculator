

const display = document.querySelector('#grid-display');
const buttons = document.querySelectorAll('.button');




// buttons on click to change displayText and display.innerText to button values
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        
        
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

