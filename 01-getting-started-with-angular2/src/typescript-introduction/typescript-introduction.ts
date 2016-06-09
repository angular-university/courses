

var hello = "Hello World !";

if (hello) {
    console.log(hello);
}


const message = `message: ${hello}`;

console.log(message);



function printMessage(message:string,
                      callback: Function) {
    console.log(message);
    callback();
}


printMessage(message, () => {
    console.log('callback was called ...');
});


