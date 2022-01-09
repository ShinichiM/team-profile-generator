const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name='', id, email, officeNumber) {
        super(name, id, email);
        if (typeof officeNumber !== 'number'){throw new Error('Data type not supported. Please recheck your inputs')};
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;