let person = {
    name:'Valan',
    age:22,
    greet: function() {
        console.log("Hello there!!");
    }
};
let {name,greet} = person;
greet();