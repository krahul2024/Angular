// interfaces can be used as types(data), function definitions 
// if we want to retain the classes then we should use classes instead of interfaces, because after compilation interfaces are gone. 
import { users as Users } from './users'; // for users' information


export interface User {
    	name? : string,
        age? : number, // we can make a property optional using the below approach, just place a ? 
        id? : number,
        email? : string,
};


let user: User = {
    name: 'John Kennedy',
    id: 32,
    email: 'john.kennedy@hmail.com'
};

// console.log(user); 

// we can use the interface inheritance, we can have method(function) definitions in interfaces also
interface Employee extends User {
    role: string,
    salary: number,
};

let employee: Employee = {
    ...user,
    role: 'Software Engineer II',
    salary: 400000,
};

export interface Login {
    Login(): User;
};

const users: User[] = [];

for (let i = 0; i < 5; ++i) { // getting the list of users from the user data file 
	const {name , email, age, id } = Users[i];  
    const tempUser: User = { name, age, id, email };
    users.push(tempUser); 
}

console.log(users.slice(0,3).map(x => x.name))

