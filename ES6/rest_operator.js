
const Add = (...arr) => {

    farr = arr.filter(item => {
        return item % 2 === 0;
    })
    console.log("Frr=", farr);

    mrr = farr.map(item => {
        return item * 2;
    })
    console.log("mrr=", mrr);
    rarr = mrr.reduce((prev, current) => {
        return prev + current
    }, 0)

    console.log(rarr);
}


const add1 = (...arr) => {
    return arr.filter(item => item % 2 === 0).map(item => item * 2).reduce((prev, current) => { return prev + current }, 0)
}


Add(1, 2, 3, 4)
console.log("one liner=", add1(1, 2, 3, 4));