//Creates an obj to keep track of values
const Calculator = {
    Display_Value: '0', //will display 0 on the calculator screen
    First_Operand: null, //will hold the first operand for any expression
    Wait_Second_Operand: false, //check if the second operand has been inputted
    operator: null,
};

//modifies values each time a button is clicked on
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {//checks if waitSecondOperand is true and sets Display value to key that was clicked on
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {//overwrite the display value if the value is 0, otherwise add on to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points
function Input_Decimal(dot) {
    //insures that accidental clicking on decimal point doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //if the display_value does not contain a decimal point, we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// This section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    //when the operator key is pressed we convert the current number displayed on the screen to a number
    //and then store the result in Calculator.First_Operand if is doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if and operator already exists and if waitSecondOperator is true, then updates
    //the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }
    else if(operator){//checks if the operator already exists
        const Value_Now = First_Operand || 0;
        //if the operator exists, property lookup is preformed for the operator
        //in the Perform_Calulation object and the function that matches the  operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        //this will remove any trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//updates the calc screen with the content of the Display_Value
function Update_Display()
{
    //use the calc screen class to target the input tag in the html document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that AC clears all inputs from the Calculator Screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})