let rowPosition = 0;
let colPosition = 0;
const POSITIVE_BORDER = 25;
const NEGATIVE_BORDER = -25;

document.getElementById('right').addEventListener('click', () => {
  document.getElementById('outerDiv').innerHTML = '';
  POSITIVE_BORDER === colPosition
    ? alert('Max position reached')
    : (colPosition += 5);
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

document.getElementById('left').addEventListener('click', () => {
  NEGATIVE_BORDER === colPosition
    ? alert('Max position reached')
    : (colPosition -= 5);
  document.getElementById('outerDiv').innerHTML = '';
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

document.getElementById('up').addEventListener('click', () => {
  NEGATIVE_BORDER === rowPosition
    ? alert('Max position reached')
    : (rowPosition -= 5);
  document.getElementById('outerDiv').innerHTML = '';
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

document.getElementById('down').addEventListener('click', () => {
  POSITIVE_BORDER === rowPosition
    ? alert('Max position reached')
    : (rowPosition += 5);

  document.getElementById('outerDiv').innerHTML = '';
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});
