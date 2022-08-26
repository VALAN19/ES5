let promise = new Promise(function(resolve,Reject) {
    setTimeout(function(){
        Reject('failed!');
    },1500);
});
promise.then(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
});
