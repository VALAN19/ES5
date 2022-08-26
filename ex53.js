var person = {
    name: "Valan",
    age: 22,
    details: {
        hobbies:['cooking','singing'],
        location: 'hyderabad',
    },
greet: function() {
    console.log('i am ' + this.age + ' years old');
}
};
person.greet();