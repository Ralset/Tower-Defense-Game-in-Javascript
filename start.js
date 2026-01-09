let PLACE_MODE = false;
let PLACE_INDEX = -1;
let money = 500;
let health = 100;
let max_health = 100;
let last = 0;
let enemies = [];
let towers = [];
let gridPlaced = [];
let N = canvas.width/GRID_SIZE
let wave_count = 0;
let untilFirstWave = 5000;

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

function next_wave(i)
{
    if (i >= WAVES.length) return;
    wave_count++;
    console.log(i, " ", WAVES[i].until_next_wave/1000);
    summon(WAVES[i].wave);
    setTimeout(() => next_wave(wave_count), WAVES[i].until_next_wave);
}

function summon(wave) {
    for (const w of wave) {
        let remaining = w.ammount;
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