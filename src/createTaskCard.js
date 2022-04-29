import getItem from './getItems';

const sectionTask = document.querySelector('.section-tasks');
export default function createTaskCard(task) {
  // let sectionTask = document.querySelector('.section-tasks');

  const checkbox = document.createElement('input');
  const taskItem = document.createElement('p');
  const context = document.createElement('p');
  const priority = document.createElement('p');
  const dueDate = document.createElement('p');
  const edit = document.createElement('p');
  const deleteTask = document.createElement('p');

  const checkboxContainer = document.createElement('div');
  const taskTest = document.createElement('div');
  const contextTag = document.createElement('div');
  const priorityTag = document.createElement('div');
  const dueTag = document.createElement('div');
  const editOption = document.createElement('div');
  const deleteContainer = document.createElement('div');

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

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  taskContainer.appendChild(checkboxContainer);
  taskContainer.appendChild(taskTest);
  taskContainer.appendChild(contextTag);
  taskContainer.appendChild(priorityTag);
  taskContainer.appendChild(dueTag);
  taskContainer.appendChild(editOption);
  taskContainer.appendChild(deleteContainer);

  checkbox.type = 'checkbox';
  edit.textContent = 'Edit';
  deleteTask.textContent = 'X';

  getItem(task);

  taskItem.textContent = getItem(task).getTaskItem;
  context.textContent = getItem(task).getContext;
  priority.textContent = getItem(task).getPriority;
  dueDate.textContent = getItem(task).getDueDate;

  sectionTask.appendChild(taskContainer);
}
