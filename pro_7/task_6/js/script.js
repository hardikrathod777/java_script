function Emp(name, email, salary) {
    this.name = name;
    this.email = email;
    this.salary = salary;
}

Emp.prototype.addD = function(designation) {
    this.designation = designation;
};

const employe1 = new Emp("hardik rathod", "hardik1432@gmail.com", 500000);
employe1.addD("Software Engineer");

const employe2 = new Emp("harsh vala", "harsh777@gmail.com", 600000);
employe2.addD("Data Analyst");

console.log("Employee 1:");
console.log("Name:", employe1.name);
console.log("Email:", employe1.email);
console.log("Salary:", employe1.salary);
console.log("Designation:", employe1.designation);

console.log("\nEmployee 2:");
console.log("Name:", employe2.name);
console.log("Email:", employe2.email);
console.log("Salary:", employe2.salary);
console.log("Designation:", employe2.designation);
