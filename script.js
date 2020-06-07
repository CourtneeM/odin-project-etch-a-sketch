const gridContainer = document.getElementById('grid-container');
const controls = document.getElementById('controls');
const btns = document.querySelectorAll('button');
let squaresPerSide = 16;
let randomColor = false;
let grayscale = false;
let grayShade = 0;


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
  while (gridContainer.childElementCount > 0) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createGrid() {
  for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    createSquare();
  }
}

controls.addEventListener('click', e => {
  if (e.target.id === 'resize') {
    do {
      squaresPerSide = prompt("How many squares per side? 2-64 recommended. (Larger grids may take a moment to load)")
    } while (squaresPerSide < 1 || squaresPerSide == NaN);
    randomColor = false;
    grayscale = false;
    resetGrid();
    createGrid(); 
  }

  if (e.target.id === 'reset') {
    randomColor = false;
    grayscale = false;
    resetGrid();
    createGrid(); 
  } 

  if (e.target.id === 'color') {
    grayscale = false;
    randomColor = true;
  }
 
  if (e.target.id === 'grayscale') {
    randomColor = false;
    grayscale = true;
  }

});

gridContainer.addEventListener('mouseover', e => {
  if (e.target.classList.contains('grid-square')) {
    if (randomColor) {
      e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    } else if (grayscale) {
      grayShade += 0.1;
      if (grayShade > 1) { grayShade = .1 };
      e.target.style.backgroundColor = `rgba(0,0,0,${grayShade})`;
    } else {
      e.target.style.backgroundColor = `#000`;
    }
  }
});

createGrid();