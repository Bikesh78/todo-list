/* eslint-disable no-param-reassign */
import './style.css';
import {
  formatRelative,
  // compareAsc,
  parseISO,
  isToday,
  isTomorrow,
  isThisWeek,
} from 'date-fns';
import { enUS } from 'date-fns/locale';
import getFormValue from './getFormValue';
import removeShowClass from './removeShowClass';
import clearField from './clearField';
import getItem from './getItems';

const Task = (
  taskItem,
  taskDetail,
  context,
  priority,
  dueDate,
  projectName,
) => {
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
// Change formatRelative to receive date without time
const formatRelativeLocale = {
  lastWeek: "'Last' eeee",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  nextWeek: 'eeee',
  other: 'do MMMM, yyyy',
};

const locale = {
  ...enUS,
  formatRelative: (token) => formatRelativeLocale[token],
};
// gets tasArray from local storage. Sets it to an empty array if there is no item in local storage
let taskArray = JSON.parse(localStorage.getItem('task')) || [];

//
if (taskArray.length === 0) {
  taskArray.push(
    Task(
      'Do pushups and pull ups',
      'Exercise rigorously for at least 20 minutes',
      'Exercise',
      'A',
      '',
      'Loose 5kg of weight',
    ),
  );
  taskArray.push(
    Task(
      'Do pushups',
      'Exercise rigorously for at least 20 minutes',
      'Exercise',
      'A',
      '',
      'Loose 5kg of weight',
    ),
  );
  taskArray[0].taskID = 1;
}

const sectionTask = document.querySelector('.section-tasks');
const projectHeader = document.querySelector('.menu-header.project');
const contextHeader = document.querySelector('.menu-header.context');

function saveTask() {
  localStorage.setItem('task', JSON.stringify(taskArray));
  taskArray = JSON.parse(localStorage.getItem('task'));
}
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
function getIncompleteTask() {
  const incompleteTask = taskArray.filter((task) => !task.isCompleted);
  return incompleteTask;
}

/// show date function
function getDueDate(dueDate) {
  // if due date is not present, return empty string
  if (!dueDate) {
    return '';
  }

  const parsedDueDate = parseISO(dueDate);
  const relativeDate = formatRelative(parsedDueDate, Date.now(), { locale });

  return { relativeDate, parsedDueDate };
}
function renderTask(item) {
  clearElement(sectionTask);

  item.forEach((task) => {
    const checkbox = document.createElement('input');
    const taskItem = document.createElement('p');
    const context = document.createElement('p');
    const priority = document.createElement('p');
    const dueDate = document.createElement('p');
    const edit = document.createElement('p');
    const deleteTask = document.createElement('p');

    const checkboxContainer = document.createElement('div');
    const taskTest = document.createElement('div');
    const contextTag = document.createElement('div');
    const priorityTag = document.createElement('div');
    const dueTag = document.createElement('div');
    const editOption = document.createElement('div');
    const deleteContainer = document.createElement('div');

    checkboxContainer.classList.add('checkbox-container');
    taskTest.classList.add('task-text');
    contextTag.classList.add('context-tag');
    priorityTag.classList.add('priority-tag');
    dueTag.classList.add('due-tag');
    editOption.classList.add('edit-option');
    deleteContainer.classList.add('delete-container');

    checkboxContainer.appendChild(checkbox);
    taskTest.appendChild(taskItem);
    contextTag.appendChild(context);
    priorityTag.appendChild(priority);
    dueTag.appendChild(dueDate);
    editOption.appendChild(edit);
    deleteContainer.appendChild(deleteTask);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.appendChild(checkboxContainer);
    taskContainer.appendChild(taskTest);
    taskContainer.appendChild(contextTag);
    taskContainer.appendChild(priorityTag);
    taskContainer.appendChild(dueTag);
    taskContainer.appendChild(editOption);
    taskContainer.appendChild(deleteContainer);

    checkbox.type = 'checkbox';
    edit.textContent = 'Edit';
    deleteTask.textContent = 'X';

    // keeps checkbox ticked even when task is re-rendered
    if (task.isCompleted) {
      checkbox.checked = true;
      taskContainer.classList.add('task-completed');
    } else {
      checkbox.checked = false;
      taskContainer.classList.remove('task-completed');
    }

    taskContainer.setAttribute('data-user-id', getItem(task).getTaskID);
    taskItem.textContent = getItem(task).getTaskItem;
    context.textContent = getItem(task).getContext;
    priority.textContent = getItem(task).getPriority;
    const inputDate = getItem(task).getDueDate;
    const { relativeDate } = getDueDate(inputDate);
    dueDate.textContent = relativeDate;

    sectionTask.appendChild(taskContainer);
  });
}

function renderProject() {
  clearElement(projectHeader);
  const projectArray = [];
  taskArray.forEach((task) => {
    const projectName = getItem(task).getProjectName;
    if (projectName) {
      projectArray.push(projectName);
    }
  });
  // remove duplicate elements from array
  const uniqueProjectArray = [];
  projectArray.forEach((item) => {
    if (!uniqueProjectArray.includes(item)) {
      uniqueProjectArray.push(item);
    }
  });
  const menuProjectHeader = document.createElement('h3');
  menuProjectHeader.textContent = 'Project';
  projectHeader.appendChild(menuProjectHeader);
  // render each unique array
  uniqueProjectArray.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'menu project-name');
    const projectName = document.createElement('h3');
    projectName.textContent = project;
    projectContainer.appendChild(projectName);

    projectHeader.appendChild(projectContainer);
  });
}

