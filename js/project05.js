const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const brushColor = document.getElementById('brushColor');
const brushSize = document.getElementById('brushSize');
const bgColor = document.getElementById('bgColor');
const undoButton = document.getElementById('undo');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');

let drawing = false;
let strokes = [];
let currentStroke = [];

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

canvas.addEventListener('mousedown', () => {
    drawing = true;
    currentStroke = [];
});

canvas.addEventListener('mousemove', (event) => {
    if (!drawing) return;
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.fillStyle = brushColor.value;
    ctx.beginPath();
    ctx.arc(x, y, brushSize.value, 0, Math.PI * 2);
    ctx.fill();
    currentStroke.push({ x, y, color: brushColor.value, size: brushSize.value });
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    strokes.push([...currentStroke]);
});

undoButton.addEventListener('click', () => {
    strokes.pop();
    redrawCanvas();
});

clearButton.addEventListener('click', () => {
    strokes = [];
    redrawCanvas();
});

saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
});

bgColor.addEventListener('input', () => {
    canvas.style.backgroundColor = bgColor.value;
});

function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes.forEach(stroke => {
        stroke.forEach(point => {
            ctx.fillStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fill();
        });
    });
}
