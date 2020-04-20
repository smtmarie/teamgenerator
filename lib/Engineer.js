// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const inquirer = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, githubName) {

        super(name, id, email)
        this.github = githubName;
        this.role = "Engineer";

    }

    getGithub() {


        return this.github;
    }

    getRole() {

        return this.role;

    }


}

module.exports = Engineer;

