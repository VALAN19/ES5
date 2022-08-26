var age = 20;
var person = {
    name: "Valan",
    age: 22,
    details: {
        hobbies:['cooking','singing'],
        location: 'hyderabad',
    },
greet: function() {
    console.log('hiiii!!');
}
};
person.greet();
person.name = 'Abisha';
console.log(person);
console.log('Hello i am ' + person.name);
console.log('i am ' + age + ' years old');
