import './style.css';

/* const getTaskItem = (data) => {
    let taskItem = data.taskItem;
    return {taskItem};
}
const getTaskDetail = (data) =>{
    let taskDetail = data.taskDetail;
    return {taskDetail};
} */
const Task = (taskItem, taskDetail, context, priority, dueDate, projectName) => {
/*     const data ={taskItem, taskDetail, context, priority, dueDate, projectName};
    return Object.assign({},getTaskItem(data),getTaskDetail(data)); */
   let isCompleted = false;
    
    return Object.assign({},{taskItem, taskDetail, context, priority, dueDate, projectName,isCompleted});
}

const task1 = Task('Do pushups and pull ups',
                    'Exercise rigorously for at least 20 minutes',
                    'Exercise',
                    'A',
                    '',
                    'Loose 5kg of weight',
                    );
// task1.isCompleted = true;
console.log(task1.isCompleted);

//
function getTaskItem(task){
    return task.taskItem;
}
function getTaskDetail(task){
    return task.taskDetail;
}
function getContext(task){
    return task.context;
}
function getPriority(task){
    return task.priority;
}
function getDueDate(task){
    return task.dueDate;
}
function getProjectName(task){
    return task.projectName
}


let checkbox = document.createElement('input');
let sectionTask = document.querySelector('.section-tasks');
let taskItem = document.createElement('p');
let context = document.createElement('p');
let priority = document.createElement('p');
let dueDate = document.createElement('p');
let edit = document.createElement('p');
let deleteTask = document.createElement('p');

checkbox.type = 'checkbox';
console.log(checkbox);
taskItem.textContent = getTaskItem(task1);
context.textContent = getContext(task1);
priority.textContent = getPriority(task1);
dueDate.textContent = getDueDate(task1);
edit.textContent = 'Edit';
deleteTask.textContent = 'X';

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

// let taskContainerClone = taskContainer.cloneNode(true);
sectionTask.appendChild(taskContainer.cloneNode(true));

