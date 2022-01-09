const Employee = require('./Employee');

class Intern extends Employee {
    super(name='', id, email)
    constructor(school){
        this.school = school;
    }
    getSchool() {
        // Gets intern school
    }
    getRole() {
        // Returns Intern
    }
}

module.exports = Intern;