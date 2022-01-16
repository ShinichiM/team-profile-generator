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
    // {
    //     type:'checkbox',
    //     name: 'menuOption',
    //     message:'Please choose an option',
    //     choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
    // },

];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please provide the name of your Engineer:'
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

const menuOptionQuestions = [{
    type:'checkbox',
    name: 'menuOption',
    message:'Please choose an option',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
}];

module.exports = { managerQuestions, engineerQuestions, internQuestions, menuOptionQuestions };