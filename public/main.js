// let todoArr: Object[] = [],
// inputTodo = (<HTMLInputElement>document.getElementById('todo')),
// todoULList = (<HTMLHtmlElement>document.getElementById('todoList')),
// submitButDiv = (<HTMLInputElement>document.getElementById('submitButDiv')),
// popupNoti = (<HTMLInputElement>document.getElementById('popupNoti')),
// contentDiv = (<HTMLHtmlElement>document.getElementById('content'));
// var firebase = require("firebase");
// import * as firebase from "firebase";
// // var firebase = require("firebase/app");
// //     require("firebase/auth");
// //     require("firebase/database");
// // console.log(storage);
// function handle(e){
//     if(e.keyCode == 13){
//         afterAddTask.addYourPlan();
//     }
// }
// window.onload = () => {
//         afterAddTask.forLoop();
// }
// class AfterAddTask{
//     private specificDate(){
//         let day : string,
//         specificDate: string,
//         month: string,
//         dayName : string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'],
//         monthName : string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         fullDate: Date = new Date();
//             for(let i = 0; i <= (dayName.length); i++){
//                 if(fullDate.getDay() == i){
//                     day = dayName[i];
//                 }
//             }
//             for(let i = 0; i < (monthName.length); i++){
//                 if(fullDate.getMonth() == i){
//                     month = monthName[i];
//                 }
//             }
//         return fullDate.getDate() + "-" + month + "-" + fullDate.getFullYear() + ", " + day + ", " + fullDate.getHours() + ":" + fullDate.getMinutes();
//     }
//     public forLoop(): void{
//         let storedData: string = localStorage.getItem("TodoArray");
//         if (storedData) {
//             todoArr = JSON.parse(storedData);
//         }
//         let url: string = window.location.pathname;
//         if(url.substring(url.lastIndexOf('/')+1) == 'diary.html'){
//             // console.log("Local Storage ",JSON.parse(storedData))
//             for(let i = 0; i < todoArr.length; i++){
//                 contentDiv.innerHTML +=
//                 `<div class="todoListText">
//                     <li> 
//                         <input type="checkbox"><span class="planHeading">` + todoArr[i] + `</span><div class="inputDltOrEdit">
//                             <input type="submit" class="sub" value="delete item" onclick="afterAddTask.dlt(\``+ i+ `\`)">
//                             <input type="submit" class="sub" value="Edit item" onclick="afterAddTask.edit(\``+ i+ `\`)">
//                         </div>
//                     </li>
//                     <p>Task Added On <b>` + this.specificDate() + `</b></p></li>
//                 </div>` ;
//             }
//         }
//     }
//     private errorMsg(): void {
//         popupNoti.innerHTML = '<p class="err">Your Plan Field is Empty...<a style="color:white" href="#">Add Your Plan</a></p>';
//         let errColor = (<HTMLInputElement>document.getElementsByClassName('err')[0]);
//         errColor.style.backgroundColor = 'red';
//         errColor.style.color = 'white';
//             this.popUpNotifier();
//     }
//     private popUpNotifier(): void{
//         popupNoti.style.opacity = "1";
//         popupNoti.style.display = "block";
//         setTimeout((): void => {
//             popupNoti.style.opacity = "0.8";
//         },700)
//         setTimeout((): void => {
//             popupNoti.style.opacity = "0.6";
//         },1400)
//         setTimeout((): void => {
//             popupNoti.style.opacity = "0.4";
//         },2100)
//         setTimeout((): void => {
//             popupNoti.style.display = "none";
//         }, 3000)
//     }
//     public addYourPlan(): boolean{
//         contentDiv.innerHTML = "";
//         if(inputTodo.value == "" || inputTodo.value == null ) {
//             // console.log("Add Task If Condition");
//             this.forLoop();
//             this.errorMsg();
//             return false;
//         }
//         else {
//             let i: number = todoArr.push(inputTodo.value);
//             console.log("Todo Arr", todoArr);
//             firebase.database().ref('https://ahadees-8aeb2.firebaseapp.com/').set({
//                 todoArr
//             });
//             // var storage = firebase.storage(todoArr);
//             // console.log("Storage is",storage);
//             localStorage.setItem('TodoArray', JSON.stringify(todoArr));
//             this.forLoop();
//             popupNoti.innerHTML = '<p>Your Plan Added Successfully In Your Diary <button onclick="afterAddTask.dlt('+ (i-1) +')">Undo</button></p>';
//             this.popUpNotifier();
//         }
//     }
//     private dlt(j: number): void{
//         console.log("dlt works", j )
//         todoArr.splice(j, 1);
//         localStorage.setItem('TodoArray', JSON.stringify(todoArr));
//         contentDiv.innerHTML = "";
//         this.forLoop();
//         console.log(todoArr);
//         console.log("its Work");
//     }
//     edit(j: number): void{
//         let v = (<HTMLCollectionOf<any>>document.getElementsByClassName('planHeading'))
//         v[j].innerHTML = '<input type="text" id="todo'+ j+'" onkeypress="afterAddTask.onkey(event,'+ j +')">';
//         let inputTodo1= (<HTMLInputElement>document.getElementById('todo'+ j +''));
//     }
//     onkey(e: any, t: number){
//         if(e.keyCode == 13){
//             afterAddTask.editTask(t);
//         }
//     }
//     editTask(i: number): void{
//         let inputTodo1= (<HTMLInputElement>document.getElementById('todo'+ i +''));
//         todoArr[i] = inputTodo1.value;
//         localStorage.setItem('TodoArray', JSON.stringify(todoArr));
//         contentDiv.innerHTML = "";
//         this.forLoop();
//         inputTodo.value = null;
//     }
// }
// let afterAddTask = new AfterAddTask();
var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAwpvtpgLSkUANXLDTj6yZGmf8PT1Ego2c",
    authDomain: "ahadees-8aeb2.firebaseapp.com",
    databaseURL: "https://ahadees-8aeb2.firebaseio.com",
    projectId: "ahadees-8aeb2",
    storageBucket: "ahadees-8aeb2.appspot.com",
    messagingSenderId: "421374039513"
};
firebase.initializeApp(config);
// import * as firebase from "firebase";
let a = document.getElementById("text");
function func() {
    // a.value = "Welcome"
    let b = a.value;
    alert(b);
    firebase.storage().ref.put(b).then(function (snapshot) {
        console.log('Uploaded a blob or file!');
    });
}
