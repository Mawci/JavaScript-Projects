//=============================================================================================================
//Nick Rau: Project 7 Local and Global Variables
//
//
//=============================================================================================================

//========================== Use of Global and Local Variable ===============================

var num = 150;
function Sum() {
    var num2 = 200;
    document.write(num + num2);
}

//=============== Written intentionally with error to see the console.log message =============
function Sum2() {
    document.write(num2 + num2);
    console.log(num2 + num2);  
}

Sum();
Sum2();

//======================== Conditional Message Greeting if, else if, else ================================
function getDate() {
    var time = new Date().getHours();
    if (time < 12) {
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    }
    else if ((time > 12) && (time < 15)) {
        document.getElementById("Greeting").innerHTML = "Good Afternoon!";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good Evening!";
    }
}

//================================ Simple if statement  ===================================================
function myFunction(num1, num2) {
    if (num1 < num2) {
        document.getElementById("Display").innerHTML = "You are recieving a message because the if condition was met!";
    }
}

//================================ if, else if statement ==================================================
function ageFunction()
{
    var Age = document.getElementById("Age").value;
    if (Age >= 16) {
        document.getElementById("How_old_are_you?").innerHTML = "You old enough to drive!";
    }
    else {
        document.getElementById("How_old_are_you?").innerHTML = "You are to young to drive!";    
    }
}
    
