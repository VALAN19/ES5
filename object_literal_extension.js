let namme = 'Valan';
let age = 22;
let person = {
    name : "Abisha",
    age,
    greet() {
        console.log(this.name +',' +this.age);
    }
};
person.greet();