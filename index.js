// variables to pull information
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require('path');

// helps create new HTML page 
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// links to pageLayout.js to fully form the new HTML page there
const render = require('./src/pageLayout.js');

// empty arrays to contain team member information
const myTeam = [];
const idArray = [];

// encapsulating function to start the application
function appStart () {
    // function to collect information on manager role
    function createManager() {
        
        console.log("Let's build your team!")
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is your team manager's name?",
                    name: 'managerName',
                },
                {
                    type: 'input',
                    message: "What is your team manager's id?",
                    name: 'managerId',
                },
                {
                    type: 'input',
                    message: "What is your team manager's email?",
                    name: 'managerEmail',
                },
                {
                    type: 'input',
                    message: "What is your team manager's office number?",
                    name: 'managerOfficeNumber',
                },
            ])
        .then ((answers) => {
            // set answers equal to one variable
            const manager = new Manager (
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
            );

            // push answers into myTeam array and push the id information into the id array
            myTeam.push(manager);
            idArray.push(answers.managerId);

            // call to next function
            createTeam ();
        });
    }

    // function to prompt user to select which team member roles they need
    function createTeam () {
        inquirer
            // questions to pick team member roles
            .prompt([
                {
                    type: "list",
                    choices: [
                        'Engineer',
                        'Intern',
                        "I don't have anymore team members.",
                    ],
                    message: 'Select the type of team member you wish to add.',
                    name: 'chooseTeam',
                },
            ])
            .then((answer) => {
                switch (answer.chooseTeam) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        formTeam();
                }
            });           
    }

    // function to add engineer information
    function addEngineer () {
        inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is your engineer's name?",
                    name: 'engineerName',
                },
                {
                    type: 'input',
                    message: "What is your engineer's id?",
                    name: 'engineerId',
                },
                {
                    type: 'input',
                    message: "What is your engineer's email?",
                    name: 'engineerEmail',
                },
                {
                    type: 'input',
                    message: "What is your engineer's GitHub username?",
                    name: 'engineerGithub',
                },
            ])
            .then ((answers) => {
                const engineer = new Engineer (
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub
                );

                // push engineer information into myTeam array and engineer id into idArray
                myTeam.push(engineer);
                idArray.push(answers.engineerId);

                // call createTeam function to add more team members
                createTeam ();
            })
    }

    // function to add intern information
    function addIntern () {
        inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is your intern's name?",
                    name: 'internName',
                },
                {
                    type: 'input',
                    message: "What is your intern's id?",
                    name: 'internId',
                },
                {
                    type: 'input',
                    message: "What is your intern's email?",
                    name: 'internEmail',
                },
                {
                    type: 'input',
                    message: "What is your intern's school?",
                    name: 'internSchool',
                },
            ])
            .then ((answers) => {
                // set answers equal to one variable
                const intern = new Intern (
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internSchool
                );

                // push intern information into myTeam array and intern id into idArray
                myTeam.push(intern);
                idArray.push(answers.internId);

                createTeam ();
            })
    }

    // function to join employee information together
    function formTeam () {

    }

    createManager ();
}

// call to function
appStart();