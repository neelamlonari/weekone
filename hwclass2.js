
   // There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
   // log the properties and test the methods (don't instantiate)
class Governor {
    constructor (){
    }
    static name = 'Roy Cooper';
    static state= 'North Carolina';

    static getgovernordetail(){
        return 'Roy Cooper,North Carolina';
    }
    
    
    static sayHello( hello){
         return 'Hello , from Governor';
        
    }

}
        console.log( Governor.sayHello());
        console.log(Governor.getgovernordetail());
        console.log(Governor.name);
        console.log(Governor.state);
 
  