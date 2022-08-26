class person {
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }
    greet(){
        console.log('Hello, I am '+this.name);
    }
}
let Person = Reflect.construct(person,['Valan',22]);
Reflect.apply(Person.greet,{name:'Abisha'},[]);