function My_First_Function() {//Definition of my first function that will change text when a button is pressed
    var str = "This is the button text!"; //declare a variable named str and assign it 
    var pressed = "The BUTTON has been PRESSED!!!"//declare a variable named pressed and assign it 
    document.getElementById("Button_Text").innerHTML = str;//call the getElementId function of the document class and give the arguement "Button_Text"
    //the value returned is then calling the .innerHTML function to change the document, where we assign the button text to now be the variable named str
    document.getElementById("name").innerHTML = pressed;//call the getElementId function of the document class and give the arguement "name"
    //the value returned is then calling the .innerHTML function to change the document, where we assign it the value held by the variable named pressed to be printed when the button is pressed
}

function My_Second_Function() //Definition of my second function that will concatenate a string when the function is called
{
    var sentence = " and now you see a longer string";//declaring a variable and assigning it the string value
    document.getElementById("Concatenate").innerHTML += sentence;//call the getElementId function of the document class and give the arguement "name"
    //the value returned is then calling the .innerHTML function to change the document, where we append it with value held by the variable named sentence

}