const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 80000 },
    { id: 4, name: 'mac', price: 196000 }
]
// map
const names = products.map(product => product.name);
console.log(names);
const price = products.map(product => product.price);
console.log(price);

console.log(products.forEach(p => console.log(p.id)));
// filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);
// find
const affortable = products.find(p => p.price < 50000);
console.log(affortable);
const total = products.reduce((accume , current) => accume.price + current.price , 0);
console.log(total);