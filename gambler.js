console.log("Welcome to gambler simulation problem");

const stake_amount = 100;
const bet_amount = 1;

console.log("Stake amount for the day", stake_amount);
console.log("Bet amount for a game", bet_amount);

const getResult = () => {
    const random = Math.floor(Math.random() * 10) % 2;
    if(random == 1)
        console.log("Win");
    else
        console.log("Lost");
}
getResult();