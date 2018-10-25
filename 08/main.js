const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 390;
canvas.heigth = 560;
ctx.strokeStyle = '#fabada';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 25;
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw (e){
    if(!isDrawing)return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 60%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;

    hue++;
  if (hue >= 360) {
    hue = 0;
  }

    if (ctx.lineWidth >= 25 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      if(direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
}

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown',(e)=> {
    isDrawing =true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); 