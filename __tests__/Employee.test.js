const Employee = require('../lib/Employee');

describe('name', () => {
    it('display current name in index from constructor', () => {
        const test = new Employee('Olivia');
        expect(test.name).toBe('Olivia');
    });
});

describe('id', () => {
    it('display current id in index from constructor', () => {
        const test = new Employee('Bruce', 55555);
        expect(test.id).toBe(55555);
    });
});

describe('email', () => {
    it('display current email in index from constructor', () => {
        const test = new Employee('Andrew', 33333, 'sample@email.com');
        expect(test.email).toBe('sample@email.com');
    });
});

describe('getName', () => {
    it('retrieve name from getName function', () => {
        const test = new Employee('Kathy');
        expect(test.getName()).toBe('Kathy');
    });
});

describe('getId', () => {
    it('retrieve id from getId function', () => {
        const test = new Employee('Jim', 6666);
        expect(test.getId()).toBe(6666);
    });
});

describe('getEmail', () => {
    it('retrieve email from getEmail function', () => {
        const test = new Employee('Patrick', 1616, 'email@email.com');
        expect(test.getEmail()).toBe('email@email.com');
    });
});

describe('role', () => {
    it('display current role from getRole function', () => {
        const testValue = 'Employee'
        const test = new Employee('Lily', 22222, 'thisismy@email.com');
        expect(test.getRole()).toBe(testValue);
    });
});