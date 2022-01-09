const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name='', id, email, school){
        super(name, id, email)
        if (typeof school !== 'string'){throw new Error('Invalid data type. Please recheck your inputs')};
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;