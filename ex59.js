var person = {
    name: 'Valan',
    age: 22,
};
Object.prototype.greet = function() {
    console.log('Hello i am ' + this.name + '!');
};
var Valan = Object.create(person);
var Abisha = Object.create(person);
Abisha.name = 'Abisha';
Valan.greet();
Abisha.greet();