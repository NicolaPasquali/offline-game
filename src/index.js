import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';
import InformationDisplay from './models/InformationDisplay';
import Player from './models/Player';
import BasicEnemy from "./models/enemies/BasicEnemy";
import EnemiesFactory from "./models/enemies/EnemiesFactory";

kontra.init('gameScreen');

let connected;
let background;
let player;
let enemies;
let informationDisplay;

function initialize() {
    setConnectionStatusListeners();
    background = createBackground(kontra, 'black');
    player = new Player();
    spawnEnemies();
    initializeInformationDisplay();
    informationDisplay.render();

    kontra.gameLoop({fps: 30, update: gameLoopUpdate, render: gameLoopRender}).start();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}

function spawnEnemies() {
    enemies = EnemiesFactory.spawnBasicEnemies(kontra, 250, 175, 5);
}

function initializeInformationDisplay() {
    informationDisplay = new InformationDisplay(player);
    informationDisplay.enemies = enemies;
}

function gameLoopUpdate() {
}

function gameLoopRender() {
    background.render();
    enemies.forEach((enemy) => enemy.render());
}

initialize();
