// clears form field on submit

export default function clearField() {
  const taskField = document.querySelector('#task-field');
  const projectField = document.querySelector('#project-field');
  const contextField = document.querySelector('#context-field');
  const priorityField = document.querySelector('#priority-field');
  const dueDateField = document.querySelector('#due-date-field');

  taskField.value = '';
  projectField.value = '';
  contextField.value = '';
  priorityField.value = '';
  dueDateField.value = '';
}
