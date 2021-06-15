
//testing the function in taskmanger 
let allTasks = new TaskManager();
allTasks.addTask("new1","Add file", "Pooja", "15/06/2021", "inprogress", "easy");
allTasks.addTask("new2","Get breakfast", "Ivan", "15/06/2021", "inprogress", "easy");
console.log(allTasks.taskList);

//Creating task form validation
const validFormFieldInput = () => {
    // let forms = document.querySelector('.needs-validation');
    let newTaskTitle = document.querySelector("#newTaskTitle").value;
    let errMsgNewTask =  document.querySelector("#errMsgNewTask");
    let addTaskBtn = document.querySelector("#addTaskBtn");
    let newTaskDescription = document.querySelector("#newTaskDescription").value;
    let newTaskDate = document.querySelector("#newTaskDate").value;
    let newTaskAssignTo = document.querySelector("#newTaskAssignTo").value;
    let newTaskStatus = document.querySelector("#newTaskStatus").value;
    let taskLevel = "Easy";
    //Validatiing title
   if(newTaskTitle === "" || newTaskTitle.length < 4){
    newTaskTitle.classList.add(':invalid');
    errMsgNewTask.innerHTML = "Your title should be 5 or more characters";
    }
    //validating task discription
    if(newTaskDescription === "" || newTaskDescription.length < 4){
        errMsgNewTask.innerHTML = "Your task discription should be 5 or more characters";
        }
    //validating task date
    
    if(newTaskDate === ""){
        errMsgNewTask.innerHTML = "Enter a valid date"; 
        }
    //validating task assignment
    if(newTaskAssignTo === "" || newTaskAssignTo.length < 4){
        errMsgNewTask.innerHTML = "The name should be 5 or more characters";
        }
    //validating task status

    if(newTaskStatus !== "Choose..."){
        errMsgNewTask.innerHTML = "Please select a valid option"; 
        }
}
const experiment = () => {
 
    let newTaskTitle = document.querySelector("#newTaskTitle").value;
    let newTaskDescription = document.querySelector("#newTaskDescription").value;
    let newTaskDate = document.querySelector("#newTaskDate").value;
    let newTaskAssignTo = document.querySelector("#newTaskAssignTo").value;
    let newTaskStatus = document.querySelector("#newTaskStatus").value;
    let taskLevel = "Easy";
  allTasks.addTask(newTaskTitle, newTaskDescription, newTaskAssignTo, newTaskDate, newTaskStatus, taskLevel);
  console.log(allTasks.taskList);
  console.log(newTaskTitle);
}

addTaskBtn.addEventListener('click', experiment);


(function () {
    'use strict'
    console.log("Hi");
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
         
          form.classList.add('was-validated')
                 }, false)
      }) 
    })()

let taskHtml = createTaskHtml('poject work', 'Work on task1', 'Pooja', '12/08/21', 'In Progress');
console.log(taskHtml);

