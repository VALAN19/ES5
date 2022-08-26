function generator (input) {
    var num = input;
    return function() {
        return num * 2;
    };
}
var calc = generator(500);
console.log(calc());