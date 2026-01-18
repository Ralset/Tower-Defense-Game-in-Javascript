let mouse = { x: 0, y: 0 };
let sqr, sqrX, sqrY;

function updateSquares(){
    if (mouse.y >= MENU_SIZE * scale && mouse.y < SHOP_SIZE * scale + MENU_SIZE * scale) sqr = Math.trunc(mouse.x / (GRID_SIZE * scale));
    else sqr = null;
    sqrX = Math.trunc(mouse.x / (GRID_SIZE * scale));
    sqrY = Math.trunc((mouse.y - SHOP_SIZE * scale - MENU_SIZE * scale) / (GRID_SIZE * scale));

    sqrX = Math.max(0,Math.min(N-1,sqrX));
    sqrY = Math.max(0,Math.min(N-1,sqrY));
}

canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    updateSquares();
});

canvas.addEventListener("mousedown", e => {
    if (mouse.y <= MENU_SIZE * scale && mouse.x <= GRID_SIZE * scale) closePlaceMode();
    else if (mouse.y < (SHOP_SIZE + MENU_SIZE) * scale) shopClick(sqr);
    else gridClick();
});

function shopClick(){
    //console.log("----> Clicked on shop at ", sqr);
    shopBuy(sqr);
}

function gridClick(){
    //console.log("----> Clicked on grid at (", sqrX, ", ", sqrY,")");
    if (PLACE_MODE) placeTower();
}
