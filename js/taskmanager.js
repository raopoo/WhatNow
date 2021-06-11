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
}
