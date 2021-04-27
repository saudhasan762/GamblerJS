console.log("Welcome to gambler simulation problem");
const prompt = require('prompt-sync')();

const util = require('./utility');

util.getResult();
while(true){
    console.log("Press 1 to play again or Any other key to exit");
    let option = prompt();
    if(option == 1)
        util.getResult();
    else
        break;
}