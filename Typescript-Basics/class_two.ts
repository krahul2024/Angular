
interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  pin: string;
}

class Employee {
	// initialization as these properties are initialized by tsc 
  constructor(private id: number, protected name: string, protected address: Address) {}

  // We have getters for read-only access
  get employeeId(): number {
    return this.id;
  }

  get employeeName(): string {
    return this.name;
  }

  get employeeAddress(): Address {
    return this.address;
  }

  // to set the values 
  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAddress(address: Address): void {
    this.address = address;
  }
}

const address: Address = {
  street: '123 Main St',
  city: 'Cityville',
  state: 'CA',
  country: 'USA',
  pin: '12345',
};

// craete an employee
const employee = new Employee(1, 'John Doe', address);
// console.log('Employee Address:', employee.employeeAddress);

// modify the employee using setters 
employee.setId(2);
employee.setName('Jane Doe');
employee.setAddress({
  street: '456 Oak St',
  city: 'Townsville',
  state: 'NY',
  country: 'USA',
  pin: '54321',
});

// console.log('Updated Employee ID:', employee.employeeId);
// console.log('Updated Employee Name:', employee.employeeName);
// console.log('Updated Employee Address:', employee.employeeAddress);

console.log(employee)