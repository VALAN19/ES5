class person {
    constructor(name) {
        this.name = name;
    }
}
let Person = Reflect.construct(person,['Valan']);
console.log(Person);