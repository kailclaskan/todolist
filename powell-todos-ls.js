//UL
const list = document.querySelector('#todolist');
//TEXT for NEW TODO
const text = document.querySelector('#txtnewtodo');
//FORM holding NEW TODO
const form = document.querySelector('#frmnewtodo');
//BUTTON for NEW TODO
const btn = document.querySelector('#btnnewtodo');
//Array of Elements
let arr = [];
//Get Item from Local Storage
const retData = localStorage.getItem('todolist');
const refList = JSON.parse(retData);
//If the reference list has content
if(refList){
    //const lis = document.querySelectorAll('li');
    console.log(refList.length);
    //create new li for each and add it to the page
    for (let i = 0; i < refList.length; i++){
            const newLI = document.createElement('li');
            //To ensure a button is created I used innerHTML.
            newLI.innerHTML = refList[i];
            list.append(newLI);
            arr = [];
            arr.push(newLI.innerHTML);
    }
}

//Add new to do
form.addEventListener('submit', function(e){
    e.preventDefault();
    //If there's a value in the form create new element
    if(text.value){
        const liToDo = document.createElement('li');
        const btnRemove = document.createElement('button');
        btnRemove.textContent = "Remove Me";
        liToDo.textContent = text.value + " ";
        list.appendChild(liToDo);
        liToDo.appendChild(btnRemove);
        arr.push(liToDo.innerHTML);
        form.reset();
        }//Else do nothing.
        localStorage.setItem('todolist', JSON.stringify(arr));
        //Compared to Solution this is technically the same, aside
        //from rule I have that prevents adding empty values.
    });

//UL listenst for click on element
list.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        localStorage.clear();
        const lis = document.querySelectorAll('li');
        arr = [];
        for(let i = 0; i < lis.length; i++){
            arr.push(lis[i].innerHTML);
        }
    }
    //Else if the li is clicked strikethrough class is toggled
    else if(e.target.tagName === "LI"){
        e.target.classList.add("strikethrough");
        localStorage.clear();
        arr = [];
        //arr.push(e.target.parentElement.innerHTML);
        const lis = document.querySelectorAll('li');
        for(let i = 0; i < lis.length; i++){
            arr.push(lis[i].innerHTML);
        }
    }
    console.log(arr.length);
    localStorage.setItem('todolist', JSON.stringify(arr));
    //Compared to Solution this is technically the same, aside
    //from the target variable and the way the strikethrough is 
    //added. (I use a class that toggles on and off.)

})