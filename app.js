const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions

// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```





const fullTeam = [];


function managerDetails() {

    inquirer.prompt([

        {

            type: "input",
            name: "name",
            message: "Please enter your name.",

        },

        {
            type: "input",
            name: "id",
            message: "Please enter your ID number.",

        },

        {

            type: "input",
            name: "email",
            message: "Please enter your email address.",

        },

        {

            type: "input",
            name: "officeNumber",
            message: "Please enter your office number.",

        }

    ]).then(function(answers) {

        const manager = newManager( answers.name, answers.id, answers.email, answers.officeNumber);
        fullTeam.push(manager);
        createTeam();

    })
}

function createTeam() {

    inquirer.prompt([

        {

            type: "input",
            name: "role",
            message: "Please enter your role.",
            option: ["Engineer", "Intern", "Manager"]

        }

    ]).then(function (answer) {

        switch (answer.option) {

            case "Engineer":
                engineerDetails()

                break;

            case "Intern":
                internDetails()

                break;

            default: completeTeam()

        }
    })
}

function engineerDetails() {

    inquirer.prompt([

        {
            type: "input",
            name: "Please enter your name.",
            message: "Please enter office number.",

        },

        {

            type: "input",
            name: "id",
            message: "Please enter your ID number."

        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",

        },

        {
            type: "input",
            name: "github",
            message: "Please enter your Github username.",

        },


    ]).then(function (answers) {

        const engineer = newEngineer(answers.type, answers.name, answers.id, answers.email, answers.github);
        fullTeam.push(engineer)
        createTeam()

    })
}

function internDetails() {

    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Please enter your name.",

        },

        {
            type: "input",
            name: "id",
            message: "Please enter your ID number.",

        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",

        },

        {
            type: "input",
            name: "school",
            message: "Please enter the name of your school.",

        },

    ]).then(function (answers) {

        const intern = newIntern(answers.type, answers.name, answers.id, answers.email, answers.school)
        fullTeam.push(intern)
        createTeam()

    })
}

function completeTeam() {

    if (!fs.existsSync(OUTPUT_DIR)) {

        fs.mkdirSync(OUTPUT_DIR)
    }

    fs.writeFileSync(outputPath, render(fullTeam), "utf-8")
}

managerDetails();






