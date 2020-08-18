// The whole game again but with classes
let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10]

// Creation of the class
class Player {

    // The constructor is the method triggered with the `new` keyword 
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000;
    }

    // Method move
    move() {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    }

    // Method displayInfo
    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }

}

// --- Initialisation of players ---
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');

// --- Turn 1  ---
// player1.move();
// player2.move();
// player3.move();

// --- Turn 2  ---
// player1.move();
// player2.move();
// player3.move();

// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();


// Inheritance - using the extends keyword

// we have two classes : Cat and Bird

class Cat {
    constructor(name, color, sound, numberOfLives) {
        this.name = name;
        this.color = color;
        this.sound = sound;
        this.lives = numberOfLives
    }

    makeSound() {
        return this.sound;
    }

}

class Bird {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }

    fly() {
        console.log('i am flying');
    }
}

// The methods they have in common can be moved to a parent class

class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound + '!!!');
    }
}

// Cat is inheriting from animal
class Cat extends Animal {
    constructor(name, color, sound, numberOfLives) {
        // in the child constructor we have to use super()
        // to call the parent constructor
        super(name, color, sound);
        this.lives = numberOfLives;
    }
}

class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }

    fly() {
        console.log('i am flying');
    }
    // when bird uses the makeSound() method, this gets used 
    makeSound() {
        console.log('overriding sound');
    }
}


const kitten = new Cat('Kitty', 'black', 'meow', 7);
console.log(kitten);
// we can now use methods that are only defined in the parent class
kitten.makeSound();