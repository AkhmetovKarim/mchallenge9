//Task 1 - Creating an Employee Class

class Employee { //create a class with properties
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
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
//

//Task 2 - Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10;
    }
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

//Task 3 - Creating a Company Class
class Company { //create a class
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) { //add method
        this.employees.push(employee);
    }
    listEmployees() { //add method
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
}
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
