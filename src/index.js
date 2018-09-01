import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';
import Menu from './models/menu/Menu';
import InformationDisplay from "./models/InformationDisplay";
import Player from './models/Player';
import BasicEnemy from "./models/enemies/BasicEnemy";

kontra.init('gameScreen');

let connected;
let background;
let menu;
let player;
let enemies;
let informationDisplay;

function initialize() {
    setConnectionStatusListeners();
    background = createBackground(kontra, 'black');
    menu = new Menu(kontra);
    player = new Player();
    spawnEnemies();
    initializeInformationDisplay();
    informationDisplay.render();

    enemies[0].hp = 10;
    informationDisplay.render();

    kontra.gameLoop({
        fps: 5,
        update: gameLoopUpdate,
        render: gameLoopRender
    }).start();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}

function spawnEnemies() {
    enemies = [new BasicEnemy(), new BasicEnemy(), new BasicEnemy()];
}

function initializeInformationDisplay() {
    informationDisplay = new InformationDisplay(player);
    informationDisplay.enemies = enemies;
}

function gameLoopUpdate() {
    menu.manageInput();
}

function gameLoopRender() {
    background.render();
    menu.render();
}

initialize();
