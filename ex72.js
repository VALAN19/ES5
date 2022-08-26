var account = {
    cash: 10000,
    withdraw : function(amount) {
        this.cash -= amount;
        console.log('withdrew='+amount+  ' , available cash='+ this.cash);
    }
};
account.withdraw(1000);