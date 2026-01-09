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
    damage: 10,
    range: 180,
    attack_interval: 100,
    width: 50,
    height: 50,
    shape: "square",
    color: "#ff8418ff",
    border_color: "#924400ff",
    range_color: "#ff84181b"
  },
]