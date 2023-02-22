const Intern = require('../lib/Intern.js');

describe('school', () => {
    it('display current school from constructor', () => {
        const test = new Intern('Haley', 999, 'yahoo@yahoo.com', 'School');
        expect(test.school).toBe('School');
    });
});

describe('getSchool', () => {
    it('display current school from getSchool function', () => {
        const test = new Intern('Miley', 1010, 'readthis@email.com', 'My School');
        expect(test.getSchool()).toBe('My School');
    });
});

describe('getRole', () => {
    it('display role from getRole function', () => {
        testValue = 'Intern';
        const test = new Intern('Hannah', 789, 'montana@email.com');
        expect(test.getRole()).toBe(testValue);
    });
});