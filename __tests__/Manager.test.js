const Manager = require('../lib/Manager.js');

describe('officeNumber', () => {
    it('display office nubmer from constructor', () => {
        const test = new Manager('Cameron', 444, 'email@gmail.com', 8);
        expect(test.officeNumber).toBe(8);
    });
});

describe('getOfficeNumber', () => {
    it('display office number from getOfficeNumber function', () => {
        const test = new Manager('Kenny', 999, 'sample2@email.com', 3);
        expect(test.getOfficeNumber()).toBe(3);
    });
});

describe('getRole', () => {
    it('display role from getRole function', () => {
        testValue = 'Manager';
        const test = new Intern('Travis', 543257, 'oakley@email.com');
        expect(test.getRole()).toBe(testValue);
    });
});