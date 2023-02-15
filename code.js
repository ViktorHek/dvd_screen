const conatinerHeight = 500;
const conatinerWidth = 800;
const boxSize = 100;
const colors = ['red', 'green', 'blue', 'black']

let interval1;
let x = 1;
let y = 1;
let down = true;
let right = true;
let colorIndex = 0

function init() {
  if (!interval1) {
    interval1 = setInterval(changePos, 10);
  }
}

function changePos() {
  const box = document.getElementById("box");
  if (x === conatinerHeight - boxSize || x === 0) {
    down = !down;
    changeColor()
  }
  if (y === conatinerWidth - boxSize || y === 0) {
    right = !right;
    changeColor()
  }

  if (down) {
    x ++;
  } else {
    x --;
  }
  if (right) {
    y ++;
  } else {
    y --;
  }

  box.style.top = `${x}px`;
  box.style.left = `${y}px`;
}

function changeColor() {
  const box = document.getElementById("box");
  box.style.backgroundColor = colors[colorIndex]
  if(colorIndex === colors.length- 1) {
    colorIndex = 0 
  } else {
    colorIndex ++
  }
}