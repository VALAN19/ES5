class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, my name is ' +this.name);
    }
}
let Person = new person('Valan');
Person.greet();