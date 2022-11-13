var inp = document.querySelector(".taskname");
var list = document.querySelector(".taskList");
var addTast = document.querySelector(".btnTask");
var taskList = [];

function btnAdd() {
    console.log(inp.value)
    console.log(list)
    if (inp.value == "") {
    alert("nhập gì đó đi")
    }else{
        let newTask = document.createElement("li")
        console.log(newTask)
        newTask.innerHTML = inp.value
        console.log(newTask)
        list.appendChild(newTask)
        taskList.push(inp.value)
        inp.value = ""
        console.log(taskList);
        localStorage.setItem('todoList', JSON.stringify(taskList))
    }
}