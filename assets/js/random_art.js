const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Make the canvas a square that fills the available width,
// but never grows beyond 600px on large screens.
const size = Math.min(600, canvas.parentElement.clientWidth);

// Account for high-resolution (retina) screens so lines stay crisp.
const dpr = window.devicePixelRatio || 1;

// Display (CSS) size, in layout pixels...
canvas.style.width = size + 'px';
canvas.style.height = size + 'px';

// ...and the backing buffer, in device pixels.
canvas.width = size * dpr;
canvas.height = size * dpr;

// Draw using CSS-pixel coordinates regardless of pixel ratio.
ctx.scale(dpr, dpr);

// define a list of colors
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

// loop to draw random lines
for (let i = 0; i < 1000; i++) {
    // set random pen color
    const color = colors[Math.floor(Math.random() * colors.length)];

    // set random line width
    const line_width = Math.floor(Math.random() * 20) + 1;

    // set random line coordinates (in CSS pixels, so within `size`)
    const x1 = Math.floor(Math.random() * size);
    const y1 = Math.floor(Math.random() * size);
    const x2 = Math.floor(Math.random() * size);
    const y2 = Math.floor(Math.random() * size);

    // draw random line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.stroke();
}
