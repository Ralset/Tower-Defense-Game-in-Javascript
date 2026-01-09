function drawGrid(){
    ctx.strokeStyle = "#333";
    for(let x = 0; x < canvas.width; x += GRID_SIZE)
    {
        ctx.beginPath();
        ctx.moveTo(x, SHOP_SIZE + MENU_SIZE);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for(let y = SHOP_SIZE + MENU_SIZE; y < canvas.height; y += GRID_SIZE)
    {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}