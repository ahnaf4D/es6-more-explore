class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}
const kodom = new Person('kodom ali' , 21);
// console.log(kodom);
kodom.sleep(); 
const badam  = new Person('Kacha Badam', 23);
badam.sleep();

// Bajal
const lazy = kodom.sleep;
lazy();