// FIXME Aggiungere double buffering - Così com'è, va a scatti
// https://stackoverflow.com/questions/2795269/does-html5-canvas-support-double-buffering
export default class Renderer {
    constructor() {
        this.ctx = document.getElementById('gameScreen').getContext('2d');
        this.sprite = new Image();
        this.sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAACQBAMAAABt+zNvAAAALVBMVEUAAAAxK1znuHiWloOdnaeeXSPjZI0WR1NQCQscgWi7psD///8fl7nBl1wnJiEAVKoaAAACuElEQVRo3u3YsY7TMBzH8f8dGBBIqD42WO7MgsRCqXiDbizWSR6RmLqw3MZaMfUVutG1EyDE4om9D3W/1EnsRNeojWsnTf3VnaNeEn/ka5PeldCzhWlOZUyZJO1K5ZENE+XRjrqxKJ5lV6bcemRh7R1YC7f5+VkiqztLZDmWmcGxbkVWh5bIend+1qUoum62EBUJe5Kn9UUgx8LaGy3sn1ctaHtat4db6IdAxlok64ysbKJk7bKohYUuW1mcN96j3Il9rYvSuuEjHwvtYXH9m7/RmvfTejz9rHV2ov47nfbRguRY0HJrMvmkVN8tjEe1pshayHlfLqSeWVdCVCy8qENaE6eP7SzysIA1Wtit9R9heq81zmpvUSzL3p7XPyNa6xjW1Vaylu0Qy+ZlzWbftOnfbHYa1vP1qrDQsKzXUHpklXlYmN9aKFnJ6sba/MeejWlQ1maTLC9ruXSt5TJZyapaKIKV/6HB+XYjRLL8LT6KYa1wQLJOxuJ8MNaY8xGsbatkJetBC8W6vpqtJ7N6X5M1RGvpFtIaEVUsIjpJC1fhjZXwG9vHEuJt9TlNlr/1QmvM7w6/Wlnou9Mdb2tN0Phgi+jRBH0oNhTKIuRnkcGIPCwhzBDSsk/9tRmyknUcS5JJ9dm6e3qYJWFYS4W2mMKXJCXDWxBMFMNiW0pGscgsa1CWKi1p5IAWy75jWRKUCQ+iWZIUBbUwvyoKbzFVJgNbTNkosEXdWHKg6wpuMRXrdQjKLbAlHSrwPUqRY4V+/6pb6CUPYrGqhYfo4gFLCDOEtepntbZU7foapiUDWyymxeJZillKDcbKNNeiWBaFt1hpsWiWjGqpaBYZC5K10OiYFjVYNpgXVq9Z2PPKscbbY8zHlfmmtVVsyx/saTH7/5eHVTtmt0W5xWQsi4JbxgO1dSJYBItM91ldKsqkFWnYAAAAAElFTkSuQmCC';
    }

    renderEnemies(enemies) {
            enemies.forEach((enemy) => {
                this.ctx.drawImage(this.sprite, enemy.spriteX, enemy.spriteY, enemy.width, enemy.height, enemy.x, 100,
                    enemy.width, enemy.height);
            });
    }
}