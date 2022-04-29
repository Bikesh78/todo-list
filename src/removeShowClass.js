// removes show class to turn form display off
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const formContainer = document.querySelector('#form-conatiner');

export default function removeShowClass() {
  form.classList.remove('show');
  overlay.classList.remove('show');
  formContainer.classList.remove('edit-form');
}
