// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const inquirer = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, githubName) {

        super(name, email, id);
        this.github = githubName;
        this.role = "Engineer";

    }


    getRole() {

        return this.role;

    }


    getGithub() {

        
        return this.github;
    }



}

module.exports = Engineer;

