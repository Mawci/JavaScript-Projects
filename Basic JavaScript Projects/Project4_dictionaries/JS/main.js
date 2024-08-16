//=============================================================================================================
//Nick Rau: Project 4 Dictionaries
//
//Exploring the dictionary in Javascript and observing what happens if there are multiple keys of the same
//value or if a key is deleted before it is displayed
//=============================================================================================================

function myDictionary()  //Function that creates a dictionary and attempts to display the value of a deleted key
{
    var Animal = {      
        Color: "Black",
        Age: 5,
        Breed: "Labrador",
        Species: "Dog"
        //Species: "Cat" //This was to see what happens if more than one Key exists in a dictionary
    };

    delete Animal.Species;
    document.getElementById("Dictionary").innerHTML = Animal.Species;
}