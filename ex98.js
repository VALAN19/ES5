var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');
inner.addEventListener('click',innerListener);
outer.addEventListener('click',outerListener);
function innerListener(event) {
    console.log(event.bubbles);
event.stopPropagation();
console.log('Clicked inner!');
}
function outerListener(event) {
    console.log('Clicked outer!');
    }
    try{
        test ();
    }catch (error) {
 }finally{
    console.log('Finally');
 }
    