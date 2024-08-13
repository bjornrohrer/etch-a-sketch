const gridSide = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${sketchArea}px`;
sketchArea.style.height = `${sketchArea}px`;

function createGridCells() {
  for (let i = 0; i < rows * cols; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${gridSide / cols - 2}px`;
    gridCell.style.height = `${gridSide / rows - 2}px`;
    gridCell.classList.add("cell");
  }
}
