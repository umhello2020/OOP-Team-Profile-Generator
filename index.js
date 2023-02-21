// variables to pull information
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require('path');

//
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

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
                    message: "What is your team manager's id?"
                    name: 'manager'
                }
            ]);
        .then ((answers) => {
            const manager = new Manager (
                answers.managerName)
        });
    }

    // function to prompt user to select which team member roles they need
    function createTeam () {
        inquirer
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

    }

    // function to add intern information
    function addIntern () {

    }

    // function to join employee information together
    function formTeam () {

    }
}

// call to function
appStart();