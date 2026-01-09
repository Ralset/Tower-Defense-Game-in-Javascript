class Tower 
{
    constructor(x, y, type) 
    {
        this.type = type.type;
        this.cost = type.cost;
        this._damage = type.damage;
        this._range = type.range;
        this._attack_interval = type.attack_interval;
        this._width = type.width;
        this._height = type.height;
        this._color = type.color;
        this._border_color = type.border_color;
        this._range_color = type.range_color;
        this._shape = type.shape;
        this.x = x;
        this.y = y;
        this._x_pos = x * GRID_SIZE + GRID_SIZE / 2 - this._width / 2;
        this._y_pos = y * GRID_SIZE + SHOP_SIZE + MENU_SIZE + GRID_SIZE / 2 - this._height / 2;
        this.CanAttack = true;
    }
    Update(dt)
    {
        return;
    }
    Draw(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this._color;
        ctx.strokeStyle = this._border_color;
        ctx.lineWidth = 3;
        switch(this._shape){
            case "square":
                ctx.fillRect(this._x_pos, this._y_pos, this._width, this._height);
                ctx.strokeRect(this._x_pos, this._y_pos, this._width, this._height);
                break;
            case "triangle":
                // kasnije dodati crtanje trougla
                break;
            default:
                alert("TOWER ERROR: No known shape selected when creating tower");
                break;
        }
        ctx.lineWidth = 1;
    }
    DrawHover(ctx)
    {
        ctx.fillStyle = this._range_color;
        ctx.beginPath();
        ctx.arc(this._x_pos + this._width / 2, this._y_pos + this._height / 2, this._range, 0, Math.PI * 2);
        ctx.fill();
    }
    InRange(enemy)
    {
        const dist = Math.hypot(this._x_pos - enemy.x, this._y_pos - enemy.y);
        return dist <= this._range;
    }
    Attack(enemy)
    {
        enemy.Damage(this._damage);
        this.CanAttack = false;
        setTimeout(() => {this.CanAttack=true}, this._attack_interval);
    }
}