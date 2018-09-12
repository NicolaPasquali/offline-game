import BattleSystem from './services/BattleSystem';

const battleSystem = new BattleSystem();

function initialize() {
    setConnectionStatusListeners();
    setTimeout(() => battleSystem.startBattle(), 100);
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => toggleVisibility(navigator.onLine), false);
    window.addEventListener('online', (e) => toggleVisibility(true), false);
    window.addEventListener('offline', (e) => toggleVisibility(false), false);
}

function toggleVisibility(connected) {
	if (connected) {
		document.getElementById('online-block').style.display = 'block';
	} else {
    	document.getElementById('online-block').style.display = 'none';
	}
}

initialize();
