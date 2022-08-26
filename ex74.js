var account = {
    cash: 10000,
    withdraw : function(amount) {
        this.cash -= amount;
        console.log('withdrew='+amount);
    }
};
Object.defineProperty(account,'name', {
    value : 'ID000-1', 
    writable: true,
});
console.log(account.name);
account.name ='ID000-3';
console.log(account.name);