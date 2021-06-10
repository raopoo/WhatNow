
// newTaskTitle
// newTaskDescription
// newTaskDate
// newTaskAssignTo
// newTaskStatus
// newTaskEasy
// newTaskNormal
// newTaskDard
let newTaskTitle = document.body.querySelector("#newTaskTitle");
let errMsgNewTask =  document.body.querySelector("#errMsgNewTask");
let addTaskBtn = document.body.getElementById("#addTaskBtn");
const btnTest = document.body.querySelector("#btnTest");
//Creating task form validation
const validFormFieldInput = () => {
    console.log("test button");
  if(newTaskTitle === "" || newTaskTitle.length < 4){
    errMsgNewTask.innerHTML = "Your title should be 5 or more characters";
  }
}
btnTest.addEventListener('click', validFormFieldInput);