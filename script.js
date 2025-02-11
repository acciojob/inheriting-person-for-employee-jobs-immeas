// complete this js code
// 
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

   	greet(){
		console.log(`Hello, name is ${this.name}, I am ${this.age} years old.`);
	}
}

class Employee extends Person{
	constructor(name, age, jobTitle){
		super(name, age);
		this.jobTitle = jobTitle
	}

	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, my job title is ${this.jobTitle}.`);
	}
}
// Do not change code below this line
const person = new Person("Alice",25)

person1.greet();
person1.greet();

const Employee = new Employee("Bob", 30, "Manager");
Employee.jobGreet();
