class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static check(name) {
        return `Welcome Mr. ${this.name}`;
    }
}

let result = new Person("Aman", 20);
console.log(Person.check.call(result)); 
console.log(result); 