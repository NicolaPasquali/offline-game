export function createBackground(kontra, color) {
    return kontra.sprite({
        x: 0,
        y: 0,
        color: color,
        width: kontra.canvas.width,
        height: kontra.canvas.height
    });
}