let mouse = { x: 0, y: 0 };
let sqr, sqrX, sqrY;

function updateSquares(){
    if (mouse.y >= MENU_SIZE && mouse.y < SHOP_SIZE + MENU_SIZE) sqr = Math.trunc(mouse.x / GRID_SIZE);
    else sqr = null;
    sqrX = Math.trunc(mouse.x / GRID_SIZE);
    sqrY = Math.trunc((mouse.y - SHOP_SIZE - MENU_SIZE) / GRID_SIZE);
}

canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    updateSquares();
});

canvas.addEventListener("mousedown", e => {
    if (mouse.y <= MENU_SIZE) return;
    if (mouse.y < SHOP_SIZE + MENU_SIZE)
        shopClick(sqr);
    else gridClick();
});

function shopClick(){
    //console.log("----> Clicked on shop at ", sqr);
    shopBuy(sqr);
}

function gridClick(){
    //console.log("----> Clicked on grid at (", sqrX, ", ", sqrY,")");
}
