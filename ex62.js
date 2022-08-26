function person () {
    this.name = 'Valan';
}
person.prototype.greet = function() {
    console.log('hello');
};
person.prototype.name = 'Abisha';
var person = new person ();
console.log(person.name) ;