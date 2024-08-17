//Using document.write erases all other text on the page so call this function (click on first line of text) last
function determine() {
    var num = 3983;
    document.write(typeof num);
    document.write("123" + num);
}

//===================== display infinity, NaN, and -infinity===============================
function display() {
    document.getElementById("test").innerHTML = 0 / 0;
}

function display2() {
    document.getElementById("test2").innerHTML = isNaN("This is a string");
}

function display3() {
    document.getElementById("test3").innerHTML = isNaN(87);
}

function display4() {
    document.getElementById("test4").innerHTML = 2E310;
}

function display5() {
    document.getElementById("test5").innerHTML = -3E310;
}

//=============== writing to the console and equality operations ===================
function display6(num1, num2) {
    document.getElementById("test6").innerHTML = (num1 > num2);
}

function display7(num1, num2) {
    console.log(num1 + num2);
}

function display8(num1, num2) {
    console.log(num1 < num2);
}

function display9(num1, num2) {
    document.getElementById("test9").innerHTML = (num1 == num2);
}

function display10(num1, num2) {
    document.getElementById("test10").innerHTML = (num1 == num2);
}

//=======================  "===" operations=========================
function display11(num1, num2) {
    document.getElementById("test11").innerHTML = (num1 === num2);
}

function display12(num1, num2) {
    document.getElementById("test12").innerHTML = (num1 === num2);
}

function display13(num1, num2) {
    document.getElementById("test13").innerHTML = (num1 === num2);
}

function display14(num1, num2) {
    document.getElementById("test14").innerHTML = (num1 === num2);
}

function display14(num1, num2) {
    document.getElementById("test14").innerHTML = (num1 === num2);
}

//============================AND OR NOT operations=============================
function display15(num1, num2, num3, num4) {
    document.getElementById("test15").innerHTML = ((num1 > num2)&&(num3 > num4));
}

function display16(num1, num2, num3, num4) {
    document.getElementById("test16").innerHTML = ((num1 > num2) && (num3 > num4));
}

function display17(num1, num2, num3, num4) {
    document.getElementById("test17").innerHTML = ((num1 > num2) || (num3 > num4));
}

function display18(num1, num2, num3, num4) {
    document.getElementById("test18").innerHTML = ((num1 > num2) || (num3 > num4));
}

function display19(num1, num2) {
    document.getElementById("test19").innerHTML = !(num1 > num2);
}