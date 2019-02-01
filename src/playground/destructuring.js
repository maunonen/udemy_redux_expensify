console.log('destructuring'); 
const person = {
    name: 'Andrew', 
    age : 26 , 
    location : {
        city :  'Philadelfia', 
        temp : 92
    }
}

const {name : firstName = 'Anonymous', age} = person; 
const {city, temp : temperature} = person.location; 

console.log(firstName); 
console.log(temperature); 

console.log(`${person.name} is ${age}`); 

const book  = {
    title : 'Ego is Enemy', 
    author : 'Ryan Holiday', 
    publisher : {
        name : 'Penguin'
    }
}

const {name : publisherName = 'Pengiun'} = book.publisher; 

console.log(napublisherNameme); 

const address = ['1299 S Jniper Street', 'Philadelphia', '19147' ,  ]; 
const [street, city, state = 'NY', zip ] = address; 
const [, , , zip ] = address; 

console.log(`You are in st. ${street} city: ${city} st.  ${state} zip: ${zip}`); 

const item = ['Coffee (hot)', '2.00', '2.50', '2.75']; 

const [productName,, priceMedium ] = item; 
console.log(`A medium ${productName} costs ${priceMedium} `); 