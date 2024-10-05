document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks")})

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Form submitted");})

        const taskDescription = document.getElementById("new-task-description").value;
        const taskPriority = document.getElementById("task-priority").value;

        console.log(`Task: ${taskDescription}, Priority: ${taskPriority}`);

        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;


        console.log(`Task: ${taskDescription}, Priority: ${taskPriority}`);

        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;