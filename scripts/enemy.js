class Enemy 
{
    constructor(type) 
    {
        this.type = type.type;
        this.damage = type.damage;
        this.worth = type.worth;
        this._speed = type.speed;
        this._hp = type.hp;
        this._max_hp = type.hp;
        this._segment = 0;
        this._draw_radius = type.draw_radius;
        this._hp_width = this._draw_radius * 2;
        this._hp_height = 4;
        this.x = PATH[0].x * GRID_SIZE;
        this.y = PATH[0].y * GRID_SIZE + SHOP_SIZE + MENU_SIZE;
        this.AtEnd = false;
        this.Dead = false;
    }
    Update(dt)
    {
        if (this.AtEnd) return;
        const start = PATH[this._segment];
        const end = PATH[this._segment + 1];
        //console.log("Enemy pos (", Math.trunc(this.x), ", ", Math.trunc(this.y), ")  segment = ", this._segment);
        if (!end){
            this.AtEnd = true;
            return;
        }
        //Nema dijagonalnog kretanja
        if (start.x === end.x){
            const dy = end.y * GRID_SIZE + SHOP_SIZE + MENU_SIZE - this.y;
            if (Math.abs(dy) <= this._speed * dt){
                this.y = end.y * GRID_SIZE + SHOP_SIZE + MENU_SIZE;
                this._segment++;
            }
            else{
                this.y += Math.sign(dy) * this._speed * dt;
            }
        } 
        else{
            const dx = end.x * GRID_SIZE - this.x;
            if (Math.abs(dx) <= this._speed * dt){ 
                this.x = end.x * GRID_SIZE;
                this._segment++;
            } 
            else{
                this.x += Math.sign(dx) * this._speed * dt;
            }
        }
    }
    Draw(ctx)
    {
        //crta lika
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this._draw_radius, 0, Math.PI * 2);
        ctx.fill();
        //crta healthbar
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x - this._draw_radius, this.y - this._draw_radius - 10, this._hp_width, this._hp_height);
        ctx.fillStyle = "lime";
        ctx.fillRect(this.x - this._draw_radius, this.y - this._draw_radius - 10, this._hp_width * this._hp / this._max_hp, this._hp_height);
    }
    Damage(ammount)
    {
        this._hp -= ammount;
        if (this._hp <= 0) this.Dead=true;
    }
}