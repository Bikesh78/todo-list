//returns the form input value as an array
export default function getFormValue(){
    let formContainer = document.querySelector('#form-conatiner');
    let taskField = document.querySelector('#task-field');
    let projectField = document.querySelector('#project-field');
    let contextField = document.querySelector('#context-field');
    let priorityField = document.querySelector('#priority-field');
    let dueDateField = document.querySelector('#due-date-field');

    if (formContainer.classList.contains('edit-form')){
        return
        
    } else{

        let taskName = taskField.value;
        let projectName = projectField.value;
        let contextName = contextField.value;
        let priorityLevel = priorityField.value;
        let dueDate = dueDateField.value;
    
        // taskArray.push(Task.apply(null,[taskName, projectName, contextName, priorityLevel, dueDate]));
        
        return [taskName, projectName, contextName, priorityLevel, dueDate];
    }
    
}
