const gridSide = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${sketchArea}px`;
sketchArea.style.height = `${sketchArea}px`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells() {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${gridSide / squaresPerSide - 2}px`;
    gridCell.style.height = `${gridSide / squaresPerSide - 2}px`;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor);
  }
}

createGridCells();
