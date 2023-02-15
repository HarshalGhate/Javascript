const arr = [1, 2, 3, 4, 10]

newarr = arr.reduce((pre, current) => {
    // console.log("current=", current);
    // console.log("pre=", pre);
    return pre + current;
}, 0)

console.log(newarr);



let arr1 = [
    {
        name: 'Roman',
        experience: 10,
        from: "USA"
    },
    {
        name: 'Dean',
        experience: 9,
        from: "MSC"
    },
    {
        name: 'Seth',
        experience: 11,
        from: "MKP"
    }
];

result = arr1.reduce((pre, current) => {
    return pre + current.experience;
}, 0)

console.log(`Total Experience = ${result}`);
