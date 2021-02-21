function create2DArray(rows, cols, value) {
  let map = [];
  for (let i = 0; i < rows; i++) {
    map[i] = [];
    for (let j = 0; j < cols; j++) {
      if (value === undefined) {
        value = j;
      }
      map[i][j] = value;
    }
  }
  return map;
}

function createRows(id) {
  let outerDiv = document.getElementById('outerDiv');
  let newDiv = document.createElement('div');
  newDiv.id = id;
  newDiv.className = 'divs';
  outerDiv.appendChild(newDiv);
}

function createCols(row, i, j) {
  let p = document.createElement('p');
  p.id = `x${j}-y${i}`;
  p.className = 'row-elements';
  p.innerHTML = `R${i}:C${j} `;
  p.addEventListener('click', () => {
    console.log(`You clicked at row: ${i} column ${j}`);
  });
  row.appendChild(p);
}

function renderRows(xPosition) {
  for (let i = xPosition; i < xPosition + 5; i++) {
    createRows('row-' + i);
  }
}

function renderCols(xPosition, yPosition) {
  for (let i = xPosition; i < xPosition + 5; i++) {
    let row = document.getElementById('row-' + i);
    for (let j = yPosition; j < yPosition + 5; j++) {
      createCols(row, i, j);
    }
  }
}

let rowPosition = 0;
let colPosition = 0;

document.getElementById('right').addEventListener('click', () => {
  document.getElementById('outerDiv').innerHTML = '';
  colPosition += 5;
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

document.getElementById('left').addEventListener('click', () => {
  document.getElementById('outerDiv').innerHTML = '';
  colPosition -= 5;
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

document.getElementById('up').addEventListener('click', () => {
  document.getElementById('outerDiv').innerHTML = '';
  rowPosition -= 5;
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

document.getElementById('down').addEventListener('click', () => {
  document.getElementById('outerDiv').innerHTML = '';
  rowPosition += 5;
  renderRows(rowPosition);
  renderCols(rowPosition, colPosition);
  reRender();
});

let startAt = 0;
renderRows(startAt, startAt);
renderCols(startAt, startAt);

function replaceElement(id, element) {
  if (!document.getElementById(id)) {
    return;
  }
  let currentElement = document.getElementById(id);
  if (currentElement.nodeName == 'BUTTON') {
    console.log('Player exists');
    return;
  }
  currentElement.replaceWith(element);
  element.id = id;
}
//replace element from the table with a button
let button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click', () => console.log("I'm button"));
replaceElement('x2-y1', button);

function reRender() {
  replaceElement('x2-y1', button);
}
