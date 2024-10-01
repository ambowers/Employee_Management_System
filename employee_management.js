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
};

// Task 2 create a department class

class Department {
    constructor (name) {
        this.name = name;
        this.employees = [] // plural bc array
    }
addEmployee(employee) {
    this.employees.push.apply(employee) // pushes the employee object to the employees array
}
getDepartmentSalary () {
    return this.employees.reduce((total, employee) => total + employee.salary, 0);
    } // returns total salary of all employees in the department
};

// Task 3 create a manager class that inherits from employee

class Manager extends Employee { // use extend to inherit property from parent class
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);//call parent constructor
        this.bonus = bonus; // new property
    }
getDetails(){
    return `Employee ${this.name} works as a ${this.position} earning an annual salary of $${this.salary} with a bonus of $${this.bonus}.`
    }
}