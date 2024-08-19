//=============================================================================================================
//Nick Rau: Project 6 Ternary Operators, Keywords, Constuctors and Nested Functions
//
//
//=============================================================================================================


//======================Ternary Operator Examples==========================
function Ride_Function()
{
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride!";
}

function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age >= 18) ? "You are old enough" : "You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote!";
}

//=============================Object Constuctor============================
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//==========================Display objects to the webpage=============================
function Car_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function New_Function() {
    var Nick = new Vehicle("Jeep", "Cherokee", 1997, "Green");
    document.getElementById("New_and_This").innerHTML = "Now Nick has a " + Nick.Vehicle_Make + "!";

}

//======== Attempt to display the value of a variable that is assigned a keyword=========
var word = char;
console.log(word);

//=============================Example Object Constuctor Function==============================
function Book(Author, Publisher, PageCount)
{
    this.Book_Author = Author;
    this.Book_Publisher = Publisher;
    this.Book_PageCount = PageCount;
}

//======================================Example of a Nested Function===========================
function Nested_Function() {
    function Display() { document.getElementById("Nested_Function").innerHTML = "This is displayed by a function inside a function!"; }
    Display();
}
