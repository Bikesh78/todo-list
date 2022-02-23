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

createTaskCard();

// taskItem.textContent = getTaskItem(task1);
// context.textContent = getContext(task1);
// priority.textContent = getPriority(task1);
// dueDate.textContent = getDueDate(task1);

