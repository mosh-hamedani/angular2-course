
export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;    
}

export class User {
    name: string;
    phone: string;
    email: string; 
    address = new Address();
}