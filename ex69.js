function fn(message) {
    console.log(message + this);
}
var Object = {
    Objectfunction : fn
};
var person = {
    name : 'Valan',
}
Object.Objectfunction.bind(person,'Hello')();