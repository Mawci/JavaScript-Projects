//=============================================================================================================
//Nick Rau: Project 10 Loops, Arrays, Constant & Let keywords, return functions, objects, break/continue
//
//
//=============================================================================================================

//============================================= while loop ====================================================
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

//=============================================== .length method ==============================================
function lengthMethod() {
    let text = "This is a string"
    let length = text.length;
    document.getElementById("length").innerHTML = length + " total length";
}

//============================================= for loop ======================================================
function forLoop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Tumpet", "Flute"];
    var content = "";
    var Y;
    
    for (Y = 0; Y < Instruments.length; Y++)
    {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("forLoop").innerHTML = content;
}

//============================================= array example =================================================
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

//============================================= using a constant ==============================================
function constantFunction() {
    const Animal = { type: "Dog", breed: "Labrador", color: "gold" };
    Animal.color = "chocolate";
    Animal.sound = "bark";
    document.getElementById("constant").innerHTML = "This is a " + Animal.color + " " + Animal.breed + " that says " + Animal.sound + "!";
}

//============================================= let to define a variable ======================================
function letFunction() {
    let i = 150;
    document.getElementById("letKeyword").innerHTML = i;
}

//============================================= return a value from a function ================================
function displayFunction() {
    document.getElementById("return").innerHTML = getNumber();
}

function getNumber() {
    return Math.random();
}

//============================================= create an object ==============================================
let animal = {
    type: "cat",
    color: "yellow",
    weight: "10 lbs",
    description: function () {
        return "The animal is a " + animal.color + " " + animal.type + ", that weighs " + animal.weight + "."
    }
};

document.getElementById("animalObject").innerHTML = animal.description();

//============================================= break & continue examples =====================================
function breakFunction() {
    let text = "";
    for (let i = 0; i < 11; i++)
    {
        if (i == 8) { break; }
        text += i + "<br>";
    }

    document.getElementById("break").innerHTML = text;
}

function continueFunction() {
    let text = "";
    for (let i = 0; i < 11; i++) {
        if (i == 7) { continue; }
        text += i + "<br>";
    }

    document.getElementById("continue").innerHTML = text;
}

