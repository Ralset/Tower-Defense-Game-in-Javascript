let PLACE_MODE = false;
let PLACE_INDEX = -1;
let money = 500;
let health = 100;
let max_health = 100;
let last = 0;
let enemies = [];
let towers = [];
let gridPlaced = [];
let N = canvas.width/GRID_SIZE;

for (let i = 0; i < N; i++){
    let temp = [];
    for (let j = 0; j < N; j++){
        temp.push(false);
    }
    gridPlaced.push(temp);
}

//pocetak gameloopa
requestAnimationFrame(loop);

