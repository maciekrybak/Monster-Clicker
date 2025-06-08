function game() {
    const score = document.getElementById('Score');
    const money_cont = document.getElementById('Money');
    const multiplier_cnt = document.getElementById('Multiplier');

    const gather1 = document.getElementById('gather1');
    const zombie_shp = document.getElementById('zombie_shp')
    const zombie_cnt = document.getElementById('zombie_cnt')
    const skeleton_shp = document.getElementById('skeleton_shp')
    // zrobic vamp shp skel shp dodac funkcyjnosc ze auto czas + div //
    let score_amt = 0
    let money_amt = 0;
    let zombie_amt = 0;
    let multiplier_amt = 1.0;

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
        money_cont.innerText = `Portfel 💵 : ${money_amt.toFixed(2)} $`;
        score.innerText = `👑 Score : ${score_amt}`;

    });

    zombie_shp.addEventListener('click', () => {
        if (money_amt > 15) {
            money_amt -= 15
            zombie_amt += 1
            multiplier_amt += 0.3
        }   
        multiplier_cnt.innerText = `Mnożnik 🥇 : ${multiplier_amt.toFixed(2)}`;
        money_cont.innerText = `Portfel 💵 : ${money_amt.toFixed(2)} $`;
        zombie_cnt.innerText = `Twoja ilość zombie 🧟 : ${zombie_amt}`;
    })


}

game();
