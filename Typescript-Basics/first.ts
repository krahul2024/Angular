let name:string = 'This is my name!', isValid:boolean = true 
let arr : string[] = ['this', 'is', 'my', 'name']
let numbers : Array<number> = [4, 8, 31, 909]  // generics in ts 

// console.log(numbers.filter((num) => num > 8)) // printing all the numbers greater than 8 from the array numbers 
// console.log(numbers.find((num) => num === 31)); 
// console.log(numbers.reduce((acc, num) => acc + num)); // printing the sum of array 

// Enum data types, it is better to declare const enums  

const enum Color{
	Red, 
	Green,
	Blue
}; 
let c : Color = Color.Blue; 

// any data type 
let department: any = ['cse', 342]; 

// functions 

// function with return type
function add(a : number, b : number) : number {
	return a + b; 
}

// function with void return type 
function showAdditionResult(a:number, b:number) {
	console.log(a + b); 
}  

const multiply = function(a:number, b:number) : number {
	return a * b; 
}

// Rest parameters 
function sumAll(a:number, b:number, ...arr:number[]) : number {
	let sum : number = a + b + arr.reduce((acc, num) => acc + num); 
	return sum; 
}
let array : number[] = [38, 20, 9, 42, 10, 322]; 
// console.log(sumAll(89, 10, ...array)); 
// console.log(sumAll(43, 32, 43, 90, 320)); 

// Generic functions 
function getValues<Type>(items : Type[]) : Type[] {
	return new Array<Type>().concat(items); 
}

let someArr = getValues<number>(array); 

// classes 
class Employee {
	protected id! : number; 
	protected name! : string; 
	protected address! : string; 

	constructor(id:number, name:string, address:string){
		this.id = id, this.name = name, this.address = address 
	}

	getNameAndAddress():string {
		return `Name : ${this.name}\nAddress : ${this.address}`; 
	}

	static employeeCount() : number {
		return 40; 
	}
}; 

// let john = new Employee(); 
// john.id = 43; 
// john.name = 'John Michaels'; 
// john.address = '4th Avenue, Manhattan, New York'; 
let john = new Employee(32, 'John Michaels', '4th Street, Drake Avenue, Manhattan, New York'); 
// console.log(john); 
// console.log(john.getNameAndAddress()); 

class Manager extends Employee {

	constructor(id : number, name : string, address : string) {
		super(id, name, address); 
	}

	getNameAndAddress(): string {
		return `Name : ${this.name}\nAddress : ${this.address}`; 
	}

}

let man = new Manager(12, 'Randy Daniels', 'Fulton Town, North Dakota, USA'); 
console.log(man.getNameAndAddress()); 