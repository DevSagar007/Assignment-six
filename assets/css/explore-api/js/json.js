const user = { id: 1, name: 'Sagor khan', job: 'Developer' };
console.log(user);

// JavaScript Object Notation


const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    owner: 'Alia',
    address: {
        street: 'Khochuket vhuttter bari',
        city: 'ranbïr',
        country: 'BD'
    },
    product: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopobj =JSON.parse(shopJSON);
console.log(shopobj);
