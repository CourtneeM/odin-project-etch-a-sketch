const gridContainer = document.getElementById('grid-container');
const btn = document.querySelector('button');
let newSize = 16;

// 16x16 grid
function createGrid() {
  for (let i = 0; i < (newSize * newSize); i++) {
    createSquare();
  }
}

function createSquare() {
  const gridSquare = document.createElement('div');
  const gridSize = gridContainer.clientWidth;
  const squareSize = ((gridSize - (newSize * 2)) / newSize);
  gridSquare.classList.add('grid-square');
  gridSquare.style.width = `${squareSize}px`;
  gridSquare.style.height = `${squareSize}px`;
  gridContainer.appendChild(gridSquare);
}

gridContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('grid-square')) {
    e.target.classList.add('filled-square');
  }
});

btn.addEventListener('click', () => {
  newSize = prompt("How many squares per side?");

  while(gridContainer.childElementCount > 0) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  
  console.log(newSize);
  createGrid();
});

createGrid();