todoList = {
    task: [],
    addTask: function(task) {
        this.task.push(task);
        console.log(`Task "${task}` + `" added to the list.`)
    },
    removeTask: function(task) {
        const index = this.task.indexOf(task);
        if (index > -1) {
            this.task.splice(index, 1);
            console.log(`Task "${task} ` + `" removed from the list.`)
        } else {
            console.log(`Task "${task} ` + `" not found in the list.`)
        }
    },
    printTasks: function() {
        console.log("current tasks:");
        this.task.array.forEach(element => {
            console.log(element);
        });
    }
}
