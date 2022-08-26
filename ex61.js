function person () {
};
var person = new person ();
person.name = 'Valan';
console.log(person) ;

   
function person() {
}
person.greet = function() {
    console.log('hello');
}
person.greet();