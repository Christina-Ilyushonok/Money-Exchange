module.exports = function makeExchange(currency) {

    if(currency < 1) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let numberCoins = {},
        coins  = [50,25,10,5,1],
        names = ["H","Q","D","N","P"];

    for(let i = 0; i < 5; i++) {
        if(currency / coins[i] >= 1) {
            numberCoins[names[i]] = Math.floor(currency/coins[i]);
            currency = currency % coins[i];
        }
    }
    return numberCoins;
}
