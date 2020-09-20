
//Grab the unordered list
const list = document.querySelector('#todolist');
//Form holding the New Todo Task
const frm = document.querySelector('#frmnewtodo');
//Find the value of the input
const text = document.querySelector('#txtnewtodo');
//Array to store inner html for each to do
let arr = [];
//Get Item from Local Storage
let retData = localStorage.getItem('todolist');
//Turn it into a usable list.
let refList = JSON.parse(retData);
//Remove Duplicates
function removeExtra(data){
    return [...new Set(data)]
}
//Remove the task.
function writeList(){
    if(refList){
        arr = []
        removeExtra(refList);
        for(li of refList){
            const newLi = document.createElement('li');
            newLi.innerHTML = li;
            list.append(newLi);
            arr.push(newLi.innerHTML);
        }
    }
}
writeList();
//Strike through the task
function strikeTask(){
    e.target.classList.add('strikethrough');
}
//Add new task.
function addTask(){
    const newToDo = document.createElement('li');
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Remove Task';
    newToDo.textContent = text.value + ' ';
    list.appendChild(newToDo);
    newToDo.appendChild(addBtn);
    arr = [];
    arr.push(newToDo.parentElement.innerHTML);
    frm.reset();
}
function setItem(){
    localStorage.setItem('todolist', JSON.stringify(arr));
}

frm.addEventListener('submit', function(e){
    e.preventDefault();
    if(text.value){
        addTask();
    }
    setItem();
})
list.addEventListener('click', function(e){
    const tag = e.target.tagName;
    localStorage.clear();
    if(tag === "BUTTON"){
        e.target.parentElement.remove();
        const lis = document.querySelectorAll('li');
        for(li of lis){
            arr = [];
            arr.push(li.parentElement.innerHTML);
        }
    }else if (tag === "LI"){
        e.target.classList.add('strikethrough');
        arr = [];
        arr.push(e.target.parentElement.innerHTML);
    }
    removeExtra(arr);
    removeExtra(refList);
    setItem();
})