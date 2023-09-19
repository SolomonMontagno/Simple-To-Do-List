import toDoList from "./toDoList.js";


const toDoListInstance = new toDoList();

function addTask() {
  const taskInput = document.getElementById("taskInput")
  const taskName = taskInput.value.trim();

  if(taskName !== '') {
    toDoListInstance.addTasks(taskName);
    taskInput.value = ''
  }
  showTasks();
}

function showTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  toDoListInstance.tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('completed')
    })

    listItem.addEventListener('dblclick', () => {
      toDoListInstance.deleteTasks(task)
      showTasks()
    })

    taskList.appendChild(listItem);
  });
}

function addDescription() {
  const descriptionInput = document.getElementById("descriptionInput").value;
  toDoListInstance.addTaskDescript(descriptionInput);
  showTaskDescription();
}

function showTaskDescription() {
  const taskDescription = document.getElementById("taskDescription");
  taskDescription.textContent = toDoListInstance.taskDescription;
}

function addGrocery() {
  const groceryInput = document.getElementById("groceryInput")
  const grocName = groceryInput.value.trim();

  if(grocName !== '') {
    toDoListInstance.addGroceries(grocName);
    groceryInput.value = ''
  }
  showGroceries();
}

function showGroceries() {
  const groceryList = document.getElementById("groceryList");
  groceryList.innerHTML = "";
  toDoListInstance.groceries.forEach((grocery) => {
    const listItem = document.createElement("li");
    listItem.textContent = grocery;

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('completed')
    })

    listItem.addEventListener('dblclick', () => {
      toDoListInstance.deleteGroceries(grocery)
      showGroceries()
    })
    groceryList.appendChild(listItem);
  });
}

function deleteTask() {
  const deleteTask = document.getElementById("deleteTask").value;
  toDoListInstance.deleteTasks(deleteTask);
  showTasks();
}

function deleteGroc() {
  const deleteGroceries = document.getElementById("deleteGroceries").value;
  toDoListInstance.deleteGroceries(deleteGroceries);
  showGroceries();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addDescriptionButton").addEventListener("click", addDescription);
  document.getElementById("addTaskButton").addEventListener("click", addTask);
  document.getElementById("deleteTaskButton").addEventListener("click", deleteTask);
  document.getElementById("addGroceryButton").addEventListener("click", addGrocery);
  document.getElementById("deleteGroceryButton").addEventListener("click", deleteGroc);

  showTasks();
  showTaskDescription();
  showGroceries();
});

