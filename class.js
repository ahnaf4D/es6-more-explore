const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 80000 },
    { id: 4, name: 'mac', price: 196000 }
]
// similar
class Product {
    country =  `Bangladesh`;
    constructor(name){
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}
const lenovo = new Product(`le le lenovo`);
console.log(lenovo);
lenovo.speak('oba kita kau');




class Teacher{
    constructor(name , subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }

}
const tapan = new Teacher("Tapon sir" , 'Physics');
console.log(tapan);
const Rashed = new Teacher("Rashed Sir" , 'English');
console.log(Rashed);