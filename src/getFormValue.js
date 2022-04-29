// returns the form input value as an array
export default function getFormValue() {
  const formContainer = document.querySelector('#form-conatiner');
  const taskField = document.querySelector('#task-field');
  const projectField = document.querySelector('#project-field');
  const contextField = document.querySelector('#context-field');
  const priorityField = document.querySelector('#priority-field');
  const dueDateField = document.querySelector('#due-date-field');

  if (formContainer.classList.contains('edit-form')) {
    return undefined;
  }
  const taskName = taskField.value;
  const projectName = projectField.value;
  const contextName = contextField.value;
  const priorityLevel = priorityField.value;
  const dueDate = dueDateField.value;
  const taskDetail = null;

  // taskArray.push(Task.apply(null,[taskName, projectName, contextName, priorityLevel, dueDate]));

  return [
    taskName,
    taskDetail,
    contextName,
    priorityLevel,
    dueDate,
    projectName,
  ];
}
