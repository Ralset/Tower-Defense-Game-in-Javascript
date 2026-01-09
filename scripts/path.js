function drawPath() {
    ctx.strokeStyle = "#d1cec2ff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(PATH[0].x * GRID_SIZE, PATH[0].y * GRID_SIZE + SHOP_SIZE + MENU_SIZE);
    for (const p of PATH){
        ctx.lineTo(p.x * GRID_SIZE, p.y * GRID_SIZE + SHOP_SIZE + MENU_SIZE);
    }
    ctx.stroke();
    ctx.lineWidth = 1;
}
