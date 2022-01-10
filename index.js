const inquirer = require('inquirer');
const { TestWatcher } = require('jest');

const menuOptionQuestion = [{
    type:'checkbox',
    name: 'menuOption',
    message:'Please choose an option',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
}];

const menuOption = function() {
    inquirer.prompt(menuOptionQuestion)
}
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please provide the name of your Engineer:'
    }, 
    {
        type:'checkbox',
        name: 'menuOption',
        message:'Please choose an option',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please provide your Engineers Employee ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please provide a contact Email Address for your Engineer:'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Please provide a GitHub username that your engineer is associated with:'
    }
];

const engineerPrompts = function() {
   return inquirer.prompt(engineerQuestions)
}
const internQuestions = [
    
    {
        type: 'input',
        name: 'internName',
        message: 'Please provide the Name of your Intern:'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Please provide your Interns Employee ID:'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please provide your Interns contact Email Address:'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please provide the name of the School that your Intern attends:'
    }
];

const internPrompts = function() {
    inquirer.prompt(internQuestions).then(answers => {return answers});
};

const finishBuild = function() {

};

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter a name for Management:'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Please enter the Employee ID for management:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter an Email address for management:'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Please enter the Office Number for management:'
    },
    {
        type:'checkbox',
        name: 'menuOption',
        message:'Please choose an option',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
    },
    {   
        type: 'input',
        name:'test',
        message:'This will only run once right?',
        when: (answers) => {
            if (answers.menuOption[0] === 'Add an Engineer') {
                return engineerPrompts();
            } else if (answers.menuOption[0] === 'Add an Intern') {
                return internPrompts();
            } else {
                return finishBuild(); 
            } 
        }
    }
];

inquirer
.prompt(managerQuestions)
.then((answers) => {
});