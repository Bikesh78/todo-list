import './style.css';
import createTaskCard from './createTaskCard';
import getFormValue from './getFormValue';
import removeShowClass from './removeShowClass';
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

createTaskCard(task1);

const taskArray = [];

// let ddd =getFormValue();


// // TODO : create a function that receives value from form
// let taskField = document.querySelector('#task-field');
// let projectField = document.querySelector('#project-field');
// let contextField = document.querySelector('#context-field');
// let priorityField = document.querySelector('#priority-field');
// let dueDateField = document.querySelector('#due-date-field');
// let submitButton = document.querySelector('.submit');

// function clearField(){
//     taskField.value = '';
//     projectField.value = '';
//     contextField.value = '';
//     priorityField.value = '';
//     dueDateField.value = '';
// }

// let formValue=[];

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     let taskName = taskField.value;
//     let projectName = projectField.value;
//     let contextName = contextField.value;
//     let priorityLevel = priorityField.value;
//     let dueDate = dueDateField.value;

//     clearField();
//     removeShowClass();
//     taskArray.push(Task.apply(null,[taskName, projectName, contextName, priorityLevel, dueDate]));
//     // formValue = [taskName, projectName, contextName, priorityLevel, dueDate];
// })
let submitButton = document.querySelector('.submit');

// calls getFormValue() and passes the input value of form into taskArray
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    //adds task object into taskArray
    taskArray.push(Task.apply(null,getFormValue()));
    console.log(taskArray);
    
})

//display form button when clicked

let fixedButton = document.querySelector('.fixed-button');
let form = document.querySelector('form');
let overlay = document.querySelector('.overlay');

fixedButton.addEventListener('click',(e) => {
    form.classList.add('show');
    overlay.classList.add('show');
    
})



overlay.addEventListener('click', () => {
    removeShowClass();
})
