class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, my name is ' +this.name+ ' and i am '+this.age);
    }
}
class Valan extends person {
constructor(age){
    super('Valan');
    this.age = age;
}
}
let valan = new Valan(22);
valan.greet();