const gridSide = 960;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${sketchArea}px`;
sketchArea.style.height = `${sketchArea}px`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells() {
  const numberOfSquares = squaresPerSide * squaresPerSide;
  const widthOrHeight = `${gridSide / squaresPerSide - 2}px`;
  for (let i = 0; i < numberOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = widthOrHeight;
    gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor);
  }
}

createGridCells();
