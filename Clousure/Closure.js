function CreateCounter(){
    let count=0
    function increment(){
        count++;
        return count;
    }
    return increment;
}

const counter= CreateCounter()
counter();
counter();
console.log(counter())