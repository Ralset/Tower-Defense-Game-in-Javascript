function drawMenu(){
    drawMenuBorder();
    drawHealth();
    drawMoney();
    drawPlaceClose();
    drawWaveTimer()
}

function drawMenuBorder(){
    ctx.strokeStyle = "#444";
    ctx.beginPath();
    ctx.moveTo(0, MENU_SIZE);
    ctx.lineTo(canvas.width, MENU_SIZE);
    ctx.stroke();
}

function drawHealth(){
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(canvas.width - GRID_SIZE*2 + GRID_SIZE/8, MENU_SIZE/4, GRID_SIZE * 2 - GRID_SIZE/4, MENU_SIZE/2);
    ctx.beginPath();
    ctx.fillStyle = "lime";
    ctx.fillRect(canvas.width - GRID_SIZE*2 + GRID_SIZE/8, MENU_SIZE/4, (GRID_SIZE * 2 - GRID_SIZE/4) * health / max_health , MENU_SIZE/2);
}

function drawMoney(){
    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.font = `${MENU_SIZE/2}px monospace`;
    ctx.fillText(`\$${money}`, (PLACE_MODE?GRID_SIZE:0) + MENU_SIZE/4, MENU_SIZE/2);
}

function drawPlaceClose(){
    if (!PLACE_MODE) return;
    ctx.beginPath();
    ctx.fillStyle = "rgb(47, 46, 46)";
    ctx.fillRect(1, 1, GRID_SIZE-1, MENU_SIZE-1)
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#888";
    ctx.strokeRect(0, 0, GRID_SIZE, MENU_SIZE-1);
    ctx.beginPath();
    ctx.fillStyle = "#888";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${MENU_SIZE/2}px arial`;
    ctx.fillText(`X`, GRID_SIZE/2, MENU_SIZE/2);
}

function drawWaveTimer(){
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${MENU_SIZE/2}px arial`;
    ctx.fillText(`Next wave in: ${untilNextWave}`, canvas.width/2, MENU_SIZE/2);

}