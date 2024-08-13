// intorducing the getter and setter method 


class Student{
    constructor(name,age){
        this._name=name;
        this._age=age;

        Object.defineProperty(this,"pass",{
            get:function (){
                return this._pass.toUpperCase();
            },
            set:function (value){
                return  this._pass=value;
            }
        });
    }
}


const Student2=new Student("Aman Singh ",20);
console.log(Student2.pass);
