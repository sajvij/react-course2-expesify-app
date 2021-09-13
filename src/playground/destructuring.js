const person ={

    name:'Sajay',
    age: 38,
    location: {
        city: 'SG',
        temp: 92
    }

}

const {name:FirstName = 'Anon'  ,age} = person;
const {city,temp:temperature } = person.location;
console.log(`${FirstName} is ${age}`);
console.log(`${city} is ${temperature}`);


const book ={

    title:'Ego',
    author: 'Ryan',
    publisher: {
        name: 'Penguin'
    }

}
const {title ,author} = book;
const {name:publisherName ='Self'} = book.publisher;
console.log(`${title} is ${author}`);
console.log(`Publisher Name is ${publisherName}`);


const address=['122 Sjun Street', 'SG', 'Singapore',520271];
const [street , citi , state='India']  = address;

console.log(`You are in ${citi} ${state}`);

const item=['coffee (hot)', '$2.50', '$3.50','$5.50'];
const [coffee , , price]  = item;

console.log(`Medium ${coffee} is ${price}`);