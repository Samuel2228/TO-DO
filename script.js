//getting all required elements
const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.Value;  //getting user entered value
    if(userData.trim() != 0){  //if user values aren't only spaces
        addBtn.classList.add("active");  //active the add button
    }else{
        addBtn.classList.remove("active");  //unactive the add button
    }
}

//if user click on the add button 
addBtn.onclick = ()=>{
    let userData = inputBox.Value;  //getting user data
    let getLocalStorage = localStorage.getItem("New Todo");  //getting localstorage
    if(getLocalStorage == null){  //if localStorage is null
        listArr = [];  //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage);  //transforming JSON string into a js object
    }
    listArr.push(userData);  //pushing or adding user data 
    localStorage.setItem("New Todo", JSON.stringify(listArr));  //transforming js objects into a JSON string
    showTasks();  //calling showTasks funtion
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");  //getting localstorage
    if(getLocalStorage == null){  //if localStorage is null
        listArr = [];  //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage);  //transforming JSON string into a js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += '<li> ${element} <span><i class="fas fa-trash"></i></span></li>';
    });
    todoList.innerHTML = newLiTag;  //adding new li tag inside ul tag
}