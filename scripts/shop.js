function drawShop(){
    for (let i = 0; i < TOWER_TYPES.length; i++){
        const x=i*SHOP_SIZE, y=MENU_SIZE;
        drawIconBorder(x, y);
        drawTowerIcon(TOWER_TYPES[i], x, y);
        drawTowerShopInfo(TOWER_TYPES[i], x, y);
        shopHover();
    }
}

function drawIconBorder(x, y){
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#444";
    ctx.strokeRect(x, y, SHOP_SIZE, SHOP_SIZE);
    ctx.lineWidth = 1;
}

function drawTowerIcon(type, x, y){
    ctx.beginPath();
    ctx.fillStyle = type.color;
    ctx.strokeStyle = type.border_color;
    ctx.lineWidth = 3;
    switch(type.shape){
        case "square":
            ctx.fillRect((x + SHOP_SIZE/2 - type.width * (SHOP_ICON_SCALE/2)), (y + SHOP_SIZE/8), (type.width * SHOP_ICON_SCALE), (type.height * SHOP_ICON_SCALE));
            ctx.strokeRect((x + SHOP_SIZE/2 - type.width * (SHOP_ICON_SCALE/2)), (y + SHOP_SIZE/8), (type.width * SHOP_ICON_SCALE), (type.height * SHOP_ICON_SCALE));
            break;
        case "triangle":
            // kasnije dodati crtanje trougla
            break;
        default:
            alert("SHOP ERROR: No known shape selected when creating tower icon");
            break;
    }
    ctx.lineWidth = 1;
}

function drawTowerShopInfo(type, x, y){
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.font = `${MENU_SIZE/2.5}px monospace`;
    x += SHOP_SIZE/2;
    y += type.height * SHOP_ICON_SCALE * 2 + type.height * SHOP_ICON_SCALE / 3;
    ctx.fillText(`\$${type.cost}`, x, y);
    ctx.font = `${MENU_SIZE/4.5}px monospace`;
    y += MENU_SIZE/3;
    ctx.fillText(`\ATK: ${type.damage}`, x, y);
    ctx.font = `${MENU_SIZE/4.5}px monospace`;
    y += MENU_SIZE/4.5;
    ctx.fillText(`\CD: ${type.attack_interval/1000}s`, x, y);
}

function shopBuy(i){
    if (i >= TOWER_TYPES.length) return;
    if (TOWER_TYPES[i].cost > money) {
        console.log("Not enough money");
        return;
    }
    console.log("Buying");
    PLACE_MODE = true;
    PLACE_INDEX = i;
}

function shopHover(){
    if (sqr === null) return;
    if (sqr >= TOWER_TYPES.length) return;
    ctx.beginPath();
    ctx.fillStyle = "#ffffff05";
    ctx.fillRect(sqr*SHOP_SIZE, MENU_SIZE, SHOP_SIZE, SHOP_SIZE);
}