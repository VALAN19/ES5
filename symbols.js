let symbol = Symbol.for('age');
let person = {
    name:'Valan',
    age:22,
};
function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] =25;
}
makeAge(person);
console.log(person[symbol]);
console.log(person['age']);