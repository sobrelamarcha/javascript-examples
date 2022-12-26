class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} & ${this.lastName}`;
    }
    set fullName(name) {
        const parts = name.split(',');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
const haroldKumar = new Person();
haroldKumar.fullName = 'Harold,Kumar';

console.log(haroldKumar);
console.log(haroldKumar.fullName);