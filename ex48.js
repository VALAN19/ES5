var array =  [1,2,3,4];
var array1 = ['hi','bi'];
console.log(array.concat(array1));

var array =  [1,2,3,4];
var array1 = ['hi','bi'];
console.log(array.join(array1));

var array =  [1,2,3,4];
console.log(array.join(''));

var array =  [1,2,3,4];
console.log(array.reduce(function(total,values) {
    return total + values;
}));