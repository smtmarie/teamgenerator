// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email, employee) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.employee = employee;
        this.role = "Employee";
    }

    getName() {


        return this.name;
    }

    getId() {

        return this.id;
    }

    getEmail() {

        return this.email;

    }

    getRole() {

        return this.role;

    }

}


module.exports = Employee;