//removes show class to turn form display off

let form = document.querySelector('form');
let overlay = document.querySelector('.overlay');

export default function removeShowClass(){
    form.classList.remove('show');
    overlay.classList.remove('show');
}