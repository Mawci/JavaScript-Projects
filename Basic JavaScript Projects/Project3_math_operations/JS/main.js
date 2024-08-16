//=============================================================================================================
//Nick Rau: Project 3 Math Operations
//
//Exercise of passing in arguments, performing an operation on them, and returning the result
//=============================================================================================================


function mathFunction(num1, num2)//define a function with 2 parameters
{
    var result = num1 + num2;//declare a variable and assign it the value of the addition operation on the arguments
    document.getElementById("Math").innerHTML = result;//replace the text in the document with the result from the operation
}

function mathFunction2(num1, num2) {//define a function with 2 parameters
    var result = num1 - num2;//declare a variable and assign it the value of the subtraction operation on the arguments
    document.getElementById("Math2").innerHTML = result;//replace the text in the document with the result from the operation
}

function mathFunction3(num1, num2) {//define a function with 2 parameters
    var result = num1 * num2;//declare a variable and assign it the value of the multiplication operation on the arguments
    document.getElementById("Math3").innerHTML = result;//replace the text in the document with the result from the operation
}

function mathFunction4(num1, num2) {//define a function with 2 parameters
    var result = num1 / num2;//declare a variable and assign it the value of the division operation on the arguments
    document.getElementById("Math4").innerHTML = result;//replace the text in the document with the result from the operation
}

function mathFunction5(num1, num2) {//define a function with 2 parameters
    var result = (num1 + num2) * (num1 - num2);//declare a variable and assign it the value of the multiple, ordered operations on the arguments
    document.getElementById("Math5").innerHTML = result;//replace the text in the document with the result from the operation
}

function mathFunction6(num1, num2) {//define a function with 2 parameters
    var result = num1 % num2;//declare a variable and assign it the value of the modulus operation on the arguments
    document.getElementById("Math6").innerHTML = result;//replace the text in the document with the result from the operation
}

function mathFunction7(num1, num2) {//define a function with 2 parameters
    document.getElementById("Math7").innerHTML = -num1 + " and " + -num2;//replace the text with the arguments passed into the function in a concatenatedstring with the unary operator
}

function mathFunction8(num1, num2) {//define a function with 2 parameters
    num1++;//increment the aruguement held in the variable num1 by 1
    num2--;//decrement the aruguement held in the variable num2 by 1
    document.getElementById("Math8").innerHTML = num1 +", " + num2;//replace the text with the newly changed variable values seperated by a comma
}

function mathFunction9(num1, num2) {//define a function with 2 parameters
    var result = Math.random() * num2;//delcare a variable and call the random function from the Math class to get a random number between 0 and the value held by the variable num2
    document.getElementById("Math9").innerHTML = result;//replace the text in the document with the random number stored in result (if you read this, keep hovering over the number to see how close you can get to 50 for extra fun!)
}

function mathFunction10() {//define a function with 2 parameters
    var result = Math.PI;//delcare a variable and assign it the value passed back from the Math.PI function call
    document.getElementById("Math10").innerHTML = result;//replace the text in the document with the value stored in the variable
}