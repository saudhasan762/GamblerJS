console.log("Welcome to gambler simulation problem");

let stake_amount = 100;
const bet_amount = 1;

//console.log("Stake amount for the day", stake_amount);
//console.log("Bet amount for a game", bet_amount);

// function getRandom() {
//     return Math.floor(Math.random() * 10) % 2;
// }

//calculating stake amount for a day
function calculateAmountForADay(stake_amount) {
    while (stake_amount > 50 && stake_amount < 150) {
        let random = Math.floor(Math.random() * 10) % 2;
        if (random == 1) {
            stake_amount++;
            //console.log(" Stake Amount", stake_amount);
        } else {
            stake_amount--;
            //console.log(" Stake Amount", stake_amount);
        }
    }
    return stake_amount;
}

//calculating amount won or lose for 20 days
function checkWinOrLose(win_amount, lost_amount) {
    let total_amount = 0;
    if (win_amount >= lost_amount) {
        total_amount = win_amount - lost_amount;
        console.log("Total Amount won after 20 days : ", total_amount);
    } else {
        total_amount = lost_amount - win_amount;
        console.log("Total Amount lose after 20 days : ", total_amount);
    }
}

//main method
const getResult = () => {
    let win_amount = 0
    let lost_amount = 0;
    for (let i = 1; i <= 20; i++) {
        stake_amount = 100;
        let amount = calculateAmountForADay(stake_amount);
        if (amount == 150){
            console.log("Day",i,"Amount Won", amount);
            win_amount = win_amount + 50;
    }
        else{
            lost_amount = lost_amount + 50;
            console.log("Day",i,"Amount Lost", amount);
        }
    }
    checkWinOrLose(win_amount, lost_amount);
}
getResult();