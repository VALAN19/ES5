function fn() {
    console.log(this);
}
var Object = {
    Objectfunction : fn
};
var person = {
    name : 'Valan',
}
Object.Objectfunction.bind(person)();