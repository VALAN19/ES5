var person = {
    name: 'Valan',
    age: 22,
};
var person1 = Object.create(null);
person1.name = 'Abisha';
console.log(person1.age);

var person1 = Object.create(person);
person1.name = 'Abisha';
console.log(person1.age);