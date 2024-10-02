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
// i hope this works
class Department {   
    constructor (name) {
    this.name = name;
    this.employees = [] // plural bc array
}
addEmployee(employee) {
this.employees.push(employee) // pushes the employee object to the employees array
}
getDepartmentSalary () {
return this.employees.reduce((total, employee) => total + employee.salary, 0);
} // returns total salary of all employees in the department

// Task 4 handle bonuses for managers (i clarified it is ok to do task 4 before 3)

calculateTotalSalaryWithBonus () {
let total =0;
for (const employee of this.employees){
 if (employee instanceof Manager){ // instanceof "to know whether an object was derived from a specific class" - textbk
     total += employee.salary + employee.bonus;
 } else {
     total += employee.salary
 }
}
return total;
}
}
 
// Task 3 create a manager class that inherits from employee

class Manager extends Employee { // use extend to inherit property from parent class
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);//call parent constructor
        this.bonus = bonus; // new property
    }
getDetails(){
    return `Employee ${this.name} works as a ${this.position} earning an annual salary of $${this.salary} with a bonus of $${this.bonus}.`
    };
};



// Task 5 create and manage departments and employees

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

const caiden = new Employee("Caiden", 1000000, "Lead Engineer","Engineering");
const johnathan = new Employee("Johnathan", 100000, "Assistant Engineer", "Engineering");
const bryan = new Manager("Bryan", 500000, "Engineering Manager", "Engineering", 12000);

const lina = new Employee("Lina", 150000, "Marketing Analyst", "Marketing");
const michaela = new Manager("Michaela", 100000, "Public Relations Manager", "Marketing", 10000);

engineering.addEmployee(caiden);
engineering.addEmployee(johnathan);
engineering.addEmployee(bryan);

marketing.addEmployee(lina);
marketing.addEmployee(michaela);

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);

