//JavaScript Inheritance
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    startRunning(speed) {
        this.speed = speed;
        return `The ${this.name} runs with speed of ${this.speed}km per hour.`;
    }
    stopRunning() {
        this.speed = 0;
        console.log(`The ${this.name} stopped running and now sits still.`);
    }
}

let animal = new Animal("Animal");

//let us create Dog class that will inherit from the Animal class
class Dog extends Animal {

    stopRunning (){//this method will be used by the instances of the Dog class
        super.stopRunning();
        return 'The dog is licking its paws';
    }

    bark() {
        return `The ${this.name} barks!`;
    }
}

let dog = new Dog("Dog");

console.log(dog.startRunning(10)); // The Dog runs with speed of 10km per hour.
console.log(dog.bark()); //The Dog barks!
console.log(dog.stopRunning());