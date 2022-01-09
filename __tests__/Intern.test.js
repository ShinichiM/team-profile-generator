const Intern = require('../lib/Intern');

describe('Test suite for Intern Class implementation', () => {
    describe('Ensure Intern contructor successfully processes new object instantances', () => {
        it('Tests the input and output of the Intern school property', () => {
            const intern = new Intern('Tomato Jones', 12, 'tj@test.com', 'Ohio State');


            expect(intern.name).toStrictEqual(expect.any(String));
            expect(intern.name).toBe('Tomato Jones');
            
            expect(intern.id).toStrictEqual(expect.any(Number));
            expect(intern.id).toBe(12);

            expect(intern.email).toStrictEqual(expect.any(String));
            expect(intern.email).toBe('tj@test.com');

            expect(intern.school).toStrictEqual(expect.any(String));
            expect(intern.school).toBe('Ohio State');
        })
    })


    describe('Ensure getSchool() method of the Intern class returns successfully', () => {
        it('Tests valid inputs and outputs of the getSchool() method', () => {
            const intern = new Intern('Tomato Jones', 12, 'tj@test.com', 'Ohio State');

            expect(intern.getSchool()).toStrictEqual(expect.any(String));
            expect(intern.getSchool()).toBe('Ohio State');
        })
    })


    describe('Ensure getRole() method of the Intern class returns successfully', () => {
        it('Tests valid inputs and outputs of the getRole() method', () => {
            const intern = new Intern('Tomato Jones', 12, 'tj@test.com', 'Ohio State'); 

            expect(intern.getRole()).toStrictEqual(expect.any(String));
            expect(intern.getRole()).toBe('Intern');
        })
    })
}) 
