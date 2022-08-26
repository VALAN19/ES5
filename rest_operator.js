function sum(...toAdd) {
    console.log(toAdd);
    let result = 0;
    for (let i=0;i<toAdd.length;i++) {
        result += toAdd[i];
    }
    return result;

}
console.log(sum(100,10,20));