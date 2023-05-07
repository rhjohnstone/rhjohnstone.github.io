const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext('2d');

// define a list of colors
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

// loop to draw random lines
for (let i = 0; i < 1000; i++) {
    // set random pen color
    const color = colors[Math.floor(Math.random() * colors.length)];

    // set random line width
    const line_width = Math.floor(Math.random() * 20) + 1;

    // set random line coordinates
    const x1 = Math.floor(Math.random() * canvas.width);
    const y1 = Math.floor(Math.random() * canvas.height);
    const x2 = Math.floor(Math.random() * canvas.width);
    const y2 = Math.floor(Math.random() * canvas.height);

    // draw random line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.stroke();
}

document.body.appendChild(canvas);
