let person = {
    age:22
};
let handler = {
    get:function(target,name){
        return name in target? target[name]: 'Non existant';
    }
};
var proxy = new Proxy(person,handler);
console.log(proxy.name);