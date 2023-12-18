class Person {
    constructor(name, email, contact, role) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.role = role;
    }

    printDetails() {
        console.log(`Role: ${this.role}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact: ${this.contact}`);
    }
}

class School {
    constructor(name) {
        this.name = name;
    }

    createStudent(name, email, contact) {
        return new Person(name, email, contact, "Student");
    }

    createFaculty(name, email, contact) {
        return new Person(name, email, contact, "Faculty");
    }

    createPeon(name, email, contact) {
        return new Person(name, email, contact, "Peon");
    }
}

const school = new School("School");

const student = school.createStudent("rathod hardik", "harahrathod1432@gmail.com", "9726518381");
const faculty = school.createFaculty("Dr. harsh", "harsh1432@gmail.com", "9876543210");
const peon = school.createPeon("baburav", "baburav2141@gmail.com", "9999988888");

console.log(`\n${school.name} Student Details:`);
student.printDetails();

console.log(`\n${school.name} Faculty Details:`);
faculty.printDetails();

console.log(`\n${school.name} Peon Details:`);
peon.printDetails();
