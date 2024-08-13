class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    static displayDetails(){
        console.log("Student Details:");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Grade: " + this.grade);
    }
}

let student1 = new Student("John Doe", 18, "A");
Student.displayDetails.call(student1);