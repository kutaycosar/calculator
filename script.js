debugger;
function operate(number1, number2, operator) {
    switch (operator) {
        case operator: "+"
            return number1 + number2;
            break;
        case operator: "-"
            return number1 - number2;
            break;
        case operator: "*"
            return number1 * number2;
            break;
        case operator: "/"
            return number1 / number2;
            break;        
        default:
            break;
    }
    return (number1)(operator)(number2);
}


console.log(operate(1, 2, "+"));

