let input_task = document.getElementById("tasks");
let input_date = document.getElementById("date");
let input_time = document.getElementById("time");

let list_container = document.getElementsByClassName("list_container")[0];

let addTask = () => {
    if (input_task.value === "" || input_date.value === "" || input_time.value === "") {
        alert("Please fill all the details");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_task.value + "  -  " + input_date.value + "  -  " + input_time.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_task.value = "";
    input_time.value = "";
    input_date.value = "";
    saveData();
}
list_container.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",list_container.innerHTML)
}
function showTASKS() {
    list_container.innerHTML = localStorage.getItem("data");
}
showTASKS();