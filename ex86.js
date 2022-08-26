var Interval = setInterval (function(){
    console.log("Ping!");
},500);
setTimeout(function(){
   clearInterval(Interval);
},2500);
