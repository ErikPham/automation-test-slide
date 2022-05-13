const a = 1;
let b;

b = 2;

console.log('a', a);
console.log('b', b);

b = 10;
console.log('b', b);

if (a === 1) {
    let b = 5;
    console.log('b in if', b);
} else {
    console.log('else');
}

console.log('b', b);
b = 'true';
b = true;
b = 'Trang Beo'
console.log('Day la trang', b);

function getPerson(name, age, location)  {

    return `I'm ${name} and ${age} age`
}

console.log(getPerson('Hiền Béo', 29));
console.log(getPerson('Ha 7', 24));


const members = ['Hien', 'Linh', 'Ha', 10, true];
console.log('Members', members);

members.forEach((member) => {
    console.log('Member', member)
})

for (let i = 0; i < members.length; i++) {
    console.log('Member', members[i]);
}

