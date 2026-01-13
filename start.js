const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const N = canvas.width/GRID_SIZE;
const Time = new Tick(TPS);

let PLACE_MODE = false;
let PLACE_INDEX = -1;
let money = 100;
let health = 100;
let max_health = 100;
let last = 0;
let enemies = [];
let towers = [];
let gridPlaced = [];
let untilNextWave = 5;
let wave_count = -1;
let t_waveUnsub;
let t_winUnsub;

const BASE_WIDTH = 800;
const BASE_HEIGHT = 950;

canvas.width = BASE_WIDTH;
canvas.height = BASE_HEIGHT;

function resize() {
    const scale = Math.min(
        window.innerWidth / BASE_WIDTH,
        window.innerHeight / BASE_HEIGHT
    );

    canvas.style.width  = `${BASE_WIDTH * scale}px`;
    canvas.style.height = `${BASE_HEIGHT * scale}px`;
}
resize();

document.addEventListener("visibilitychange", () => {
    if (document.hidden) Time.Stop();
    else Time.Start();
});
window.addEventListener("resize", resize);

for (let i = 0; i < N; i++){
    let temp = [];
    for (let j = 0; j < N; j++){
        temp.push(false);
    }
    gridPlaced.push(temp);
}

function checkWin()
{
    if (enemies.length === 0 && health > 0){
        t_winUnsub();
        alert("You Won!");
    }
    return;
}

function waveTick(){
    untilNextWave--;
    if(untilNextWave === 0){
        wave_count++;
        t_waveUnsub();
        next_wave(wave_count);
    }
}

function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    if (health > 0) requestAnimationFrame(loop);
    else gameOver();
}

//pocetak gameloopa
Time.Start();
requestAnimationFrame(loop);
Time.Subscribe(() => {update(1 / Time.ticksPerSecond)}, 1);

//Svake sekunde
t_waveUnsub = Time.Subscribe(waveTick, TPS);

function next_wave(i)
{
    summon(WAVES[i].wave);
    if (i < WAVES.length - 1){
        untilNextWave = WAVES[i].until_next_wave;
        t_waveUnsub = Time.Subscribe(waveTick, TPS);
    }
    else{
        untilNextWave = "Final Wave!";
        t_winUnsub = Time.Subscribe(checkWin, TPS);
    }
}

function summon(wave) {
    for (const w of wave) {
        let remaining = w.ammount;
        if (remaining <= 0) continue;
        const freq = Math.max(1, Math.round(w.cooldown / Time.delay));

        let unsub = null;
        unsub = Time.Subscribe(() => {
            enemies.push(new Enemy(ENEMY_TYPES[w.type]));
            remaining--;
            if (remaining <= 0) unsub();
        }, freq);
    }
}