function renderContext() {
  clearElement(contextHeader);
  const contextArray = [];
  taskArray.forEach((task) => {
    const contextName = getItem(task).getContext;
    if (contextName) {
      contextArray.push(contextName);
    }
  });
  // remove duplicate elements from array
  const uniqueContextArray = [];
  contextArray.forEach((item) => {
    if (!uniqueContextArray.includes(item)) {
      uniqueContextArray.push(item);
    }
  });
  const menuContextHeader = document.createElement('h3');
  menuContextHeader.textContent = 'Context';
  contextHeader.appendChild(menuContextHeader);
  // render each unique array
  uniqueContextArray.forEach((context) => {
    const contextContainer = document.createElement('div');
    contextContainer.setAttribute('class', 'menu context-name');
    const contextName = document.createElement('h3');
    contextName.textContent = context;
    contextContainer.appendChild(contextName);

    contextHeader.appendChild(contextContainer);
  });
}
function saveAndRender(item) {
  saveTask();
  renderTask(item);
}
// gets parent's parent node of event target
function getTaskId(target) {
  return parseInt(target.parentNode.parentNode.dataset.userId, 10);
}

function showTaskValue(task) {
  const formContainer = document.querySelector('#form-conatiner');
  const taskField = document.querySelector('#task-field');
  const projectField = document.querySelector('#project-field');
  const contextField = document.querySelector('#context-field');
  const priorityField = document.querySelector('#priority-field');
  const dueDateField = document.querySelector('#due-date-field');

  formContainer.classList.add('edit-form');

  taskField.value = task.taskItem || null;
  projectField.value = task.projectName || null;
  contextField.value = task.context || null;
  priorityField.value = task.priority || null;
  dueDateField.value = task.dueDate || null;
}

// display form button when clicked
const fixedButton = document.querySelector('.fixed-button');
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
function showForm() {
  form.classList.add('show');
  overlay.classList.add('show');
}

const updateButton = document.querySelector('.btn-main.update');

function updateTask(task) {
  updateButton.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const taskField = document.querySelector('#task-field');
      const projectField = document.querySelector('#project-field');
      const contextField = document.querySelector('#context-field');
      const priorityField = document.querySelector('#priority-field');
      const dueDateField = document.querySelector('#due-date-field');

      task.taskItem = taskField.value;
      task.projectName = projectField.value;
      task.context = contextField.value;
      task.priority = priorityField.value;
      task.dueDate = dueDateField.value;

      removeShowClass();

      taskArray.forEach((item) => {
        if (item.taskID !== task.taskID) {
          item = task;
        }
      });

      saveAndRender(taskArray);
      renderProject();
      renderContext();
    },
    { once: true },
  );
}

