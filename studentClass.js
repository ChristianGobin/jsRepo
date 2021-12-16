class Student {
	constructor(_name, _major, _age){
  	this.name = _name;
    this.major = _major;
    this.age = _age;
  }
  printName(){
  	console.log(this.name);
  }
}

let John = new Student("John", "Bio", 27);
John.printName();
