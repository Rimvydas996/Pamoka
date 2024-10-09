interface Task {
  id: string;
  title: string;
  status: string;
}

type ResponseMessege = {
  success: boolean;
};
export default class Data {
  id: string = "";

  tasks: Task[] = [];
  constructor() {
    let tasksStr = localStorage.getItem("tasks") || "";
    const response = JSON.parse(tasksStr);
    if (response && Array.isArray(response)) {
      this.tasks = response;
    }

    console.log("response", response);
  }
  setTasks(newTasks: Task[] = []): void {
    this.tasks = newTasks;
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => id !== task.id);
    // this.setTasks();
  }
  changeTaskStatus(id: string, nextStatus: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
    // this.setTasks();
  }
  createTask(title: string): ResponseMessege {
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
