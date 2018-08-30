export function createSpriteFromText(kontra, text, x, y, color = 'white') {
    return kontra.sprite({
        color: color,
        render: function () {
            this.context.font = '30px Arial';
            this.context.fillStyle = this.color;
            this.context.fillText(text, x, y);
        }
    });
}

export function createBackground(kontra, color) {
    return kontra.sprite({
        x: 0,
        y: 0,
        color: color,
        width: kontra.canvas.width,
        height: kontra.canvas.height
    });
}