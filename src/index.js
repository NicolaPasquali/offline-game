import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';
import MenuDisplay from "./models/menu/MenuDisplay";
import MenuFactory from "./models/menu/MenuFactory";

kontra.init('gameScreen');

let connected;
let background;
let menuDisplay;
const menuFactory = new MenuFactory(kontra);

function initialize() {
    setConnectionStatusListeners();
    // Sarebbe figo avere un ufficio come sfondo
    // Al limite va bene anche colorare di nero la parte alta
    // Va convertita in jpg e ridotta il più possibile come dimensione!
    background = createBackground(kontra, './assets/background.png');
    menuDisplay = new MenuDisplay(kontra, menuFactory.mainMenu());
    kontra.gameLoop({
        fps: 60,
        update: gameLoopUpdate,
        render: gameLoopRender
    }).start();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}

function gameLoopUpdate() {
}

function gameLoopRender() {
    background.render();
    menuDisplay.render();
}

initialize();
