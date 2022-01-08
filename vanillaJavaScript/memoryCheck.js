// Object
// Class
// Higher Order Functions

let Student = {
	'NAME' : "Christian",
	'AGE' : 27
}

class StudentClass {
	setName = (name) => {
		this.Name = name;
	}
}

console.log(Student['NAME']); //Student Object.

const Christian = new StudentClass(); //StudentClass.

Christian.setName("Christian");
console.log(Christian.Name);


// Function as arguments

letThis = (func1 , x) => {
	func1(x);
}

letThis(console.log, 3);

// Higher Order Functions

myFunc = (z) => {
	return (x) => {
		console.log(x + z);
	}
}

let AddTo4 = myFunc(4); // Function sets z to 4 in outer function, returns inner function without x
AddTo4(3);

add = (x, y) => {
	console.log(x+y);
}

sub = (x, y) => {
	console.log(x-y);
}

mult = (x, y) => {
	console.log(x*y);
}

div = (x, y) => {
	console.log(x/y);
}
console.log(animal);
var animal = "Dog";