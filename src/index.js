import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';
import BattleSystem from './services/BattleSystem';

kontra.init('gameScreen');

let connected;
const background = createBackground(kontra, 'black');
const battleSystem = new BattleSystem(kontra);

function initialize() {
    setConnectionStatusListeners();
    battleSystem.startBattle();
    kontra.gameLoop({fps: 1, update: gameLoopUpdate, render: gameLoopRender}).start();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}

function gameLoopUpdate() {
    battleSystem.stepBattle();
}

function gameLoopRender() {
    background.render();
    battleSystem.render();
}

initialize();
