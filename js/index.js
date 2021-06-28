
// Creates taskmanager object, loads it and renders it

let allTasks = new TaskManager();
allTasks.load();
allTasks.render();

//Bootstrap form hiding
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

//Clearing the form

const clearform = () => {
  document.querySelector("#newTaskTitle").value = "";
  document.querySelector("#newTaskDescription").value = "";
  document.querySelector("#newTaskDate").value = "";
  document.querySelector("#newTaskAssignTo").value = "";  
}

// ADD TASK event listener

(function () {
            'use strict'
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

            // Check radio button for difficulty
                        let newTaskDiff = allTasks.checkButton();

              // Add tasks to objects, displays them, and saves them to local storage. 
                        allTasks.addTask(newTaskTitle, newTaskDescription, newTaskAssignTo, newTaskDate, newTaskStatus, newTaskDiff);
                        allTasks.render();
                        allTasks.save();

              // Stops refresh, clears the form, hides the pop up window
                        event.preventDefault();
                        clearform();
                        myModal.hide();
                            }
                  form.classList.add('was-validated');
                  }, false)
                }) 
            })();

//Using query to assign pageList to the html bootstrap card list
const pageList = document.querySelector(".sampleCard");

//Checking if the done botton was clicked
pageList.addEventListener('click', function (event) {
   let doneCheck = event.target.classList.contains('done-button');
   let deleteCheck = event.target.classList.contains('delete-button');
   if(doneCheck){
    const parentTask = event.target.parentElement.parentElement.parentElement;
    let taskId = Number(parentTask.dataset.current);
    let task = allTasks.getTaskById(taskId);
    task.Status = "Done";
    allTasks.render();
  
   }else if(deleteCheck){
    const parentTask = event.target.parentElement.parentElement.parentElement;
    let taskId = Number(parentTask.dataset.current);
    allTasks.deleteTask(taskId);
    allTasks.save();
    allTasks.render();
   }
});

