import getItem from "./getItems";

export default function createTaskCard(task){
let sectionTask = document.querySelector('.section-tasks');

let checkbox = document.createElement('input');
let taskItem = document.createElement('p');
let context = document.createElement('p');
let priority = document.createElement('p');
let dueDate = document.createElement('p');
let edit = document.createElement('p');
let deleteTask = document.createElement('p');      

let checkboxContainer = document.createElement('div');
let taskTest = document.createElement('div');
let contextTag = document.createElement('div');
let priorityTag = document.createElement('div');
let dueTag = document.createElement('div');
let editOption = document.createElement('div');
let deleteContainer = document.createElement('div');

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

let taskContainer = document.createElement('div');
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

getItem(task);


taskItem.textContent = getItem(task).getTaskItem;
context.textContent = getItem(task).getContext;
priority.textContent = getItem(task).getPriority;
dueDate.textContent = getItem(task).getDueDate;

sectionTask.appendChild(taskContainer.cloneNode(true));
}