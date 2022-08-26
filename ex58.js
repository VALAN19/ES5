var person = {
    name: 'Valan',
    age: 22,
};
Object.prototype.greet = function() {
    console.log('Hello!!');
};
var Valan = Object.create(person);
console.log(Valan.name);
Valan.greet();