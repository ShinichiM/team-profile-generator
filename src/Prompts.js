const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const path = require('path');
const  writeToFile = require('../src/htmlFormatter');

const { managerQuestions, engineerQuestions, internQuestions, menuOptionQuestions } = require('./Questions');
class Prompts {
    constructor() {
        this.data =  {
            manager: [],
            engineers: [],
            interns: []
        };
    }

    initiateEngineerQuestions() {
        return inquirer.prompt(engineerQuestions).then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
            engineerId = parseInt(engineerId);
            this.data.engineers.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
            console.log(this.data)
        }).then(() => {
            this.initiateMenuOptions();
        })
    };

    intiateInternQuestions() {
        return inquirer.prompt(internQuestions).then(({ internName, internId, internEmail, internSchool }) => {
            internId = parseInt(internId);
            this.data.interns.push(new Intern(internName, internId, internEmail, internSchool));
        }).then(() => {
            this.initiateMenuOptions();
        })
    };
    
    initiateFinishBuild() {
        writeToFile(
           path.join(__dirname, '../dist/team.html')
            , this.data);
    };

    initiateMenuOptions() {
        return (inquirer.prompt(menuOptionQuestions).then((answer) => {
            if (answer.menuOption[0] === 'Add an Engineer') {
                if (!this.data.menuOption) {
                    this.data['menuOption'] = answer.menuOption[0];
                } else {
                    this.data.menuOption = answer.menuOption[0];
                }
                this.initiateEngineerQuestions();
            } else if (answer.menuOption[0] === 'Add an Intern') {
                if (!this.data.menuOption) {
                    this.data['menuOption'] = answer.menuOption[0];
                } else {
                    this.data.menuOption = answer.menuOption[0];
                }
                this.intiateInternQuestions(); 
            } else {
                if (!this.data.menuOption) {
                    this.data['menuOption'] = answer.menuOption[0];
                } else {
                    this.data.menuOption = answer.menuOption[0];
                    return this.initiateFinishBuild();
                }
            } 
        })
    )};

    initiateQuestions() {
        inquirer.prompt(managerQuestions).then(({ managerName, managerID, managerEmail, managerOffice }) => {
            managerID = parseInt(managerID);
            managerOffice = parseInt(managerOffice);
            this.data.manager.push(new Manager(managerName, managerID, managerEmail, managerOffice)); 
            this.initiateMenuOptions();
        });
    };

// .then(() => {
//             writeToFile('../dist/team.html', this.data);
//         })
};
module.exports = Prompts;