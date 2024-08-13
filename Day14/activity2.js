class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;

    } 
}

let result=new Person("Aman Singh",20,"Male");
console.log(result);


class Student extends Person{
    constructor(name,age,gender,stdId){
        super(name,age,gender);
        this.stdId=stdId;
      
    }
}

let res1=new Student("Aman Singh ",20,"Male",82);

console.log(res1);
// second question 
class student{
    constructor(name,age,gender,stdId){
            this.name=name
            this.age=age
                this.gender=gender;
                this.stdId=stdId;
     } 
     greet(){
                    console.log(`Welcome Mr ${this.stdId}`);
                }
    }


let std=new student("Aman Singh",20,"Male",1001);
std.greet();