
//testing the function in taskmanger 
let allTasks = new TaskManager();

//Bootstrap form validation
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

const clearform = () => {
  document.querySelector("#newTaskTitle").value = "";
  document.querySelector("#newTaskDescription").value = "";
  document.querySelector("#newTaskDate").value = "";
  document.querySelector("#newTaskAssignTo").value = "";
  
}
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
          
          else {
          let newTaskTitle = document.querySelector("#newTaskTitle").value;
          let newTaskDescription = document.querySelector("#newTaskDescription").value;
          let newTaskDate = document.querySelector("#newTaskDate").value;
          let newTaskAssignTo = document.querySelector("#newTaskAssignTo").value;
          let newTaskStatus = document.querySelector("#newTaskStatus").value;

          allTasks.addTask(newTaskTitle, newTaskDescription, newTaskAssignTo, newTaskDate, newTaskStatus);
          allTasks.render();
                 event.preventDefault();
                 clearform();
                //  form.classList.remove('was-validated');
                 myModal.hide();

        }
       form.classList.add('was-validated');
      }, false)
     }) 
    })();

let taskHtml = createTaskHtml('poject work', 'Work on task1', 'Pooja', '12/08/21', 'In Progress');
console.log(taskHtml);

//Using query to assign pageList to the html bootstrap card list
const pageList = document.querySelector("#sampleCard");
//Checking if the done botton was clicked
pageList.addEventListener('click', function (event) {
   let doneCheck = event.target.classList.contains('done-button');

   if(doneCheck){
    //  alert("I am the done button");
    const parentTask = event.target.parentElement.parentElement.parentElement;
    let taskId = Number(parentTask.dataset.current);
    let task = allTasks.getTaskById(taskId);
    task.Status = "Done";
    allTasks.render();
   /// remove the done button

   }
});

