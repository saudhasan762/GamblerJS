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

 module.exports = {checkWinOrLose}
