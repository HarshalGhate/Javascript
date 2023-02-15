class Student{
    constructor(name,std,birthdate){
        this.name=name;
        this.std=std;
        this.birthdate=birthdate
    }

     show(){
        return `Name : ${this.name} \n STD : ${this.std} \n Age : ${2023 -this.birthdate}` ; 
    }
}

const roll1=new Student('sam',10,2002);
const roll2=new Student('Roman',10,2000);

console.log(roll1.show());
console.log(roll2.show());
// console.log(roll1);
