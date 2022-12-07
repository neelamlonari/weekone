/*Think of three properties all people share, set them with the constructor

Think of three methods all people share
Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods*/
class Person {
    constructor( name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
        
    }
    static validateemail(email){
         return email.includes('@');//static method
    }
    greet(){
        return  `Hi, this is  ${this.name} I am ${ this.age} years old and I am ${this.gender}`;
    }
    setjob(job){
        this.job = job;
        return `${this.job}`;//1st method
    }
    getemail(email ){
        this.email = email;
        return `${this.email}`;//2nd method
    }
    getaddress(address){
           this.address = address;
           return `${this.address}`;//3rd method
    }
}
console.log('---------------Calling methods on super class------------')
const elien = new Person( 'RoyCooper' ,'45','Male');
console.log( elien.greet());
console.log( elien.setjob('Accountant'));
console.log( elien.getaddress('2023 E shadow Road,New Jersey'));
console.log( elien.setjob('Software Engineer'));
console.log('Is Email Valid : '+Person.validateemail('deepa23gmail.com'));

class PostalWorker extends Person{
    constructor( name,age,postofficename){
        super(name,age);
        this.postofficename=postofficename;
    }
    greeting(){
        return  `Hi, This is  ${this.name}I am ${ this.age} years old and I am ${this.postofficename}`;
    }
   setvehicle(vehicle){
        this.vehicle=vehicle;
        return `${this.vehicle}`;
   }
}
const neelam = new PostalWorker( 'Neelam','39','Ballantyne');
const geeta = new PostalWorker('Geeta','40','sunnyvale')
console.log('---------------Calling methods on sub class PostalWorker------------')

console.log(neelam.getaddress('5015 s sharon rd, sunnyvale'));
console.log(neelam.setjob('Audi Q7'));
console.log(geeta.getemail('geeta123@gmail.com'));
console.log(geeta.greeting());

 class Chefs extends Person{//Chefs class extend
    constructor(name,age,restaurantname){
       super(name,age);
        this.restaurantname=restaurantname;
    }
    cookDish(dishname){
        return `Chef ${this.name}  has cooked ${dishname} in ${this.restaurantname}`;
    }
 }
 const rajeev = new Chefs('Rajeev','45', 'OLive Garden');//Chefs method
 console.log('---------------Calling methods on sub class Chef------------')

 console.log(rajeev.cookDish('Chicken Lasagnia'));
 console.log('Is Email Valid : '+Chefs.validateemail('Rajeev@gmail.com'));
