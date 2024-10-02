const { Engine, Render, Runner, Composite, Bodies, Body, Events} =
  Matter;

const cellsHorizontal = 14;
const cellsVertical = 10;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height,
    wireframes: false,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);



// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
Composite.add(world, walls);

// Maze Generation

const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0){
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

const grid = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal).fill(false));
const verticals = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal - 1).fill(false));
const horizontals = Array(cellsVertical - 1).fill(null).map(() => Array(cellsHorizontal).fill(false));


const startRow = Math.floor(Math.random() * cellsVertical)
const startColumn = Math.floor(Math.random() * cellsHorizontal)


const recurseCellStep = (row, column) => {
  // If I have visited the cell at [row,column], then return
  if (grid[row][column]) {
    return;
  }
  //Mark this cell as being visited
  grid[row][column] = true;
  //Assemble randomly-ordered list of neighbors
const neighbors = shuffle([
  [row -1, column,'up'],
  [row, column +1, 'right'],
  [row + 1, column,'down'],
  [row, column - 1, 'left']
]);

  //For each neighbor...
for (let neighbor of neighbors){
  const [nextRow, nextColumn, direction] = neighbor;


  //see if that neighbor is out of bounds
  if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
    continue;
  }
  // if we have visited that neighbor, continue to next neighbor
  if (grid[nextRow][nextColumn]){
    continue;
  }
  //remove wall from either horizontals or verticals
  if (direction === 'left'){
    verticals[row][column - 1] = true;
  } else if ( direction === 'right'){
    verticals[row][column] = true;
  } else if (direction === 'up'){
    horizontals[row - 1][column] = true;
  } else if (direction === 'down') {
    horizontals[row][column] = true;
  }

  recurseCellStep(nextRow, nextColumn);
}
  // visit that next cell
};

recurseCellStep(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open){
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      10,
      {
        isStatic: true,
        label: 'wall',
        render: {
          fillStyle: 'cyan'
        }
      }
    );
    Composite.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex)=>{
    if (open){
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      10,
      unitLengthY,
      {
        isStatic: true,
        label: 'wall',
        render: {
          fillStyle: 'Cyan'
        }
      }
    )
    Composite.add(world, wall)
  })
})

// goal
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * .7,
  unitLengthY * .7,
  {
    isStatic: true,
    label: "goal",
    render: {
      fillStyle: 'purple'
    }
  }

);
Composite.add(world, goal);

//Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball= Bodies.circle(
  unitLengthX / 2,
  unitLengthY / 2,
  ballRadius * .8,
  {
    label: "ball",
    render: {
      fillStyle: 'hotpink'
    }
  }
);
Composite.add(world,ball)

document.addEventListener('keydown', event =>{
  const {x,y} = ball.velocity;
  if (event.key === 'w'){
    Body.setVelocity(ball,{x: x, y: y - 5})
  }
  if (event.key === 'd'){
    Body.setVelocity(ball, {x: x + 5, y: y})
  }
  if (event.key === 's'){
    Body.setVelocity(ball, {x: x, y: y + 5})
  }
  if (event.key === 'a'){
    Body.setVelocity(ball, {x: x - 5, y: y})
  }
})

// Win Condition


Events.on(engine, 'collisionStart', event => {
  event.pairs.forEach(collision => {
    const labels = ["ball", "goal"];

    if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)){
      document.querySelector('.winner').classList.remove('hidden')
      world.gravity.y = .2;
      world.bodies.forEach(body => {
        if (body.label === 'wall'){
          Body.setStatic(body, false);
        }
        
      })
    }

  })

})




