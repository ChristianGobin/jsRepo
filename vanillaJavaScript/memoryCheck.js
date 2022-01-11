// Object
// Class
// Higher Order Functions
// The map function runs a function on each element of array and returns a new array.

const setOfNums = [1, 3, 2, 3];
const numsSquared = setOfNums.map(function(num){
	return num*num;
})
console.log(numsSquared);

//Object methods and attributes
const Student = {
	Name:'',
	Age:'',
	setName: function (name) {
		this.Name = name;
	}
}
Student.setName("Christian");
console.log(Student.Name);

//Class aka object templates
class 