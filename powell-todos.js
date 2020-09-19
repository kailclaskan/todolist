/*
Part 1
Users should be able to:
1. Add a new todo (Submitting a Form) ~KLP
2. Mark a todo as completed (Cross out the text of the todo) ~KLP
3. Remove a todo ~KLP

Part 2
1. save todos in localStorage (Setitem?) so when the page refreshes all settings still exist.
*/
const list = document.querySelector('ul');
const text = document.querySelector('#txtnewtodo');
const form = document.querySelector('form');
let alltodo = new Array();
let curlist = document.querySelectorAll('li');
const retData = localStorage.getItem('todolist');
const refList = JSON.parse(retData);


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(text.value){
        const newToDo = document.createElement('li');
        const newRemove = document.createElement('button');
        newRemove.textContent = "Remove Me";
        newToDo.textContent = `${text.value} `;
        list.append(newToDo);
        newToDo.append(newRemove);
        text.value = '';
        alltodo.push(newToDo);
    }
    localStorage.setItem('todolist', JSON.stringify(alltodo));
})
list.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("strikethrough");
        }
})