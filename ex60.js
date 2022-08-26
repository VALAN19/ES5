var person = {
    name: 'Valan',
    age: 22,
};
Object.prototype.greet = function() {
    console.log('Hello i am ' + this.name + '!');
};
var Valan = Object.create(person);
var Abisha = Object.create(person);
console.log(Abisha.__proto__ == person);
console.log(Abisha.__proto__ .__proto__ == person);
console.log(Object.getPrototypeOf(Abisha) == person);