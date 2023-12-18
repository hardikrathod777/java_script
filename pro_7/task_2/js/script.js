class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

class Father extends Person {
    constructor(name) {
        super(name, 70);
    }
}

class Child extends Person {
    constructor(name) {
        super(name, 25);
    }
}

const father = new Father("baburav");
const child = new Child("raju");

console.log("\nFather");
father.printDetails();

console.log("\nChild");
child.printDetails();
