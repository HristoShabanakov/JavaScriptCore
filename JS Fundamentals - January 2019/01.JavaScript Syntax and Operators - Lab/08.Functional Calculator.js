function calculate(firstNumber, secondNumber, operator){
    let calculation = function(firstNumber, secondNumber, operator){
        return operator(firstNumber, secondNumber);
    }
    let addition = function(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }

    let subtract = function(firstNumber, secondNumber){
        return firstNumber - secondNumber;
    }

    let multiply = function(firstNumber, secondNumber){
        return firstNumber * secondNumber;
    }

    let divide = function(firstNumber, secondNumber){
        return firstNumber / secondNumber;
    }

    switch(operator){
        case '+': return calculation(firstNumber, secondNumber, addition);
        case '-': return calculation(firstNumber, secondNumber, subtract);
        case '*': return calculation(firstNumber, secondNumber, multiply);
        case '/': return calculation(firstNumber, secondNumber, divide);
    }
}
