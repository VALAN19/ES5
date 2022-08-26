var btn = document.querySelector('button');
btn.addEventListener('click',listener1);
btn.addEventListener('click',listener2);
setTimeout (function() {
    btn.removeEventListener('click',listener2);
}),2000;
function listener1() {
    console.log('listener1');
}
function listener2() {
    console.log('listener2');
}