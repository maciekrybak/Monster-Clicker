function game() {

    // HTML CONSTANTS //

    const score = document.getElementById('Score');
    const money_cont = document.getElementById('Money');
    const multiplier_cnt = document.getElementById('Multiplier');

    const gather1 = document.getElementById('gather1');
    const zombie_shp = document.getElementById('zombie_shp')
    const zombie_cnt = document.getElementById('zombie_cnt')
    const vampire_shp = document.getElementById('vampire_shp')
    const vampire_cnt = document.getElementById('vampire_cnt')
    const skeleton_shp = document.getElementById('skeleton_shp')
    const skeleton_cnt = document.getElementById('skeleton_cnt')

    // VARIABLES //

    let score_amt = 0
    let money_amt = 0;
    let multiplier_amt = 1.0;

    let zombie_amt = 0;
    let vampire_amt = 0
    let skeleton_amt = 0
    
    //UPDATE INTERFACE //

    function updateUI() {
    money_cont.innerText = `Portfel 💵 : ${money_amt.toFixed(2)} $`;
    score.innerText = `👑 Score : ${score_amt}`;
    multiplier_cnt.innerText = `Mnożnik 🥇 : ${multiplier_amt.toFixed(2)}`;
    zombie_cnt.innerText = `Twoja ilość zombie 🧟 : ${zombie_amt}`;
    vampire_cnt.innerText = `Twoja ilość wampirów 🧛🏻 : ${vampire_amt}`;
    skeleton_cnt.innerText = `Twoja ilość szkieletów 💀 : ${skeleton_amt}`;
    }

    // MONEY GATHERING //
    gather1.addEventListener('click', () => {
        gather1.style.filter = 'brightness(1.2)';
        gather1.style.transform = 'scale(1.4)'
        money_cont.style.transform = 'scale(1.1)'
        

        setTimeout(() => {
            gather1.style.filter = 'brightness(1)';
            gather1.style.transform = 'scale(1)'
            money_cont.style.transform = 'scale(1)'
        }, 50);

        score_amt += 1
        money_amt += 1 * multiplier_amt;
        updateUI()
    });
    
    //MULTIPLIER 1 //
    zombie_shp.addEventListener('click', () => {

        if (money_amt >= 15) {
            money_amt -= 15
            zombie_amt += 1
            multiplier_amt += 0.3
        }   
        updateUI()
    })
    //MULTIPLIER 2//
    vampire_shp.addEventListener('click', () => {
        if (money_amt >= 200) {
            money_amt -= 200
            vampire_amt += 1
            multiplier_amt += 5
        }
        updateUI()
    })
    //MULTIPLIER3 //
    skeleton_shp.addEventListener('click', () =>{
        if (money_amt >= 1000) {
            money_amt -= 1000
            skeleton_amt += 1
            multiplier_amt += 100
        }
        updateUI()
    })
}

game();
