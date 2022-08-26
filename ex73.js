var account = {
    cash: 10000,
    withdraw : function(amount) {
        this.cash -= amount;
        console.log('withdrew='+amount);
    }
};
Object.defineProperty(account,'deposit', {
    value : function(amount) {
    this.cash += amount;
    console.log('available cash='+ this.cash);
    }
});
account.withdraw(1000);
account.deposit(5000);