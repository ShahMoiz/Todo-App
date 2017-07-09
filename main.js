let todoArr = [], inputTodo = document.getElementById('todo'), todoULList = document.getElementById('todoList'), submitButDiv = document.getElementById('submitButDiv'), popupNoti = document.getElementById('popupNoti'), contentDiv = document.getElementById('content');
function handle(e) {
    if (e.keyCode == 13) {
        afterAddTask.addYourPlan();
    }
}
window.onload = () => {
    // let url = window.location.pathname;
    // if(url.substring(url.lastIndexOf('/')+1) == 'diary.html'){
    afterAddTask.forLoop();
    // }
};
class AfterAddTask {
    specificDate() {
        let day, specificDate;
        let dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        let fullDate = new Date();
        for (let i = 0; i <= (dayName.length + 1); i++) {
            if (fullDate.getDay() == i) {
                day = dayName[i];
            }
        }
        return fullDate.getDate() + "-" + fullDate.getMonth() + "-" + fullDate.getFullYear() + ", " + day + ", " + fullDate.getHours() + ":" + fullDate.getMinutes();
    }
    forLoop() {
        var storedData = localStorage.getItem("TodoArray");
        if (storedData) {
            todoArr = JSON.parse(storedData);
        }
        let url = window.location.pathname;
        if (url.substring(url.lastIndexOf('/') + 1) == 'diary.html') {
            console.log("Local Storage ", JSON.parse(storedData));
            for (let i = 0; i < todoArr.length; i++) {
                contentDiv.innerHTML +=
                    '<div class="todoListText">' +
                        '<li>' +
                        '<input type="checkbox"><span class="planHeading">' + todoArr[i] + '</span><div class="inputDltOrEdit">' +
                        '<input type="submit" id="sub" value="delete item" onclick="afterAddTask.dlt(\'' + i + '\')">' +
                        '<input type="submit" id="sub" value="Edit item" onclick="afterAddTask.edit(\'' + i + '\')">' +
                        '</div>' +
                        '</li>' +
                        '<p>Task Added On <b>' + afterAddTask.specificDate() + '</b></p></li>' +
                        '</div>';
            }
        }
    }
    errorMsg() {
        popupNoti.innerHTML = '<p class="err">Your Plan Field is Empty...<a style="color:white" href="#">Add Your Plan</a></p>';
        let errColor = document.getElementsByClassName('err')[0];
        errColor.style.backgroundColor = 'red';
        errColor.style.color = 'white';
        this.popUpNotifier();
    }
    popUpNotifier() {
        popupNoti.style.opacity = "1";
        popupNoti.style.display = "block";
        setTimeout(() => {
            popupNoti.style.opacity = "0.8";
        }, 700);
        setTimeout(() => {
            popupNoti.style.opacity = "0.6";
        }, 1400);
        setTimeout(() => {
            popupNoti.style.opacity = "0.4";
        }, 2100);
        setTimeout(() => {
            popupNoti.style.display = "none";
        }, 3000);
    }
    addYourPlan() {
        contentDiv.innerHTML = "";
        if (inputTodo.value == "" || inputTodo.value == null) {
            console.log("Add Task If Condition");
            this.forLoop();
            this.errorMsg();
            return false;
        }
        else {
            // console.log("Add Task If else Condition");
            var i = todoArr.push(inputTodo.value);
            // console.log(todoArr.push(inputTodo.value))
            console.log("Todo Arr", todoArr);
            localStorage.setItem('TodoArray', JSON.stringify(todoArr));
            console.log(localStorage.setItem('TodoArray', JSON.stringify(todoArr)));
            this.forLoop();
            popupNoti.innerHTML = '<p>Your Plan Added Successfully In Your Diary <button onclick="afterAddTask.dlt(' + (i - 1) + ')">Undo</button></p>';
            this.popUpNotifier();
        }
        // inputTodo.value = null;
    }
    dlt(j) {
        console.log("dlt works", j);
        todoArr.splice(j, 1);
        localStorage.setItem('TodoArray', JSON.stringify(todoArr));
        contentDiv.innerHTML = "";
        this.forLoop();
        console.log(todoArr);
        console.log("its Work");
    }
    // var a = {name: 'mozi', id: 12}
    edit(j) {
        // console.log(j)
        // let index: number = todoArr.indexOf(j);
        // let inputTodoValue: string = j;
        // console.log(inputTodoValue);
        let v = document.getElementsByClassName('planHeading');
        v[j].innerHTML = '<input type="text" id="todo' + j + '" onkeypress="afterAddTask.onkey(event,' + j + ')">';
        let inputTodo1 = document.getElementById('todo' + j + '');
        // inputTodo1.value = inputTodoValue;
        // submitButDiv.innerHTML = '<input type="submit" id="sub" onclick="afterAddTask.editTask(index)" value="Edit your Task">';
    }
    onkey(e, t) {
        // console.log(t);
        if (e.keyCode == 13) {
            afterAddTask.editTask(t);
            // console.log(t);
        }
    }
    editTask(i) {
        let inputTodo1 = document.getElementById('todo' + i + '');
        // console.log("Task Is Replaced With", inputTodo.value);
        todoArr[i] = inputTodo1.value;
        localStorage.setItem('TodoArray', JSON.stringify(todoArr));
        contentDiv.innerHTML = "";
        // submitButDiv.innerHTML = '<input type="submit" id="sub" onclick="afterAddTask.addYourPlan()" value="Add your Task">';
        this.forLoop();
        inputTodo.value = null;
    }
}
let afterAddTask = new AfterAddTask();
