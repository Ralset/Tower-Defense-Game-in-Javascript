function drawMenu(){
    drawMenuBorder();
    drawHealth();
    drawMoney();
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
    ctx.fillText(`\$${money}`, MENU_SIZE/4, MENU_SIZE/2);
}
