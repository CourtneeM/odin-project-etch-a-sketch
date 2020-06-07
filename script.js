const gridContainer = document.getElementById('grid-container');
const controls = document.getElementById('controls');
const btns = document.querySelectorAll('button');
let squaresPerSide = 16;
let squareColor = '000';
let randomColor = false;

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

controls.addEventListener('click', e => {
  if(e.target.id === 'resize') {
    squaresPerSide = prompt("How many squares per side? 2-64 recommended.");
  }

  if(e.target.id === 'reset') {
    randomColor = false;
  } 

  if(e.target.id === 'color') {
    randomColor = true;
    console.log(randomColor);
  }

  resetGrid();
  createGrid(); 

});

gridContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('grid-square')) {
    console.log(randomColor);
    if (randomColor) {
      e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    } else {
      e.target.style.backgroundColor = `#${squareColor}`;
      console.log(squareColor);
    }
  }
});

createGrid();