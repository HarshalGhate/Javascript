
let arr = [
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


let newarr = arr.map((data) => {
    return { name: data.name, experience: data.experience }
})

console.log(newarr);