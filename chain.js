// data access
const data = [{id : 1 , name : 'Abul' , address : 'kochu khet'}];
// console.log(data[0].address);

const products = {
    count : 5000,
    data : [
        {id : 1, name : 'lenovo laptop' , price : 65000},
        {id : 2, name : 'Mac Book Pro' , price : 165000},
        
    ]
} 
// console.log(products.data[1].price);
const user = {
    name : 5001,
    name : 'Shoriful Raj',
    address : {
        street : {
            first : '54/1 uttor side',
            second : 'poribag er goli',
            third : 'no dorai',
        },
        city : 'Dhaka',

    }
}
const user2 = {
    id : 5002,
    name : 'pori bibir majar',
    address : {
        city : 'chittagong',
        country : 'Bangladesh',
    }
}
console.log(user.address.street?.second); 
console.log(user2.address.street?.second);