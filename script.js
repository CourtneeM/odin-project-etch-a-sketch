const gridContainer = document.getElementById('grid-container');
const resizeBtn = document.getElementById('resize');
const resetBtn = document.getElementById('reset');
const btns = document.querySelectorAll('button');
let squaresPerSide = 16;

// 16x16 grid
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
    e.target.classList.add('filled-square');
  }
});

const controls = document.getElementById('controls');
controls.addEventListener('click', e => {
  if(e.target.id === 'resize') {
    squaresPerSide = prompt("How many squares per side? 2-64 recommended.");
  }

  if(e.target.id == 'resetBtn') {}

  resetGrid();
  createGrid();  
});

createGrid();