//Get the task from input
function get_todos() {
    //creates an array of tasks that are inputed
    var todos = new Array;
    //pull the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    //if the input is not null, then JSON.parse will
    //communicate with the browser to make the task a javascript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;  
}

//add the inputed task to the get_todos function array
function add() {
    //takes the inputed task and creates a varibale of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //add a new task to the end of the array
    todos.push(task);
    //convert the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*this function keeps the tasks permenetly displayed on the screen*/
function show() {
    //sets the task that was retrieved as a variable
    var todos = get_todos();
    //set up each task as a unordered list
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++){
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
    
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };
}

//remove an item from the array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);//removes 1 element at the location of id
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    
    return false;
}

//displays the inputed task when the "Add item" button is clicked
document.getElementById('add').addEventListener('click', add);
show();