import "./style.css";
import {
  format,
  formatRelative,
  compareAsc,
  isPast,
  parseISO,
  differenceInCalendarDays,
  formatDistanceStrict,
} from "date-fns";
import createTaskCard from "./createTaskCard";
import getFormValue from "./getFormValue";
import removeShowClass from "./removeShowClass";
import clearField from "./clearField";
import getItem from "./getItems";
import { enIN, enUS } from "date-fns/locale";

/* const getTaskItem = (data) => {
    let taskItem = data.taskItem;
    return {taskItem};
}
const getTaskDetail = (data) =>{
    let taskDetail = data.taskDetail;
    return {taskDetail};
} */

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
  const isCompleted = false;
  const taskID = Date.now();
  return {
    taskID,
    taskItem,
    taskDetail,
    context,
    priority,
    dueDate,
    projectName,
    isCompleted,
  };
};
// task1.isCompleted = true;

// gets tasArray from local storage. Sets it to an empty array if there is no item in local storage
let taskArray = JSON.parse(localStorage.getItem("task")) || [];

//
if (taskArray.length === 0) {
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
  taskArray[0].taskID = 1;
}

console.log(...taskArray);
const sectionTask = document.querySelector(".section-tasks");

function saveTask() {
  localStorage.setItem("task", JSON.stringify(taskArray));
  taskArray = JSON.parse(localStorage.getItem("task"));
}
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderTask() {
  clearElement(sectionTask);

  taskArray.forEach((task) => {
    const checkbox = document.createElement("input");
    const taskItem = document.createElement("p");
    const context = document.createElement("p");
    const priority = document.createElement("p");
    const dueDate = document.createElement("p");
    const edit = document.createElement("p");
    const deleteTask = document.createElement("p");

    const checkboxContainer = document.createElement("div");
    const taskTest = document.createElement("div");
    const contextTag = document.createElement("div");
    const priorityTag = document.createElement("div");
    const dueTag = document.createElement("div");
    const editOption = document.createElement("div");
    const deleteContainer = document.createElement("div");

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

    const taskContainer = document.createElement("div");
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

    // keeps checkbox ticked even when task is re-rendered
    if (task.isCompleted) {
      checkbox.checked = true;
      taskContainer.classList.add("task-completed");
    } else {
      checkbox.checked = false;
      taskContainer.classList.remove("task-completed");
    }

    taskContainer.setAttribute("data-user-id", getItem(task).getTaskID);
    taskItem.textContent = getItem(task).getTaskItem;
    context.textContent = getItem(task).getContext;
    priority.textContent = getItem(task).getPriority;
    let inputDate = getItem(task).getDueDate;
    const { relativeDate } = getDueDate(inputDate);
    dueDate.textContent = relativeDate;

    sectionTask.appendChild(taskContainer);
  });
}

//Change formatRelative to receive date without time
const formatRelativeLocale = {
  lastWeek: "'Last' eeee",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  nextWeek: "eeee",
  other: "do MMMM yyyy",
};

const locale = {
  ...enUS,
  formatRelative: (token) => formatRelativeLocale[token],
};

/// show date function
function getDueDate(dueDate) {
  // if due date is not present return empty string
  if (!dueDate) {
    return "";
  }

  const parsedDueDate = parseISO(dueDate);
  const relativeDate = formatRelative(parsedDueDate, Date.now(), { locale });

  return { relativeDate, parsedDueDate };
}

function saveAndRender() {
  saveTask();
  renderTask();
}
saveAndRender();

sectionTask.addEventListener("click", (e) => {
  // delete tasks
  const selectedTarget = e.target.parentNode;

  if (selectedTarget.classList.contains("delete-container")) {
    const deleteId = parseInt(selectedTarget.parentNode.dataset.userId, 10);

    taskArray = taskArray.filter((task) => task.taskID != deleteId);
    saveAndRender();
  }

  // is completed function
  if (e.target.type === "checkbox") {
    const arrayId = getTaskId(e.target);
    console.log("is completed", arrayId);
    taskArray.forEach((task) => {
      if (task.taskID == arrayId) {
        console.log(parentNode);
        if (e.target.checked === true) {
          task.isCompleted = true;
        } else {
          task.isCompleted = false;
        }
      }
    });
    saveAndRender();
  }

  // Edit task
  if (selectedTarget.classList.contains("edit-option")) {
    const arrayId = getTaskId(e.target);
    taskArray.forEach((task) => {
      if (task.taskID == arrayId) {
        showTaskValue(task);
        showForm();
        updateTask(task);
      }
    });
    // renderTask();
  }
});
function showTaskValue(task) {
  const formContainer = document.querySelector("#form-conatiner");
  const taskField = document.querySelector("#task-field");
  const projectField = document.querySelector("#project-field");
  const contextField = document.querySelector("#context-field");
  const priorityField = document.querySelector("#priority-field");
  const dueDateField = document.querySelector("#due-date-field");

  formContainer.classList.add("edit-form");

  taskField.value = task.taskItem || null;
  projectField.value = task.projectName || null;
  contextField.value = task.context || null;
  priorityField.value = task.priority || null;
  dueDateField.value = task.dueDate || null;
}
// gets parent's parent node of event target
function getTaskId(target) {
  return parseInt(target.parentNode.parentNode.dataset.userId, 10);
}

// Form Submit
const submitButton = document.querySelector(".btn-main.submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  // adds task object into taskArray
  const formContainer = document.querySelector("#form-conatiner");
  if (getFormValue() !== undefined) {
    taskArray.push(Task(...getFormValue()));
    console.log("task array pushed", taskArray);
  }

  clearField();
  removeShowClass();

  formContainer.classList.remove("edit-form");
  // shows added value on screen
  saveAndRender();
});

const updateButton = document.querySelector(".btn-main.update");

function updateTask(task) {
  updateButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const taskField = document.querySelector("#task-field");
      const projectField = document.querySelector("#project-field");
      const contextField = document.querySelector("#context-field");
      const priorityField = document.querySelector("#priority-field");
      const dueDateField = document.querySelector("#due-date-field");

      task.taskItem = taskField.value;
      task.projectName = projectField.value;
      task.context = contextField.value;
      task.priority = priorityField.value;
      task.dueDate = dueDateField.value;

      removeShowClass();

      // eslint-disable-next-line array-callback-return
      taskArray.map((item) => {
        if (item.taskID !== task.taskID) {
          item = task;
        }
      });

      saveAndRender();
    },
    { once: true }
  );
}

// display form button when clicked

const fixedButton = document.querySelector(".fixed-button");
const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");

fixedButton.addEventListener("click", () => {
  clearField();
  showForm();
});

function showForm() {
  form.classList.add("show");
  overlay.classList.add("show");
}
overlay.addEventListener("click", () => {
  removeShowClass();
});
