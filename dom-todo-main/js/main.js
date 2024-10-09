import { printAllTasks } from "./taskFunctions.js";
import Data from "./data.js";
let data = new Data();
import { printUser } from "./printUser.js";
export let filterStatus = "all";
export let searchFor = "";
document.getElementById("createButton").addEventListener("click", () => {
    handleCreateTask();
});
document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        handleCreateTask();
    }
});
document.getElementById("filterByStatus").addEventListener("change", () => {
    filterStatus = document.getElementById("filterByStatus").value;
    printAllTasks();
});
document.getElementById("searchButton").addEventListener("click", () => {
    searchFor = document.getElementById("taskSearchInput").value;
    printAllTasks();
});
printAllTasks();
function handleCreateTask() {
    const response = data.createTask(document.getElementById("newTaskInput").value);
    console.log(response);
    if (!response.success) {
        alert("wrong title");
        return;
    }
    printAllTasks();
}
printUser();
