function sum(a:number, b: number):number {
    return a + b;
}

console.log('Demo', sum(3, 5));

interface Customer {
    name: string;
    email: string;
    zip: number;
}

const customers:Array<Customer> = [];

customers.push({ email: "hienbeo@gmail.com", name: "Hiền Béo", zip: 1000 })

customers.forEach((customer) => {
    console.log(`Customer: ${customer.name}, email: ${customer.email}`);
});

type Card = {
    number: number;
    name?: string;
    ccv: number;
    expire: string;
}

interface ShopBaseCustomer extends Customer {
    address: string;
    gender: "M" | "F";
    card: Card;
}

const customer:ShopBaseCustomer = {
    name: "Hien Beo",
    email: "hienbeo@gmail.com",
    gender: "M",
    address: "Trung Phung",
    zip: 1000,
    card: {
        ccv: 710,
        number: 424242424242,
        expire: "07/25",
    },
}

console.log('Customer', customer)
