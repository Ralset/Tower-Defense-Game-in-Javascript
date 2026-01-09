let PLACE_MODE = false;
let PLACE_INDEX = -1;
let money = 100;
let health = 100;
let max_health = 100;
let last = 0;
let enemies = [];
let towers = [];
let gridPlaced = [];
let N = canvas.width/GRID_SIZE
let wave_count = 0;
let untilFirstWave = 5000;
let untilNextWave = 0;

let winInterval;

function checkWin()
{
    if (enemies.length === 0 && health > 0){
        clearInterval(winInterval);
        alert("You Won!");
    }
    return;
}

for (let i = 0; i < N; i++){
    let temp = [];
    for (let j = 0; j < N; j++){
        temp.push(false);
    }
    gridPlaced.push(temp);
}

//pocetak gameloopa
requestAnimationFrame(loop);

setTimeout(() => next_wave(wave_count), untilFirstWave);

tick(untilFirstWave);

function tick(remaining){
    remaining /= 1000;
    untilNextWave = remaining;
    const interval = setInterval(() => {
        if (remaining <= 1) {
            clearInterval(interval);
            return;
        }
        remaining --;
        untilNextWave--;
    }, 1000);
}

function next_wave(i)
{
    if (i >= WAVES.length) return;
    wave_count++;
    summon(WAVES[i].wave);
    if (i >= WAVES.length - 1){
        untilNextWave = "Final Wave!";
        winInterval = setInterval(() => checkWin(), 1000);
    }
    else tick(WAVES[i].until_next_wave);
    setTimeout(() => next_wave(wave_count), WAVES[i].until_next_wave);
}

function summon(wave) {
    for (const w of wave) {
        enemies.push(new Enemy(ENEMY_TYPES[w.type]));
        let remaining = w.ammount - 1;
        const interval = setInterval(() => {
            if (remaining <= 0) {
                clearInterval(interval);
                return;
            }
            enemies.push(new Enemy(ENEMY_TYPES[w.type]));
            remaining--;
        }, w.cooldown);
    }
}