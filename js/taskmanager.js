const sampleCard = document.querySelector("#sampleCard");


const createTaskHtml = (taskTitle,taskDescription,taskAssignedTo,taskDueDate,taskStatus) => {
    const displaytask = `<li class="list-group-item">
    <div class="card text-center">
        <div class="card-header">
        ${taskStatus}
        </div>
        <div class="card-body">
          <h5 class="card-title">${taskTitle}</h5>
          <h6 class="card-subtitle mb-2 text-muted"> Assigned to ${taskAssignedTo}</h6>
          <p class="card-text">${taskDescription}  </p>
          <a href="#" class="btn btn-primary"> Modify</a>
        </div>
        <div class="card-footer text-muted">
        ${taskDueDate}
        </div>
      </div>    
</li>`
    return displaytask;

}


class TaskManager{
    constructor(currentId = 0){
        this.taskId=[currentId]; 
        this.taskList = [];
    }
    addTask(taskTitle,taskDescription,taskAssignedTo,taskDueDate,taskStatus){
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
  
        }
        this.taskList.push(sampleTask);
    }
    render(){
       let tasksHtmlLists = [];
    
       for(let i=0; i< this.taskList.length; i++){
           let currentTask = this.taskList[i];
           let currentdate = new Date(currentTask.DueDate);
           let formattedDate =currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
           let taskHtml = createTaskHtml(currentTask.Title, currentTask.Description, currentTask.AssignedTo, formattedDate, currentTask.Status);
           tasksHtmlLists.push(taskHtml);

       }
       let taskHtml1 =  tasksHtmlLists.join("\n");
       sampleCard.innerHTML = taskHtml1;
    }
  }
  