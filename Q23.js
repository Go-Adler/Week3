class Car {
	constructor(name) {
		this.name = name;
	}
	introduce() {
		console.log('This is ' + this.name + ' !');
	}
	static run() {
		console.log('Car is running...!');
	}
}

const myCar = new Car('My Car');
myCar.introduce();

// Calling the static method using class name
Car.run();