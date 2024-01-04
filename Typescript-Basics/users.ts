export interface User {
    name ? : string;
    age ? : number;
    id ? : number;
    email ? : string;
    address ? : {
        street ? : string;
        city ? : string;
        state ? : string;
        country ? : string;
        pin ? : string;
    };
    role ? : string;
    salary ? : number;
}


export interface RoomsList {
    roomType ? : string;
    amenities ? : string;
    price ? : number;
    photos ? : string;
    available ? : boolean;
    checkInTime ? : Date;
    checkOutTime ? : Date;
}


export const rooms: RoomsList[] = [
    // {},
    { roomType: 'Single', price: 50, available: true, checkInTime: new Date(), checkOutTime: new Date() },
    { roomType: 'Double', amenities: 'Wi-Fi, TV', price: 75, available: true, checkInTime: new Date(), checkOutTime: new Date() },
    { roomType: 'Suite', amenities: 'Wi-Fi, TV, Jacuzzi', price: 120, available: false },
    { roomType: 'Standard', amenities: 'Wi-Fi', price: 60, available: true, checkInTime: new Date() },
    { roomType: 'Deluxe', amenities: 'Wi-Fi, TV, Mini Bar', price: 90, available: false },
    { roomType: 'Economy', price: 40, available: true, checkOutTime: new Date() },
    { roomType: 'VIP', amenities: 'Wi-Fi, TV, Jacuzzi, Mini Bar', price: 150, available: true, checkInTime: new Date(), checkOutTime: new Date() },
    { roomType: 'Penthouse', amenities: 'Wi-Fi, TV, Jacuzzi, Mini Bar, Private Pool', price: 250, available: true, checkInTime: new Date(), checkOutTime: new Date() },
    { roomType: 'Standard', amenities: 'Wi-Fi', price: 65, available: true, checkInTime: new Date(), checkOutTime: new Date() },
];

