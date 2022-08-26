var account = {
    cash: 10000,
    _name : 'default',
    withdraw : function(amount) {
        this.cash -= amount;
        console.log('withdrew='+amount);
    }
};
Object.defineProperty(account,'name', {
    get: function() {
        return this._name;
    },
    set: function(name) {
          this._name=name;
    }
   
});
console.log(account.name);
account.name ='ID000-3';
console.log(account.name);