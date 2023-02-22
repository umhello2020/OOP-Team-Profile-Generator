const Engineer = require('../lib/Engineer');

describe('github', () => {
    it('display current GitHub username from constructor', () => {
        const test = new Engineer('Olivia', 555, 'random@email.com', 'username');
        expect(test.github).toBe('username');
    });
});

describe('getGithub', () => {
    it('display current Github username from getGithub function', () => {
        const test = new Engineer('Bob', 888, 'myemail@email.com', 'newuser');
        expect(test.getGithub()).toBe('newuser');
    });
});

describe('role', () => {
    it('display current role from getRole function', () => {
        testValue = 'Engineer';
        const test = new Engineer('Chris', 777, 'something@email.com');
        expect(test.getRole()).toBe(testValue);
    });
});