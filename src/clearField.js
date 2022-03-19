// clears form field on submit

export default function clearField() {
  let taskField = document.querySelector("#task-field");
  let projectField = document.querySelector("#project-field");
  let contextField = document.querySelector("#context-field");
  let priorityField = document.querySelector("#priority-field");
  let dueDateField = document.querySelector("#due-date-field");

  taskField.value = "";
  projectField.value = "";
  contextField.value = "";
  priorityField.value = "";
  dueDateField.value = "";
}
