
// newTaskTitle
// newTaskDescription
// newTaskDate
// newTaskAssignTo
// newTaskStatus
// newTaskEasy
// newTaskNormal
// newTaskDard
let newtask1 = new TaskManager('Ivan');
console.log(newtask1.name);
//Creating task form validation
const validFormFieldInput = () => {
    let forms = document.querySelector('.needs-validation');
    let newTaskTitle = document.querySelector("#newTaskTitle").value;
    let errMsgNewTask =  document.querySelector("#errMsgNewTask");
    let addTaskBtn = document.querySelector("#addTaskBtn");
    let newTaskDescription = document.querySelector("#newTaskDescription").value;
    let newTaskDate = document.querySelector("#newTaskDate").value;
    let newTaskAssignTo = document.querySelector("#newTaskAssignTo").value;
    let newTaskStatus = document.querySelector("#newTaskStatus").value;
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
addTaskBtn.addEventListener('click', validFormFieldInput);

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()
