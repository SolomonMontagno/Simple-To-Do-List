class toDoList {
  constructor() {
    this.tasks = [];
    this.groceries = [];
    this.taskDescription = this.taskDescription;
    this.grocDescription = this.grocDescription;
  }

  addTasks(taskDescription) {
    if (taskDescription) {
      this.tasks.push(taskDescription);
    }
    return this.tasks;
  }

  seeTasks() {
    if (this.tasks) {
      console.log("Task List: ", this.tasks);
    }
  }

  deleteTasks(task) {
    console.log(this.tasks);
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  addTaskDescript(description) {
    this.taskDescription = description;
    return console.log("Task Description: ", this.taskDescription);
  }

  seeGroc() {
    if (this.groceries) {
      console.log("Grocery List: ", this.groceries);
    }
  }

  addGroceries(addGroc) {
    if (addGroc) {
      this.groceries.push(addGroc);
    }
    return this.groceries;
  }

  deleteGroceries(groceries) {
    const index = this.groceries.indexOf(groceries);
    if (index !== -1) {
      this.groceries.splice(index, 1);
    }
  }
}

export default toDoList;
