const canvas = document.querySelectorAll('.canvas');
const ctx = canvas.getContext('2D');
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function(e){
    console.log(e);
    
}

canvas.addEventListener('move')