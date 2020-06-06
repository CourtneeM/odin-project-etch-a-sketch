const randomColor = Math.floor(Math.random()*16777215).toString(16);
const gridContainer = document.getElementById('grid-container');
const controls = document.getElementById('controls');
const btns = document.querySelectorAll('button');
let squaresPerSide = 16;
let squareColor = '000';

function createGrid() {
  for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    createSquare();
  }
}

function createSquare() {
  const gridSquare = document.createElement('div');
  const gridSize = gridContainer.clientWidth;
  const squareSize = ((gridSize - (squaresPerSide * 2)) / squaresPerSide);
  gridSquare.classList.add('grid-square');
  gridSquare.style.width = `${squareSize}px`;
  gridSquare.style.height = `${squareSize}px`;
  gridContainer.appendChild(gridSquare);
}

function resetGrid() {
  while(gridContainer.childElementCount > 0) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

gridContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('grid-square')) {
    e.target.style.backgroundColor = `#${squareColor}`;
    console.log(squareColor);
  }
});

controls.addEventListener('click', e => {
  if(e.target.id === 'resize') {
    squaresPerSide = prompt("How many squares per side? 2-64 recommended.");
  }

  if(e.target.id === 'reset') {
    squareColor = '000';
  } 

  if(e.target.id === 'color') {
    return squareColor = randomColor;
  }

  resetGrid();
  createGrid(); 

});

gridContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('grid-square')) {
    e.target.style.backgroundColor = `#${squareColor}`;
    console.log(squareColor);
  }
});

createGrid();