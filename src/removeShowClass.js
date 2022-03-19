//removes show class to turn form display off
import clearField from "./clearField";
let form = document.querySelector('form');
let overlay = document.querySelector('.overlay');

export default function removeShowClass(){
    clearField();
    form.classList.remove('show');
    overlay.classList.remove('show');
}