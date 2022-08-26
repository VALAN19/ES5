var array = [1,2,3,4];
array.unshift('hi');
    console.log(array.indexOf('hi'));

var array = [1,2,3,4];
 array.unshift('hi');
 array[array.indexOf('hi')] = "bi"
    console.log(array);

var array =  [1,2,3,4];
var array1 = array.splice(1,2);
console.log(array1);

var array =  [1,2,3,4];
var array1 = array.slice(1,2);
console.log(array1);