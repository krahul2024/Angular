// import * as Interface from './interface' // we can also use this syntax to import all the exports from this file and then use them like objects 

import { Login, User } from './interface'; // to use the Login function from interface.ts file, where we have defined the Login interface 

// this is defined to use later in our class 
interface Address {
    street ? : string; // ? means this property is optional, and if not mentioned there won't be any error
    city ? : string;
    state ? : string;
    country ? : string;
    pin ? : string;
}; 

class Employee implements Login {
    private id: number;
    protected name: string;
    protected address: Address;

    constructor(id: number, name: string, address: Address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    Login(): User {
        return {
            name: 'John Kennedy',
            id: 32,
            email: 'john.kennedy@hmail.com'
        };
    }; 
}; 

let john = new Employee(32, 'John Michaels', {});
console.log({john}); 

console.log('This is from the login function :\n',john.Login()); 

class Manager extends Employee {

    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameAndAddress(): string {
        return `Name : ${this.name}\nAddress : ${this.address}`;
    }

}
