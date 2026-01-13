function gameOver()
{
    alert("You Lost!");
}

function update(dt){
    enemies.sort((a, b) => {
        if (a._segment !== b._segment) return a._segment - b._segment;
        const seg = a._segment;
        if (seg + 1 < PATH.length || PATH[seg].x === PATH[seg + 1].x)
            return (Math.abs(PATH[seg].y - b.y) > Math.abs(PATH[seg].y - a.y));
        else return (Math.abs(PATH[seg].x - b.x) > Math.abs(PATH[seg].x - a.x));
    });
    for (const t of towers){
        if (!t.CanAttack) continue;
        let target_enemy_index = -1;
        for (let i = enemies.length - 1; i >= 0; i--){
            if(t.InRange(enemies[i])){
                target_enemy_index = i;
                break;
            }
        }
        if (target_enemy_index === -1) continue;
        t.Attack(enemies[target_enemy_index]);
        if (enemies[target_enemy_index].Dead) {
            money += enemies[target_enemy_index].worth;
            enemies.splice(target_enemy_index, 1);
        }
    }
    for (let i = enemies.length - 1; i >= 0; i--){
        enemies[i].Update(dt);
        if (enemies[i].AtEnd){
            health -= enemies[i].damage;
            enemies.splice(i, 1);
        }
    }
    health = Math.max(health, 0);   
}

function drawOutBorderAndBackground()
{
    ctx.beginPath();
    ctx.fillStyle = "#222";
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 1;
    ctx.fillRect(0, 0, canvas.width, SHOP_SIZE + MENU_SIZE);
    ctx.strokeRect(0, 0, canvas.width, SHOP_SIZE + MENU_SIZE);
    ctx.stroke();
}

function draw(){
    drawGrid();
    drawPath();
    for (const t of towers) {
        t.Draw(ctx);
        if (t.x === sqrX && t.y === sqrY && !PLACE_MODE) t.DrawHover(ctx);
    }
    for (const e of enemies) e.Draw(ctx);
    drawPlace();
    drawOutBorderAndBackground();
    drawMenu();
    drawShop();
}