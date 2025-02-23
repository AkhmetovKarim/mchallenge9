//Task 1 - Creating an Employee Class

class Employee { //create a class with properties
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = this.department;
        this.salary = salary;
    }
    getDetails() { //add a method
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    calculateAnnualSalary() { //add a method
        return this.salary * 12;
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); //test cases
console.log(emp1.calculateAnnualSalary());
