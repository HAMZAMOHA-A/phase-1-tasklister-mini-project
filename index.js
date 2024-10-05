document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    form.addEventListener("submit", handleTaskSubmission);
});

function handleTaskSubmission(event) {
    event.preventDefault(); 

    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value;

    const taskItem = createTaskItem(taskDescription, taskPriority);
    document.getElementById("tasks").appendChild(taskItem);

    event.target.reset(); 
}

function createTaskItem(description, priority) {
    const taskItem = document.createElement("div");
    taskItem.textContent = description;
    taskItem.style.color = getPriorityColor(priority);
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton); 
    
    return taskItem;
}

function getPriorityColor(priority) {
    switch (priority) {
        case "high": return "red";
        case "medium": return "orange";
        case "low": return "green";
        default: return "black";
    }
}