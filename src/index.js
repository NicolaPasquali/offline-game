import BattleSystem from './services/BattleSystem';

const battleSystem = new BattleSystem();

function initialize() {
    setConnectionStatusListeners();
    battleSystem.startBattle();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => toggleVisibility(navigator.onLine), false);
    window.addEventListener('online', (e) => toggleVisibility(true), false);
    window.addEventListener('offline', (e) => toggleVisibility(false), false);
}

function toggleVisibility(connected) {
	//TODO: togliere commento in production!!!
	// if (connected) {
	// 	document.getElementById('online-block').style.display = 'block';
	// } else {
    // 	document.getElementById('online-block').style.display = 'none';
	// }
}

initialize();
