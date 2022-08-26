var person = {
    name: 'Valan',
    age: 22,
};
console.log(person.__proto__);


var person = {
    name: 'Valan',
    age: 22,
};
Object.prototype.greet = function() {
    console.log('Hello!!');
};
person.greet();