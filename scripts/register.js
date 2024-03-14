import { register } from "./funcs/auth.js";

const createAccountBtn = document.querySelector('#createAccountBtn')

createAccountBtn.addEventListener('click',(event) => {
    event.preventDefault()
    register()
})