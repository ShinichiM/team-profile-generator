const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name='', id, email, github) {
        super(name, id, email);
        
        if (typeof github !== 'string') {throw new Error("Data type not supported. Please recheck your input")};
        this.github = github;
    }
    
    getGitHub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

// const en = new Engineer('tomato tom',121, 'tt@gmail.com', 'github');
// console.log(en)
module.exports = Engineer;