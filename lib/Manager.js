// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const Employee = require("./Employee");

class Manager extends Employee {

    constructor (name, id, email, officeNumber) {

        super(name, email,id);

        this.officeNumber = officeNumber;
    }
};

getName(); {

    return this.name;
}

getId(); {

    return this.id;
}

getEmail(); {

    return this.email;

}

getOfficeNumber(); {

    return this.officeNumber;
}


getRole(); {

    return "Manager";

}

module.exports = Manager
