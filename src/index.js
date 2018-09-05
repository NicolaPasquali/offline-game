import BattleSystem from './services/BattleSystem';

let connected;
const battleSystem = new BattleSystem();

function initialize() {
    setConnectionStatusListeners();
    battleSystem.startBattle();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}

initialize();
