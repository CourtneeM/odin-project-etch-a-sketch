const gridContainer = document.getElementById('grid-container');
const btn = document.querySelector('button');



// 16x16 grid
function createGrid() {
  for (let i = 0; i < 256; i++) {
    createSquare();
  }
}

function createSquare() {
  const gridSquare = document.createElement('div');
  const gridSize = gridContainer.clientWidth;
  const squareSize = ((gridSize - 32) / 16);
  gridSquare.classList.add('grid-square');
  gridSquare.style.width = `${squareSize}px`;
  gridSquare.style.height = `${squareSize}px`;
  gridContainer.appendChild(gridSquare);
}

createGrid();


gridContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('grid-square')) {
    e.target.classList.add('filled-square');
  }
});


let newSize;
btn.addEventListener('click', () => {
  newSize = prompt("How many squares per side?");

  while(gridContainer.childElementCount > 0) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  console.log(gridContainer.childElementCount);
  
  console.log(newSize);
  createGrid();
});

