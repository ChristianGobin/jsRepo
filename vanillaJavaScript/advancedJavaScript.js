// Map, Reduce, Class Inheritance

class Person {}
class Student extends Person {}

const someObject = {
	name : '',
	age : 0,
	sayName : function(){
		console.log(this.name);
	}
}

let newObject = someObject;
newObject.name = "Christian";
newObject.sayName();