export const users: User[] = [{
        name: 'John Doe',
        age: 30,
        id: 1,
        email: 'john.doe@example.com',
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            pin: '12345',
        },
        role: 'Software Engineer',
        salary: 80000,
    },
    {
        name: 'Alice Johnson',
        age: 25,
        id: 2,
        email: 'alice.johnson@example.com',
        address: {
            street: '456 Oak Ave',
            city: 'Sometown',
            state: 'NY',
            country: 'USA',
            pin: '67890',
        },
        role: 'Marketing Specialist',
        salary: 60000,
    },
    {
        name: 'Bob Anderson',
        age: 28,
        id: 3,
        email: 'bob.anderson@example.com',
        address: {
            street: '789 Pine Blvd',
            city: 'Othercity',
            state: 'TX',
            country: 'USA',
            pin: '54321',
        },
        role: 'Data Scientist',
        salary: 90000,
    },
    {
        name: 'Eva White',
        age: 35,
        id: 4,
        email: 'eva.white@example.com',
        address: {
            street: '101 Cedar Ln',
            city: 'Anothercity',
            state: 'FL',
            country: 'USA',
            pin: '98765',
        },
        role: 'UX Designer',
        salary: 75000,
    },
    {
        name: 'Charlie Brown',
        age: 32,
        id: 5,
        email: 'charlie.brown@example.com',
        address: {
            street: '202 Maple St',
            city: 'Smalltown',
            state: 'GA',
            country: 'USA',
            pin: '13579',
        },
        role: 'Financial Analyst',
        salary: 85000,
    },
    {
        name: 'Sophie Turner',
        age: 28,
        id: 6,
        email: 'sophie.turner@example.com',
        address: {
            street: '303 Birch Ave',
            city: 'Townsville',
            state: 'AZ',
            country: 'USA',
            pin: '24680',
        },
        role: 'Product Manager',
        salary: 95000,
    },
    {
        name: 'David Miller',
        age: 27,
        id: 7,
        email: 'david.miller@example.com',
        address: {
            street: '404 Elm Blvd',
            city: 'Metropolis',
            state: 'WA',
            country: 'USA',
            pin: '11223',
        },
        role: 'Accountant',
        salary: 70000,
    },
    {
        name: 'Grace Davis',
        age: 31,
        id: 8,
        email: 'grace.davis@example.com',
        address: {
            street: '505 Walnut Ln',
            city: 'Cityville',
            state: 'CO',
            country: 'USA',
            pin: '33445',
        },
        role: 'HR Manager',
        salary: 78000,
    },
    {
        name: 'Henry Wilson',
        age: 29,
        id: 9,
        email: 'henry.wilson@example.com',
        address: {
            street: '606 Pine St',
            city: 'Villagetown',
            state: 'OR',
            country: 'USA',
            pin: '55667',
        },
        role: 'Software Developer',
        salary: 82000,
    },
    {
        name: 'Olivia Martinez',
        age: 26,
        id: 10,
        email: 'olivia.martinez@example.com',
        address: {
            street: '707 Cedar Ave',
            city: 'Hometown',
            state: 'IL',
            country: 'USA',
            pin: '88990',
        },
        role: 'Graphic Designer',
        salary: 68000,
    },
    {
        name: 'Liam Smith',
        age: 33,
        id: 11,
        email: 'liam.smith@example.com',
        address: {
            street: '808 Oak Blvd',
            city: 'Countryville',
            state: 'NC',
            country: 'USA',
            pin: '11222',
        },
        role: 'IT Manager',
        salary: 88000,
    },
    {
        name: 'Ava Taylor',
        age: 24,
        id: 12,
        email: 'ava.taylor@example.com',
        address: {
            street: '909 Maple Ln',
            city: 'Mountainview',
            state: 'ID',
            country: 'USA',
            pin: '33445',
        },
        role: 'Web Developer',
        salary: 76000,
    },
    {
        name: 'Mason Davis',
        age: 30,
        id: 13,
        email: 'mason.davis@example.com',
        address: {
            street: '1011 Birch St',
            city: 'Ruraltown',
            state: 'KS',
            country: 'USA',
            pin: '55678',
        },
        role: 'Systems Analyst',
        salary: 92000,
    },
    {
        name: 'Amelia Johnson',
        age: 27,
        id: 14,
        email: 'amelia.johnson@example.com',
        address: {
            street: '1212 Pine Ave',
            city: 'Citytown',
            state: 'OK',
            country: 'USA',
            pin: '77889',
        },
        role: 'Marketing Manager',
        salary: 80000,
    },
    {
        name: 'Noah Miller',
        age: 28,
        id: 15,
        email: 'noah.miller@example.com',
        address: {
            street: '1313 Elm Blvd',
            city: 'Suburbia',
            state: 'NE',
            country: 'USA',
            pin: '99001',
        },
        role: 'Business Analyst',
        salary: 85000,
    },
    {
        name: 'Isabella Brown',
        age: 29,
        id: 16,
        email: 'isabella.brown@example.com',
        address: {
            street: '1414 Oak Ave',
            city: 'Uptown',
            state: 'MS',
            country: 'USA',
            pin: '11223',
        },
        role: 'UX/UI Designer',
        salary: 78000,
    },
    {
        name: 'Liam White',
        age: 31,
        id: 17,
        email: 'liam.white@example.com',
        address: {
            street: '1515 Cedar Ln',
            city: 'Distantville',
            state: 'WY',
            country: 'USA',
            pin: '33445',
        },
        role: 'Software Architect',
        salary: 95000,
    },
    {
        name: 'Ava Taylor',
        age: 30,
        id: 18,
        email: 'ava.taylor@example.com',
        address: {
            street: '1616 Maple St',
            city: 'Villagetown',
            state: 'UT',
            country: 'USA',
            pin: '55667',
        },
        role: 'Network Engineer',
        salary: 88000,
    },
    {
        name: 'Oliver Anderson',
        age: 32,
        id: 19,
        email: 'oliver.anderson@example.com',
        address: {
            street: '1717 Pine Blvd',
            city: 'Cityville',
            state: 'IA',
            country: 'USA',
            pin: '77889',
        },
        role: 'Data Analyst',
        salary: 80000,
    },
    {
        name: 'Emma Wilson',
        age: 28,
        id: 20,
        email: 'emma.wilson@example.com',
        address: {
            street: '1818 Elm Blvd',
            city: 'Smalltown',
            state: 'ND',
            country: 'USA',
            pin: '99001',
        },
        role: 'Project Manager',
        salary: 90000,
    },
];