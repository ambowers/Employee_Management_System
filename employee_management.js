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

