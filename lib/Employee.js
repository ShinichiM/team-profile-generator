class Employee {
    constructor(name='', id, email) {
        if (!id || !email) {
            throw new Error('Invalid parameters. Please recheck your inputs.');
        }
        if (typeof name !== 'string' || typeof id !== 'number' || typeof email !== 'string') {
            throw new Error('Data Types not supported. Please recheck your inputs.');
        }
        this.name = name;
        this.id = id;
        this.email = email;
    } 
    getName() {
        return this.name;
    }
    getId() { 
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;