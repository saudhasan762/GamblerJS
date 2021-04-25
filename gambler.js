console.log("Welcome to gambler simulation problem");

let stake_amount = 100;
const bet_amount = 1;

console.log("Stake amount for the day", stake_amount);
console.log("Bet amount for a game", bet_amount);

function getRandom(){
    return Math.floor(Math.random() * 10) % 2;
}

const getResult = () => {
    while (stake_amount > 50 && stake_amount < 150) {
        if (getRandom() == 1){
            stake_amount++;
            console.log("Stake Amount",  stake_amount);
        } else {
            stake_amount--;
            console.log("Stake Amount", stake_amount);
        }
    }
    console.log("Gambler resigned for the day with amount : ", stake_amount);
}
getResult();