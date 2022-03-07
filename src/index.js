import './style.css';
import createTaskCard from './createTaskCard';
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

// TODO : create a function that receives value from form



//display form button when clicked
let fixedButton = document.querySelector('.fixed-button');
let form = document.querySelector('form');
let body = document.querySelector('body');
fixedButton.addEventListener('click',(e) => {
    form.style.display = "flex";
})

