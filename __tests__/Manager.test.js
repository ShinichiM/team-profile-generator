const Manager = require('../lib/Manager');


describe('Test suite for manager Class implementation', () => {
    describe('Ensure manager contructor successfully processes new object instantances', () => {
        it('Tests the input and output of the manager officeNumber property', () => {
            const manager = new Manager('Tomato Jones', 12, 'tj@test.com', 1092);


            expect(manager.name).toStrictEqual(expect.any(String));
            expect(manager.name).toBe('Tomato Jones');
            
            expect(manager.id).toStrictEqual(expect.any(Number));
            expect(manager.id).toBe(12);

            expect(manager.email).toStrictEqual(expect.any(String));
            expect(manager.email).toBe('tj@test.com');

            expect(manager.officeNumber).toStrictEqual(expect.any(Number));
            expect(manager.officeNumber).toBe(1092);
        })
    })

    describe('Ensure getRole() method of the manager class returns successfully', () => {
        it('Tests valid inputs and outputs of the getRole() method', () => {
            const manager = new Manager('Tomato Jones', 12, 'tj@test.com', 1092); 

            expect(manager.getRole()).toStrictEqual(expect.any(String));
            expect(manager.getRole()).toBe('Manager');
        })
    })
}) 