class Employee {
    constructor(name='', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        // Gets Employee name
        return this.name;
    }
    getId() {
        // Gets employee ID
        return this.id;
    }
    getEmail() {
        // Gets Employee Email
        return this.email;
    }
    getRole() {
        // Gets Employee Role
        // Returns Employee 
    }
}

module.exports = Employee;