let todoList = {
    tasks: [],

    addTask: function(task) {
        this.tasks.push(task);
        console.log(`Task "${task}" added to the list.`);
    },

    removeTask: function(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log(`Task "${task}" removed from the list.`);
        } else {
            console.log(`Task "${task}" not found in the list.`);
        }
    },

    printTasks: function() {
        if (this.tasks.length === 0) {
            console.log("No tasks in the list.");
        } else {
            console.log("Current tasks:");
            this.tasks.forEach((element, i) => {
                console.log(`${i + 1}. ${element}`);
            });
        }
    }
};

todoList.addTask("Kitob o‘qish");
todoList.addTask("Dars qilish");
todoList.addTask("Sport bilan shug‘ullanish");

todoList.printTasks();

todoList.removeTask("Dars qilish");

todoList.printTasks();
