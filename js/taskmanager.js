const createTaskHtml = (taskTitle,taskDescription,taskAssignedTo,taskDueDate,taskStatus) => {
    const displaytask = `<li class="list-group-item">
    <div class="card text-center">
        <div class="card-header">
          ${taskStatus}
        </div>
        <div class="card-body">
          <h5 class="card-title">${taskTitle}</h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${taskAssignedTo}</h6>
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
    addTask(taskTitle,taskDescription,taskAssignedTo,taskDueDate,taskStatus,taskLevel){
        this.taskId++;
        const sampleTask = {
            Id : this.taskId,
            Title: taskTitle,
            Description : taskDescription,
            AssignedTo : taskAssignedTo,
            DueDate : taskDueDate,
            Status : taskStatus,
            Level : taskLevel
        }
        this.taskList.push(sampleTask);
    }
    render(){
       let tasksHtmlLists = [];
       for(let i=0; i< this.taskList.length; i++){
           let currentTask = this.taskList[i];
           let dueDate = new Date(currentTask.taskDueDate);
           let formattedDate = dueDate.format('dd-mm-yy');
           let taskHtml = createTaskHtml(taskList.taskTitle, taskList.taskDescription, taskList.taskAssignedTo, formattedDate,taskList.taskStatus);
           tasksHtmlLists.push(taskHtml);

       }
       let taskHtml1 =  tasksHtmlLists.join("\n");
       sampleCard.innerHTML = taskHtml1;
       
}
