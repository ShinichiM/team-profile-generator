const Engineer = require('../lib/Engineer');

describe('Test suite for Engineer Class implementation', () => {
    describe('Ensure the Engineer Constructor successfully processes new objects', () => {
        it('Tests the input and output of the Engineer GitHub property', () => {
            const engineer = new Engineer('Tomato Jones', 1231, 'tj@jonson.com', 'engineTom')

            expect(engineer.name).toStrictEqual(expect.any(String));
            expect(engineer.name).toBe('Tomato Jones');

            expect(engineer.id).toStrictEqual(expect.any(Number));
            expect(engineer.id).toBe('Tomato Jones');

            expect(engineer.email).toStrictEqual(expect.any(String));
            expect(engineer.email).toBe('tj@jonson.com');

            expect(engineer.github).toStrictEqual(expect.any(String));
            expect(engineer.github).toBe('engineTom');
        })
    })


    describe('Ensure the getGitHub() method of the Engineer class returns the engineers github username', () => {
        it('Tests the output of the getGitHub() method', () => {
            const engineer = new Engineer('Tomato jones', 1231, 'tj@jonson.com', 'engineTom');

            expect(engineer.getGitHub()).toStrictEqual(expect.any(String));
            expect(engineer.getGitHub()).toBe('engineTom');
        })
    })


    describe('Ensure the getRole() meethod of the Engineer class returns the Engineer Role', () => {
        it('Tests the output of the getRole() moethod', () => {
            const engineer = new Engineer('Tomato Jones', 1231, 'tj@jonson.com', 'engineTom');
            expect(engineer.getRole()).toStrictEqual(expect.any(String));
            expect(engineer.getRole()).toBe('Engineer');
        })
    })
}) 
