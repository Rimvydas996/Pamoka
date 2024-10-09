export default class Data {
    constructor() {
        this.id = "";
        this.tasks = [];
        let tasksStr = localStorage.getItem("tasks") || "";
        const response = JSON.parse(tasksStr);
        if (response && Array.isArray(response)) {
            this.tasks = response;
        }
        console.log("response", response);
    }
    setTasks(newTasks = []) {
        this.tasks = newTasks;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => id !== task.id);
        // this.setTasks();
    }
    changeTaskStatus(id, nextStatus) {
        this.tasks = this.tasks.map((task) => {
            if (task.id === id) {
                return Object.assign(Object.assign({}, task), { status: nextStatus });
            }
            return task;
        });
        // this.setTasks();
    }
    createTask(title) {
        if (!title.trim().length) {
            return {
                success: false,
            };
        }
        console.log("test");
        this.tasks.push({
            id: crypto.randomUUID(),
            title: title,
            status: "created",
        });
        this.setTasks();
        return {
            success: true,
        };
    }
}
