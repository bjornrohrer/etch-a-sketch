const gridSide = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${sketchArea}px`;
sketchArea.style.height = `${sketchArea}px`;

const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
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

function removeGridCells() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

slider.oninput = function () {
  let txt = `${this.value} x ${this.value} (Resolution)`;
};

createGridCells(16);
