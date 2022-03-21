//removes show class to turn form display off
import clearField from "./clearField";
let form = document.querySelector('form');
let overlay = document.querySelector('.overlay');
let formContainer = document.querySelector('#form-conatiner');

export default function removeShowClass(){
    form.classList.remove('show');
    overlay.classList.remove('show');
    formContainer.classList.remove('edit-form');
}