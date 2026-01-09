const GRID_SIZE = 100;
const SHOP_SIZE = 100;
const MENU_SIZE = 50;
const SHOP_ICON_SCALE = 0.5;

const PATH = [
  { x: 0, y: 4},
  { x: 1, y: 4},
  { x: 1, y: 1},
  { x: 4, y: 1},
  { x: 4, y: 6},
  { x: 6, y: 6},
  { x: 7, y: 6},
  { x: 7, y: 5},
  { x: 8, y: 5},
];

WAVES = [
  { 
    until_next_wave: 20000,
    wave: [
      {
        type: 0,
        ammount: 5,
        cooldown: 3000
      }
    ]
  },
  {
    until_next_wave: 30000,
    wave: [
      {
        type: 0,
        ammount: 15,
        cooldown: 1500
      }
    ]
  },
  {
    until_next_wave: 10000,
    wave: [
      {
        type: 1,
        ammount: 5,
        cooldown: 500
      }
    ]
  },
  {
    until_next_wave: 15000,
    wave: [
      {
        type: 0,
        ammount: 5,
        cooldown: 500
      }
    ]
  },
  {
    until_next_wave:  20000,
    wave: [
      {
        type: 1,
        ammount: 20,
        cooldown: 500
      }
    ]
  },
  {
    until_next_wave: 20000,
    wave: [
      {
        type: 0,
        ammount: 15,
        cooldown: 1000
      },
      {
        type: 1,
        ammount: 30,
        cooldown: 250
      }
    ]
  },
  {
    until_next_wave: -1,
    wave: [
      {
        type: 2,
        ammount: 1,
        cooldown: 0
      }
    ]
  }
]

ENEMY_TYPES = [
  {
    type: 0,
    damage: 10,
    worth: 25,
    speed: 100,
    hp: 100,
    draw_radius: 15,
    color: "#ff0000"
  },
  {
    type: 1,
    damage: 5,
    worth: 10,
    speed: 500,
    hp: 30,
    draw_radius: 10,
    color: "#1bc592"
  },
  {
    type: 2,
    damage: 90,
    worth: 750,
    speed: 15,
    hp: 10000,
    draw_radius: 30,
    color: "#540a6f"
  }
]

TOWER_TYPES = [
  {
    type: 1,
    cost: 100,
    damage: 25,
    range: 225,
    attack_interval: 1000,
    width: 50,
    height: 50,
    shape: "square",
    color: "#1da9d4ff",
    border_color: "#004155ff",
    range_color: "#1da9d41c"
  },
  {
    type: 2,
    cost: 500,
    damage: 5,
    range: 180,
    attack_interval: 50,
    width: 50,
    height: 50,
    shape: "square",
    color: "#ff8418ff",
    border_color: "#924400ff",
    range_color: "#ff84181b"
  },
]