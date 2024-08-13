class person{
name="Aman singh"
age=20
 greet() {
    this.name;
   return ` welcome Mr ${this.name} `  
 }
}
let p=new person();
p.greet();
console.log(p.greet());


class person1 {
  name="aman singh"
  age =20
  update(){
    this.age=19;
    console.log("the updated age is ",this.age);
  }
}


let newp=new person1()
newp.update();