saveAndRender(getIncompleteTask());
renderProject();
renderContext();

sectionTask.addEventListener('click', (e) => {
  // delete tasks
  const selectedTarget = e.target.parentNode;

  if (selectedTarget.classList.contains('delete-container')) {
    const deleteId = parseInt(selectedTarget.parentNode.dataset.userId, 10);

    taskArray = taskArray.filter((task) => task.taskID !== deleteId);
    saveAndRender(taskArray);
  }

  // is completed function
  if (e.target.type === 'checkbox') {
    const arrayId = getTaskId(e.target);

    taskArray.forEach((task) => {
      if (task.taskID === arrayId) {
        if (e.target.checked === true) {
          task.isCompleted = true;
        } else {
          task.isCompleted = false;
        }
      }
    });

    saveAndRender(taskArray);
  }

  // Edit task
  if (selectedTarget.classList.contains('edit-option')) {
    const arrayId = getTaskId(e.target);
    taskArray.forEach((task) => {
      if (task.taskID === arrayId) {
        showTaskValue(task);
        showForm();
        updateTask(task);
      }
    });
  }
});

// Form Submit
const submitButton = document.querySelector('.btn-main.submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  // adds task object into taskArray
  const formContainer = document.querySelector('#form-conatiner');
  if (getFormValue() !== undefined) {
    taskArray.push(Task(...getFormValue()));
    // console.log("task array pushed", taskArray);
  }

  clearField();
  removeShowClass();

  formContainer.classList.remove('edit-form');
  // shows added value on screen
  saveAndRender(taskArray);
  renderProject();
  renderContext();
});

fixedButton.addEventListener('click', () => {
  clearField();
  showForm();
});

overlay.addEventListener('click', () => {
  removeShowClass();
});

// filter by project name
projectHeader.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('project-name')) {
    const projectName = e.target.textContent;
    let filteredProject = [];
    filteredProject = taskArray.filter(
      (task) => task.projectName === projectName,
    );
    saveAndRender(filteredProject);
  }
});

// filter by context
contextHeader.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('context-name')) {
    const contextName = e.target.textContent;
    let filteredContext = [];
    filteredContext = taskArray.filter((task) => task.context === contextName);
    saveAndRender(filteredContext);
  }
});

const inbox = document.querySelector('.menu-header.inbox');
inbox.addEventListener('click', (e) => {
  const { parentNode } = e.target;
  if (parentNode.classList.contains('all-tasks')) {
    saveAndRender(taskArray);
  }
  if (parentNode.classList.contains('today')) {
    // const todayTask = taskArray.filter((task) => {
    //   if (isToday(parseISO(task.dueDate))) {
    //     return task;
    //   }
    // });
    const todayTask = taskArray.filter((task) =>
      isToday(parseISO(task.dueDate)),
    );
    saveAndRender(todayTask);
  }
  if (parentNode.classList.contains('tomorrow')) {
    const tomorrowTask = taskArray.filter((task) =>
      isTomorrow(parseISO(task.dueDate)),
    );
    saveAndRender(tomorrowTask);
  }
  if (parentNode.classList.contains('this-week')) {
    const weekTask = taskArray.filter((task) =>
      isThisWeek(parseISO(task.dueDate)),
    );
    saveAndRender(weekTask);
  }
});

function showCompletedTask() {
  const completedTask = taskArray.filter((task) => task.isCompleted);
  saveAndRender(completedTask);
}
const completeHeader = document.querySelector('.sub-menu.complete');
// eslint-disable-next-line no-unused-vars
completeHeader.addEventListener('click', (e) => {
  showCompletedTask();
});

function showIncompleteTask() {
  const incompletedTask = taskArray.filter((task) => !task.isCompleted);
  saveAndRender(incompletedTask);
}
const incompleteHeader = document.querySelector('.sub-menu.incomplete');
// eslint-disable-next-line no-unused-vars
incompleteHeader.addEventListener('click', (e) => {
  showIncompleteTask();
});
