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

let counter = 0;

const Task = (taskItem, taskDetail, context, priority, dueDate, projectName) => {
/*     const data ={taskItem, taskDetail, context, priority, dueDate, projectName};
    return Object.assign({},getTaskItem(data),getTaskDetail(data)); */
   let isCompleted = false;
   let taskID = ++counter;
    return Object.assign({},{taskID,taskItem, taskDetail, context, priority, dueDate, projectName,isCompleted});
}


const task1 = Task('Do pushups and pull ups',
                    'Exercise rigorously for at least 20 minutes',
                    'Exercise',
                    'A',
                    '',
                    'Loose 5kg of weight',
                    );
// task1.isCompleted = true;

let taskArray = [];
taskArray.push(Task('Do pushups and pull ups',
                    'Exercise rigorously for at least 20 minutes',
                    'Exercise',
                    'A',
                    '',
                    'Loose 5kg of weight',
                    )) ;

console.log(task1.isCompleted);
console.log(task1); 

taskArray.push(Task('Do pushups',
                    'Exercise rigorously for at least 20 minutes',
                    'Exercise',
                    'A',
                    '',
                    'Loose 5kg of weight',
                    )) ;
//
console.log(taskArray);
createTaskCard(taskArray[0]);
createTaskCard(taskArray[1]);

let submitButton = document.querySelector('.submit');

// calls getFormValue() and passes the input value of form into taskArray
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    //adds task object into taskArray
    taskArray.push(Task.apply(null,getFormValue()));
    console.log(taskArray);

    //shows added value on screen
    createTaskCard(taskArray[taskArray.length - 1]);
    
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

//TODO: create a function that deletes the task item. Launch that item when submit button is clicked