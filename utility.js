const variable = require('./variable');
const amo = require('./getAmount');

class Gambler {

    constructor(){}

    getRandom() {
        return Math.floor(Math.random() * 10) % 2;
    }
    
    //calculating stake amount for a day
    calculateAmountForADay(rand,stake_amount,day) {
        let won_bet = 0;
        let lose_bet = 0;
        while (stake_amount > 50 && stake_amount < 150) {
            if (/*this.getRandom()*/ rand == 1) {
                stake_amount++;
                won_bet++;
                //console.log(" Stake Amount", stake_amount);
            } else {
                stake_amount--;
                lose_bet++;
                //console.log(" Stake Amount", stake_amount);
            }
        }
        if(won_bet > lose_bet)
            variable.bet_won.push(day);
        else
            variable.bet_lose.push(day);
        return stake_amount;
    }

    getResult = () => {
        let win_amount = 0
        let lost_amount = 0;
        for (let i = 1; i <= 20; i++) {
            variable.stake_amount = 100;
            let amount = this.calculateAmountForADay(variable.stake_amount,i);
            if (amount == 150){
                console.log("Day",i,"Amount Won", amount);
                win_amount = win_amount + 50;
        }
            else{
                lost_amount = lost_amount + 50;
                console.log("Day",i,"Amount Lost", amount);
            }
        }
        amo.checkWinOrLose(win_amount, lost_amount);
        console.log("Luckiest Day : ",variable.bet_won);
        console.log("Unluckiest Day : ",variable.bet_lose);
        variable.bet_won = [];
        variable.bet_lose = [];
    }
}

module.exports = new Gambler();