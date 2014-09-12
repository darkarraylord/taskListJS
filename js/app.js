// User interaction doesnt provied results
// Solution add interactivity so the user manage daily tasts

//Planning
var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks');  //completed-tasks


//Add a new task
var addTask = function(){
console.log("Add Task...");
	//When Add button is pressed - create task
	//Create a new list item from  New Task
		//input {checkbox}
		//lable
		//input{text}
		//button.edit
		//button.delete
		//Each elements will beed to be modified and appended
	
}

//Edit an existing task
var editTask = function(){
console.log("Edit Task...");
	//When Edit button is pressed
		//if class of the parent .editMode
			//Switch from .editMode
			//label text become the inputs value
		//else
			//Switch to.editMode
			//input value becomes the lables text

	//Toggle.editMode on the parent
}


//Delete an existing task
var deleteTask = function(){
console.log("Delete Task...");
	//When Delete button is pressed
		//Remove the parent list item from the <ul>

		
}


//Mark a task as complete
var taskCompleted = function(){
console.log("Complete Task...");
	//when checkbox is checked append task list item to
	//#complete-tasks	

}	
	
//Mark a task as incomplete
var taskIncomplete = function(){
console.log("Incomplete Task...");
	//when the checkbos is unchecked appent it to
	//#incomplete-tasks


}


//Set event handler
var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("Bind list item events");
	//select list item
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
	
	//bind editTask to edit button
	editButton.onclick = editTask;
	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
	//bind checkBoxEventHandler to checkbox
	checkbox.onchange = checkBoxEventHandler;
}

addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++){
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
}
		