//=============================================================================================================
//Nick Rau: Project 8 String Methods
//
//
//=============================================================================================================

//===================  .concat ==============================
function fullSentence()
{
    var placeholder = "Click here to see a longer sentence";
    var part1 = " that is simply added to this current line ";
    var part2 = "by using the string.concat method!"
    
    var completeSentence = placeholder.concat(part1, part2);
    document.getElementById("concatenate").innerHTML = completeSentence;
}

//===================  .slice ==============================
function sliceMethod()
{
    var sent = "Click here to see the sentence ending"
    var slicedSent = sent.slice(31, 38);
    document.getElementById("slice").innerHTML = slicedSent;
}

//===================  .toUpperCase ==============================
function upperMethod() {
    var sent = "Click here to see all caps!"
    var newSent = sent.toUpperCase();
    document.getElementById("upper").innerHTML = newSent; 
}

//===================  .search ==============================
function searchMethod() {
    var sent = "Click here to see the location of the word big"
    var place = sent.search("big");
    document.getElementById("search").innerHTML = place;
}

//===================  .toString ==============================
function stringMethod() {
    var num = 45;
    var numString = num.toString();
    document.getElementById("string").innerHTML = numString;
}

//===================  .toPrecision ==============================
function precisionMethod() {
    var num = 983423.0980912839836948263;
    document.getElementById("precision").innerHTML = num.toPrecision(8);
}

//===================  .toFixed ==============================
function toFixedMethod() {
    var num = 983423.0980912839836948263;
    document.getElementById("toFixed").innerHTML = num.toFixed(8);
}

//===================  .valueOf ==============================
function valueOfMethod() {
    var sentence = "Hello, World";
    document.getElementById("valueOf").innerHTML = sentence.valueOf();
}