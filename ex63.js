function person() {
    this.name = 'Valan';
    this.greet = function() {
        console.log('Hello i am ' + this.name);
    }
}
var person = new person();
person.name = 'Abisha';
person.greet();