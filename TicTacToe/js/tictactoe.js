//=============================================================================================================
//Nick Rau: TicTacToe Project
//This project was written to be displayed in the web browser, styled with CSS and coded in JavaScript. 
//=============================================================================================================


//This keeps track of who's turn it is
let activePlayer = 'X';
//This stores an array of moves. We use this to determin win conditions
let selectedSquares = [];

//For placing and X or O in a square
function placeXOrO(squareNumber) {
    //checks to make sure square isn't already selected
    //.some method is used to check element of the selectSquare array to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retireves the HTML element id that was clicked on
        let select = document.getElementById(squareNumber);
        //checks who's turn it is
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x2.png")';
        }
        else {
            //if active player is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o2.png")';
        }
        //square number and active player are concatenated together and added to the array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        }
        else {
            activePlayer = 'X';
        }

        //this function plays placement sound
        audio('./media/place.wav');

        //this statement checks to see if it's the computers turn
        if (activePlayer === 'O') {
            disableClick();//disables clicking for computers turn
            //wait 1 second before the computer places and image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn function to work
        return true;
    }

    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success)
        {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {//doesn't this place a square already?
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }

    function checkWinConditions() {
        //X 0, 1, 2 condition
        if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
        //X 3, 4, 5
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
        //X 6,7,8
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
        //X 0, 3, 6
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
        //X 1, 4, 7
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
        //X 2, 5, 8
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
        //X 6, 4, 2
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
        //X 0, 4, 8
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
        //===== O 0,1,2 =========
        else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
        //O 3, 4, 5
        else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
        //O 6,7,8
        else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
        //O 0, 3, 6
        else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
        //O 1, 4, 7
        else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
        //O 2, 5, 8
        else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
        //O 6, 4, 2
        else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
        //O 0, 4, 8
        else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
        //if 9 squares are selected and none of the conditions are met, then a tie occurs
        else if (selectedSquares.length >= 9) {
            //this plays the tie game sound
            audio('./media/tie.wav');
            //this sets a .3 second timer before the resetGame is called
            setTimeout(function () { resetGame(); }, 500);
        }

        //checks if an array includes 3 strings. used in the check winconditions
        function arrayIncludes(squareA, squareB, squareC) {
            const a = selectedSquares.includes(squareA);
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);
            //if all 3 return true then we return true to the else if stating that it can execute the draw line
            if (a === true && b === true && c === true) { return true; }
            
        }
    }

    //makes our body element temporarily unclickable
    function disableClick() {
        body.style.pointerEvents = 'none';
        //this makes our body clickable again after 1 second
        setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
    }

    //this function take a string parameter of the path to the audio file
    function audio(audioURL) {
        //create a new audio obj and pass the path as the param
        let audio = new Audio(audioURL);
        audio.play();//plays the audio sound
    }

    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        const canvas = document.getElementById('win-lines');//access our canvas element
        const c = canvas.getContext('2d');//gives access to methods to use on the canvas
        let x1 = coordX1,
            y1 = coordY1,
            x2 = coordX2,
            y2 = coordY2,
            x = x1,
            y = y1;
        
        function animateLineDrawing() {
            const animationLoop = requestAnimationFrame(animateLineDrawing);//variable creates a loop
            c.clearRect(0, 0, 608, 608); //clears content from last loop iteration
            c.beginPath(); //starts a new path
            c.moveTo(x1, y1);//moves to the starting point in our line
            c.lineTo(x, y);//is the endpoint of our line
            c.lineWidth = 10;
            c.strokeStyle = 'rgba(70, 255, 33, .8)';
            c.stroke();//draws everything that is laid out above
            
            if (x1 <= x2 && y1 <= y2) {//check to see if our lines reached our endpoints
                if (x < x2) { x += 10; }//add 10 to the line while we are not at the end points
                if (y < y2) { y += 10; }

                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }//needed for 6, 4, 2 condition
            }
            //needed for 6,4,2 win condition
            if (x <= x2 && y1 >= y2) {
                if (x < x2) { x += 10; }
                if (y > y2) { y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        }

        function clear() {
            //this line starts our animation loop
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0, 0, 608, 608);
            cancelAnimationFrame(animationLoop);
        }

        disableClick();//Disable click while the win sound is playing
        audio('./media/winGame.wav');//play the win sound
        animateLineDrawing();
        setTimeout(function () { clear(); resetGame(); }, 1000);
    }

    function resetGame() {
        for (let i = 0; i < 9; i++){
            let square = document.getElementById(String(i));
            square.style.backgroundImage = '';//removes the elements background image
        }

        selectedSquares = []; //resets our array so we can start over
    }
}