class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.printWelcomeMessage();
    }

    printWelcomeMessage() {
        console.log(`Welcome,\ngood morning\n${this.name}\nEmployee ID: ${this.id}`);
    }
}

const employee = new Employee("hardik rathod", 3277);
