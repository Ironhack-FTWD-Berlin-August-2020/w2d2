const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000;
    }

    move() {
        let dice = 1 + Math.floor(Math.random() * 6);
        this.position = (this.position + dice) % squares.length
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log(`Game over for player ${this.name}`);
        }
    }
}
/*
const pauline = new Player('Timmy');
pauline.nama = 'Pauline';
pauline.move();
console.log(pauline);
*/





// players
/*
let player1 = {
    name: 'Pauline',
    color: 'red',
    position: 0,
    cash: 1000,
    move: function () {
        let dice = 1 + Math.floor(Math.random() * 6);
        this.position = (this.position + dice) % squares.length
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log(`Game over for player ${this.name}`);
        }
    },
    display: function () {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash} amount of cash`);
    }
}
*/
// player1.move();
// player1.display();









let player2 = {
    name: 'Jeff',
    color: 'blue',
    position: 0,
    cash: 1000
}

let player3 = {
    name: 'Timmy',
    color: 'black',
    position: 0,
    cash: 1000
}

// let dice;
// console.log(Math.random());
// dice = 1 + Math.floor(Math.random() * 6);

// player1.position = player1.position + dice;
// if (player1.position + dice > 15) {
//     player1.position = player1.position + dice - squares.length;
// } else {
//     player1.position += dice
// }

// moving the player
// player1.position = (player1.position + dice) % squares.length

// update the cash
// player1.cash += squares[player1.position];

// check if game is over
// if (player1.cash <= 0) {
//     console.log(`Game over for player ${player1.name}`);
// }

/*
class Cat {
    constructor(name, color, sound, lives) {
        this.name = name;
        this.color = color;
        this.sound = sound;
        this.lives = lives;
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
        console.log(sound);
    }
    fly() {
        console.log('i am flying');
    }
}
*/
class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound + '!!!!');
    }
    move() {
        console.log('i am moving');
    }
}


class Cat extends Animal {
    constructor(name, color, sound, lives) {
        super(name, color, sound);
        this.lives = lives;
    }
    makeSound() {
        console.log('sound from cat');
    }
}

const kitty = new Cat('kitty', 'black', 'meow', 7);
console.log(kitty.move());



class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound)
        this.age = 3;
    }
    makeSound() {
        console.log(sound);
    }
    fly() {
        console.log('i am flying');
    }
}

const pety = new Bird('pety', 'yellow', 'peep');
console.log(pety)















