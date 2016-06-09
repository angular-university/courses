

const hello = "Hello World !";

if (hello) {
    console.log(hello);
}


const message = `message: ${hello}`;

console.log(message);



function printMessage(message, callback) {
    console.log(message);
    callback();
}


printMessage(message, () => {
    console.log('callback was called ...');
});


interface LandAnimal {
    run();
}


abstract class Mammal implements LandAnimal {

}


class Turtle extends Mammal implements LandAnimal {

    run() {
        console.log("turtles run slowly ...");
    }

}


class Cheetah extends Mammal implements LandAnimal {

    run() {
        console.log("a cheetah runs fast ...");
    }


}

