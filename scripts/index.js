// Triangle function
function calculateTriangleResult() {
  const base = getInputValue("triangle-base");
  const hight = getInputValue("triangle-hight");
  const result = 0.5 * base * hight;
  setTheCalculatedArea("triangle-result", result);
}
// Rectangle function
function calculateRectangle() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  const result = width * length;
  setTheCalculatedArea("rectangle-result", result);
}
// Parallelogram function
function calculateParallelogram() {
  const base = getInputValue("parallelogram-base");
  const hight = getInputValue("parallelogram-hight");
  const result = base * hight;
  setTheCalculatedArea("parallelogram-result", result);
}
// Rhombus function
function calculateRhombus() {
  const d1 = getInputValue("d1");
  const d2 = getInputValue("d2");
  const result = 0.5 * d1 * d2;
  setTheCalculatedArea("rhombus-result", result);
}

// Pentagon function
function calculatePentagon() {
  const p = getInputValue("p");
  const b = getInputValue("b");
  const result = 0.5 * p * b;
  setTheCalculatedArea("pentagon-result", result);
}
// Ellipse function
function calculateEllipse() {
  const area = getInputValue("ellipse-area");
  const base = getInputValue("ellipse-base");
  const result = 3.14 * area * base;
  setTheCalculatedArea("ellipse-result", result);
}
// The Universal function of input values and Two and Three calculation

function getInputValue(theInput) {
  const inputArea = document.getElementById(theInput);
  const inputAreaValue = inputArea.value;
  const inputValue = parseFloat(inputAreaValue);
  return inputValue;
}

function setTheCalculatedArea(show, resultX) {
  const theAreaToSHow = document.getElementById(show);
  theAreaToSHow.innerText = resultX;
}

// Dev code: Wahiduzzaman wahid