let promise = new Promise(function(resolve,Reject) {
    setTimeout(function(){
        resolve('Done!');
    },1500);
});
promise.then(function(value) {
    console.log(value);
});
