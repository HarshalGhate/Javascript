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

newarr=arr.filter(item=>{
    return item.experience>10;
})

console.log(newarr);