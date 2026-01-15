function drawPlace(){
    if (!PLACE_MODE) return;
    drawUnderMouse();
}

function closePlaceMode(){
    PLACE_MODE = false;
}

function placeTower(){
    if (gridPlaced[sqrX][sqrY]) return;
    PLACE_MODE = false;
    towers.push(new Tower(sqrX, sqrY, TOWER_TYPES[PLACE_INDEX]));
    gridPlaced[sqrX][sqrY] = true;
    money -= TOWER_TYPES[PLACE_INDEX].cost;
}

function drawUnderMouse(){
    let type = TOWER_TYPES[PLACE_INDEX];
    if (gridPlaced[sqrX][sqrY]){
        ctx.beginPath();
        ctx.fillStyle = "#5700003e";
        ctx.arc(sqrX * GRID_SIZE + type.width, sqrY * GRID_SIZE + MENU_SIZE + SHOP_SIZE + type.height, type.range, 0, Math.PI * 2);
        ctx.fill();
        return;
    }
    ctx.beginPath();
    ctx.fillStyle = type.color;
    ctx.strokeStyle = type.border_color;
    ctx.lineWidth = 3;
    switch(type.shape){
        case "square":
            ctx.fillRect(sqrX * GRID_SIZE + type.width / 2, sqrY * GRID_SIZE + MENU_SIZE + SHOP_SIZE + type.height / 2, type.width, type.height);
            ctx.strokeRect(sqrX * GRID_SIZE + type.width / 2, sqrY * GRID_SIZE + MENU_SIZE + SHOP_SIZE + type.height / 2, type.width, type.height);
            break;
        case "triangle":
            // kasnije dodati crtanje trougla
            break;
        default:
            alert("PLACING ERROR: No known shape selected when placing");
            break;
    }
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.fillStyle = type.range_color;
    ctx.arc(sqrX * GRID_SIZE + type.width, sqrY * GRID_SIZE + MENU_SIZE + SHOP_SIZE + type.height, type.range, 0, Math.PI * 2);
    ctx.fill();
}