const Employee = require('../lib/Employee');

describe('Test suite for Employee Class Implementation', () => {
    describe('Ensure Employee Name, ID, Email is returned successfully', () => {
        it('Tests for valid inputs and outputs for Employee constructor', () => {
            
            const name = 'Lester the Tester';
            const id = 123213;
            const email = 'testEmail@tester.com';
            const employee = new Employee(name, id, email);

            expect(employee.name).toStrictEqual(expect.any(String));
            expect(employee.name).toBe('Lester the Tester');

            expect(employee.id).toStrictEqual(expect.any(Number));
            expect(employee.id).toBe(123213);

            expect(employee.email).toStrictEqual(expect.any(String));
            expect(employee.email).toBe('testEmail@tester.com');
        })
    })


    describe('Ensure the Employee getName() method returns the employee name', () => {
        it('Tests the getName() method of the Employee class', () => {
            const employee = new Employee('Judith', 1181, 'test@testing.com');
            expect(employee.getName()).toEqual('Judith');
        })
    })


    describe('Ensure the Employee getId() method returns the employee id', () => {
        it('Tests the getId() method of the Employee class', () => {
            const employee = new Employee('Jaundice', 138, 'test@testing.com'); 
            expect(employee.getId()).toEqual(138);
        })
    })


    describe('Ensure the Employee getEmail() method returns the employee email', () => {
        it('Tests the getEmail() method of the Employee class', () => {
            const employee = new Employee('Jaundice', 138, 'test@testing.com'); 
            expect(employee.getEmail()).toEqual('test@testing.com');
        })
    })


    describe('Ensure the Employee getRole() method returns the string "Employee"', () => {
        it('Tests the getRole() method of the Employee class', () => {
            const employee = new Employee('Jaundice', 138, 'test@testing.com'); 
            expect(employee.getRole()).toEqual('Employee');
        })
    })
}) 
