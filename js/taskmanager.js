const taskHard = document.querySelector("#whatnow-hard");
const taskNormal = document.querySelector("#whatnow-normal");
const taskEasy = document.querySelector("#whatnow-easy");


const createTaskHtml = (currentId,taskTitle,taskDescription,taskAssignedTo,taskDueDate,taskStatus,taskDiff) => {
  let displaytask = '';
  if (taskStatus==="Done") {
    displaytask = `<li class="list-group-item" data-current="${currentId}" >

        <div class="card text-center">
            <div class="card-header">
            ${taskStatus}
            </div>
            <div class="card-body">
              <h5 class="card-title">${taskTitle}</h5>
              <h6 class="card-subtitle mb-2 text-muted"> Assigned to ${taskAssignedTo}</h6>
              <p class="card-text">${taskDescription}  </p>
              <a href="#" class="btn btn-primary delete-button"> Delete</a>
            </div>
            <div class="card-footer text-muted">
            ${taskDueDate}
            </div>
          </div>    
    </li>`
    return displaytask;

  } else {
        displaytask = `<li class="list-group-item" data-current="${currentId}" >

        <div class="card text-center">
            <div class="card-header">
            ${taskStatus}
            </div>
            <div class="card-body">
              <h5 class="card-title">${taskTitle}</h5>
              <h6 class="card-subtitle mb-2 text-muted"> Assigned to ${taskAssignedTo}</h6>
              <p class="card-text">${taskDescription}  </p>
              <a href="#" class="btn btn-primary delete-button"> Delete</a>
              <a href="#" class="btn btn-primary done-button"> Done</a>
            </div>
            <div class="card-footer text-muted">
            ${taskDueDate}
            </div>
          </div>    
    </li>`
    return displaytask;
    }
}


class TaskManager{
    constructor(currentId = 0){
        this.taskId=[currentId]; 
        this.taskList = [];
    }
    addTask(taskTitle,taskDescription,taskAssignedTo,taskDueDate,taskStatus,taskDiff){
        this.taskId++;
        let convertedStatus='';
        if (taskStatus === '1'){
          convertedStatus='To DO';
        } else if (taskStatus === '2'){
          convertedStatus='IN PROGRESS';
        } else if (taskStatus === '3'){
          convertedStatus='REVIEW';
        } else if (taskStatus === '4'){
          convertedStatus='DONE';
        } 
        const sampleTask = {
            Id : this.taskId,
            Title: taskTitle,
            Description : taskDescription,
            AssignedTo : taskAssignedTo,
            DueDate : taskDueDate,
            Status : convertedStatus,
            Difficulty : taskDiff,
  
        }
        this.taskList.push(sampleTask);
    }

    checkButton(){
     let radio = document.getElementsByName('gridRadios');
              let radioValue ="test" ;
              console.log(radio);
            
              for( let i = 0; i < radio.length; i++) {
         
               if(radio[i].checked === true){
                radioValue = radio[i].value;
              }
            }
            return(radioValue);
       }

    render(){
      //  let tasksHtmlLists = [];
       let taskHtmlHard =[];
       let taskHtmlEasy = [];
       let taskHtmlNormal = [];
    
       for(let i=0; i< this.taskList.length; i++)
              {
                
              let currentTask = this.taskList[i];
              let currentdate = new Date(currentTask.DueDate);
              let formattedDate =currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
              // Depending on difficulty, push html code to a new variable
            
              if(currentTask.Difficulty === "hard"){
                taskHtmlHard.push(createTaskHtml(currentTask.Id, currentTask.Title, currentTask.Description, currentTask.AssignedTo, formattedDate, currentTask.Status, currentTask.Difficulty));
              }else if(currentTask.Difficulty === "normal"){
                taskHtmlNormal.push(createTaskHtml(currentTask.Id, currentTask.Title, currentTask.Description, currentTask.AssignedTo, formattedDate, currentTask.Status, currentTask.Difficulty));
              }else if(currentTask.Difficulty === "easy"){
                taskHtmlEasy.push(createTaskHtml(currentTask.Id, currentTask.Title, currentTask.Description, currentTask.AssignedTo, formattedDate, currentTask.Status, currentTask.Difficulty));
              }
              
              //tasksHtmlLists.push(taskHtml);
            }
        let finalHard =  taskHtmlHard.join("\n");
        let finalNormal =  taskHtmlNormal.join("\n");
        let finalEasy =  taskHtmlEasy.join("\n");
       taskHard.innerHTML = finalHard;
       taskEasy.innerHTML = finalEasy;
       taskNormal.innerHTML = finalNormal;
     }

    //creating the getTaskbyID method
    getTaskById(currentId){
      let foundTask = {};
      for(let i=0; i< this.taskList.length; i++){
        if(this.taskList[i].Id === currentId){
          foundTask = this.taskList[i];
          return foundTask;

        }
      }
    }
    //Save method for local storage
    save(){
      let currentId = String(this.taskId);
      let taskJson = JSON.stringify(this.taskList);
      localStorage.setItem("Task",taskJson);
      localStorage.setItem("currentId",currentId);

    }
    // Load method for local storage
    load(){
     if(localStorage.getItem("Task")){
       let taskJson = localStorage.getItem("Task");
       this.taskList = JSON.parse(taskJson);
     }
     if(localStorage.getItem("currentId")){
      let currentId = localStorage.getItem("currentId");
      this.taskId = Number(currentId);
     }
    }
    //Deleting a task
    deleteTask(taskId){
      let newTask = [];
      for(let i=0;i<this.taskList.length;i++){
          let task = this.taskList[i];
          if(task.Id !== taskId){
            newTask.push(task);
          }
      }
      this.taskList = newTask;
    }

  }


  