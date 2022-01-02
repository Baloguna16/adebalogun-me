const setAlive = (aliveNeighbors, amI) => {
  if (aliveNeighbors === 3) return true;
  else if (aliveNeighbors === 2 && amI) return true;
  return false;
}

const checkNeighbors = (i, j, currGen) => {
  let aliveNeighbors = 0;
  let amI = currGen[i][j];
  let neighbors = getNeighbors(i, j, currGen);

  let index = 0;
  while (index < neighbors.length) {
    let neighI = neighbors[index][0];
    let neighJ = neighbors[index][1];
    let isAlive = currGen[neighI][neighJ];

    if (isAlive) aliveNeighbors++;
    index++;
  }
  return setAlive(aliveNeighbors, amI);;
}

const getNeighbors = (i, j, currGen) => {
  const ROWS = currGen.length - 1;
  const COLS = currGen[0].length - 1;
  const VECTORS = [
    [-1, -1], [-1, 0],
    [-1, 1], [0, -1],
    [0, 1], [1, -1],
    [1, 0], [1, 1]
  ];

  let neighbors = [];

  let index = 0;
  while (index < VECTORS.length) {
    let neighI = VECTORS[index][0] + i;
    let neighJ = VECTORS[index][1] + j;

    if (0 <= neighI && neighI <= ROWS)
      if (0 <= neighJ && neighJ <= COLS)
        neighbors.push([neighI, neighJ]);
    index++;
  }
  return neighbors;
}

const respawn = (i, j, currGen, nextGen) => {
  let isAlive = checkNeighbors(i, j, currGen);
  let neighbors = getNeighbors(i, j, currGen);
  nextGen[i][j] = isAlive;

  let index = 0;
  while (index < neighbors.length) {
    let neighI = neighbors[index][0];
    let neighJ = neighbors[index][1];
    if (nextGen[neighI][neighJ] === "X")
      respawn(neighI, neighJ, currGen, nextGen);
    index++;
  }
}

export const regenerate = (currGen, nextGen) => {
  respawn(0, 0, currGen, nextGen);
  return nextGen;
}

export const createNull2D = (currGen) => {
  let null2D = [];
  const ROWS = currGen.length;
  const COLS = currGen[0].length;

  for (let i = 0; i < ROWS; i++) {
    let nullRow = [];
    for (let j = 0; j < COLS; j++)
      nullRow.push("X");
    null2D.push(nullRow);
  }
  return null2D;
}

export const initialize = (rows, cols, seed) => {
  let newGen = [];

  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < cols; j++) {
      let isAlive = Math.random() < seed;
      newRow.push(isAlive);
    }
    newGen.push(newRow);
  }
  return newGen;
}
