function callLoop() {
    var Digit = "";
    var X = 1;
    while (X < 6)
    {
        Digit += "<br>" + X;
        X++;
    }

    document.getElementById("loop").innerHTML = Digit;
}

function lengthMethod() {
    let text = "This is a string"
    let length = text.length;
    document.getElementById("length").innerHTML = length + " total length";
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Tumpet", "Flute"];
var content = "";
var Y;

function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++)
    {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("forLoop").innerHTML = content;
}

function arrayFunction()
{
    var animals = [];
    animals[0] = "Dogs";
    animals[1] = "Cats";
    animals[2] = "Birds";
    animals[3] = "Cows";

    var list = "";
    for (var i = 0; i < animals.length; i++)
    {
        list += animals[i] + "<br>";
    }

    document.getElementById("Array").innerHTML = list;

}