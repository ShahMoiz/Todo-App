let todoArr = [];
let inputTodo = document.getElementById('todo');
let todoULList = document.getElementById('todoList');
let submitButDiv = document.getElementById('submitButDiv');
let popupNoti = document.getElementById('popupNoti');
let contentDiv = document.getElementById('content');
function handle(e) {
    if (e.keyCode == 13) {
        afterAddTask.addYourPlan();
    }
}
window.onload = () => {
    // afterAddTask.forLoop();
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
        for (let i = 0; i < todoArr.length; i++) {
            contentDiv.innerHTML +=
                '<div class="todoListText">' +
                    '<li>' +
                    '<input type="checkbox"><span class="planHeading">' + todoArr[i] + '</span><div class="inputDltOrEdit">' +
                    '<input type="submit" id="sub" value="delete item" onclick="afterAddTask.dlt(\'' + todoArr[i] + '\')">' +
                    '<input type="submit" id="sub" value="Edit item" onclick="afterAddTask.edit(\'' + todoArr[i] + '\')">' +
                    '</div>' +
                    '</li>' +
                    '<p>Task Added On <b>' + afterAddTask.specificDate() + '</b></p></li>' +
                    '</div>';
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
            todoArr.push(inputTodo.value);
            localStorage.setItem('TodoArray', JSON.stringify(todoArr));
            // console.log("Todo Arr", todoArr);
            this.forLoop();
            popupNoti.innerHTML = '<p>Your Plan Added Successfully In Your Diary <a href="#">Undo</a></p>';
            this.popUpNotifier();
        }
        inputTodo.value = null;
    }
    dlt(j) {
        todoArr.splice(todoArr.indexOf(j), 1);
        localStorage.setItem('TodoArray', JSON.stringify(todoArr));
        contentDiv.innerHTML = "";
        this.forLoop();
        console.log(todoArr);
        console.log("its Work");
    }
    edit(j) {
        // console.log(j)
        let index = todoArr.indexOf(j);
        let inputTodoValue = j;
        console.log(inputTodoValue);
        let v = document.getElementsByClassName('planHeading');
        v[index].innerHTML = '<input type="text" id="todo1" onkeypress="afterAddTask.onkey(event,' + index + ')">';
        let inputTodo1 = document.getElementById('todo1');
        inputTodo1.value = inputTodoValue;
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
        let inputTodo1 = document.getElementById('todo1');
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
