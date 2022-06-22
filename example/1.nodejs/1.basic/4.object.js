const person = {
  name: 'Hiền Béo',
  age: 29,
};

person.available = true;

console.log('Person', person);

const newPerson = Object.assign({}, person, { name: 'Trang Béo', available: false })

console.log('New person', newPerson);

const spread = { ...person, available: true };

console.log('Spread', spread);

const { name, available } = person;

console.log(`Name: ${name}, available: ${available}`);

const { age, ...copy } = person;

console.log('Copy', copy);
console.log('Age', age);

