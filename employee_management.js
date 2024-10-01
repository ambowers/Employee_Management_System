// Task 1 create an employee class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department
    }
getDetails () { // use getDetails function to return a string with the employees name, position and salary
    return `Employee ${this.name} works as a ${this.position} earning an annual salary of $${this.salary}.`
}
}