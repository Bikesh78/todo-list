import removeShowClass from "./removeShowClass";

//returns the form input value as an array
export default function getFormValue(){
    let taskField = document.querySelector('#task-field');
    let projectField = document.querySelector('#project-field');
    let contextField = document.querySelector('#context-field');
    let priorityField = document.querySelector('#priority-field');
    let dueDateField = document.querySelector('#due-date-field');
    let submitButton = document.querySelector('.submit');

    function clearField(){
        taskField.value = '';
        projectField.value = '';
        contextField.value = '';
        priorityField.value = '';
        dueDateField.value = '';
    }

    let taskName = taskField.value;
    let projectName = projectField.value;
    let contextName = contextField.value;
    let priorityLevel = priorityField.value;
    let dueDate = dueDateField.value;

    clearField();
    removeShowClass();
    // taskArray.push(Task.apply(null,[taskName, projectName, contextName, priorityLevel, dueDate]));

    return [taskName, projectName, contextName, priorityLevel, dueDate];
}
