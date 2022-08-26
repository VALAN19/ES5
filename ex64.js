function person() {
    this.name = 'Valan';
    this.greet = function() {
        console.log('Hello i am ' + this.name);
    }
};
var person1 = new person();
person1.name = 'Abisha';
var person = new person();
person.greet();
person1.greet();