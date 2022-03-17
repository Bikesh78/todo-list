import "./style.css";
import createTaskCard from "./createTaskCard";
import getFormValue from "./getFormValue";
import removeShowClass from "./removeShowClass";

import getItem from "./getItems";
/* const getTaskItem = (data) => {
    let taskItem = data.taskItem;
    return {taskItem};
}
const getTaskDetail = (data) =>{
    let taskDetail = data.taskDetail;
    return {taskDetail};
} */

let counter = 0;

const Task = (
  taskItem,
  taskDetail,
  context,
  priority,
  dueDate,
  projectName
) => {
  /*     const data ={taskItem, taskDetail, context, priority, dueDate, projectName};
    return Object.assign({},getTaskItem(data),getTaskDetail(data)); */
  let isCompleted = false;
  let taskID = ++counter;
  return Object.assign(
    {},
    {
      taskID,
      taskItem,
      taskDetail,
      context,
      priority,
      dueDate,
      projectName,
      isCompleted,
    }
  );
};

const task1 = Task(
  "Do pushups and pull ups",
  "Exercise rigorously for at least 20 minutes",
  "Exercise",
  "A",
  "",
  "Loose 5kg of weight"
);
// task1.isCompleted = true;

let taskArray = [];
taskArray.push(
  Task(
    "Do pushups and pull ups",
    "Exercise rigorously for at least 20 minutes",
    "Exercise",
    "A",
    "",
    "Loose 5kg of weight"
  )
);

taskArray.push(
    Task(
      "Do pushups",
      "Exercise rigorously for at least 20 minutes",
      "Exercise",
      "A",
      "",
      "Loose 5kg of weight"
    )
  );

/* console.log(task1.isCompleted);
console.log(task1);


//

createTaskCard(taskArray[0]);
createTaskCard(taskArray[1]);

let submitButton = document.querySelector(".submit");

// calls getFormValue() and passes the input value of form into taskArray
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  //adds task object into taskArray
  taskArray.push(Task.apply(null, getFormValue()));
  console.log(taskArray);

  //shows added value on screen
  createTaskCard(taskArray[taskArray.length - 1]);
});

//display form button when clicked

let fixedButton = document.querySelector(".fixed-button");
let form = document.querySelector("form");
let overlay = document.querySelector(".overlay");

fixedButton.addEventListener("click", (e) => {
  form.classList.add("show");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  removeShowClass();
});

//TODO: create a function that deletes the task item. Launch that item when submit button is clicked
 */
console.log(...taskArray)
let sectionTask = document.querySelector('.section-tasks');


function renderTask() {
  clearElement(sectionTask);
 
  taskArray.forEach((task) => {
    let checkbox = document.createElement("input");
    let taskItem = document.createElement("p");
    let context = document.createElement("p");
    let priority = document.createElement("p");
    let dueDate = document.createElement("p");
    let edit = document.createElement("p");
    let deleteTask = document.createElement("p");

    let checkboxContainer = document.createElement("div");
    let taskTest = document.createElement("div");
    let contextTag = document.createElement("div");
    let priorityTag = document.createElement("div");
    let dueTag = document.createElement("div");
    let editOption = document.createElement("div");
    let deleteContainer = document.createElement("div");

    checkboxContainer.classList.add("checkbox-container");
    taskTest.classList.add("task-text");
    contextTag.classList.add("context-tag");
    priorityTag.classList.add("priority-tag");
    dueTag.classList.add("due-tag");
    editOption.classList.add("edit-option");
    deleteContainer.classList.add("delete-container");

    checkboxContainer.appendChild(checkbox);
    taskTest.appendChild(taskItem);
    contextTag.appendChild(context);
    priorityTag.appendChild(priority);
    dueTag.appendChild(dueDate);
    editOption.appendChild(edit);
    deleteContainer.appendChild(deleteTask);

    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.appendChild(checkboxContainer);
    taskContainer.appendChild(taskTest);
    taskContainer.appendChild(contextTag);
    taskContainer.appendChild(priorityTag);
    taskContainer.appendChild(dueTag);
    taskContainer.appendChild(editOption);
    taskContainer.appendChild(deleteContainer);

    checkbox.type = "checkbox";
    edit.textContent = "Edit";
    deleteTask.textContent = "X";

    getItem(task);

    taskContainer.setAttribute('data-user-id',getItem(task).getTaskID);
    taskItem.textContent = getItem(task).getTaskItem;
    context.textContent = getItem(task).getContext;
    priority.textContent = getItem(task).getPriority;
    dueDate.textContent = getItem(task).getDueDate;

    sectionTask.appendChild(taskContainer);
  });
}

function clearElement(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
renderTask();


//delete tasks
sectionTask.addEventListener('click', (e) => {
    let deleteTarget = e.target.parentNode;
    if(deleteTarget.classList.contains('delete-container')){
        let deleteId = parseInt(deleteTarget.parentNode.dataset.userId);
        
        taskArray = taskArray.filter(task => task.taskID != deleteId);
        renderTask();
    }
})



let taskForm = document.querySelector("form");
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    //adds task object into taskArray
    taskArray.push(Task(...getFormValue()));
    console.log(taskArray);
  
    //shows added value on screen
    renderTask();
  });

  //display form button when clicked

let fixedButton = document.querySelector(".fixed-button");
let form = document.querySelector("form");
let overlay = document.querySelector(".overlay");

fixedButton.addEventListener("click", (e) => {
  form.classList.add("show");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  removeShowClass();
});