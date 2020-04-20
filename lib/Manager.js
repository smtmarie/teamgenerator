// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, email, id);

        this.office = officeNumber;

        this.role = "Manager";
    }


    getOfficeNumber() {


        return this.office;
    }


    getRole() {

        return this.role;

    }


}

module.exports = Manager;
