var person = {
    name : 'Valan',
    age : 22,
    greet : function() {
        console.log('Hello');
    }
};
for(var field in person) {
    console.log(field);
}



var person = {
    name : 'Valan',
    age : 22,
    greet : function() {
        console.log('Hello');
    }
};
for(var field in person) {
    console.log(person[field]);
}
