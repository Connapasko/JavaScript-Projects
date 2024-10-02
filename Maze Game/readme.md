# Maze Game with Matter.js

This is a simple interactive maze game built using the Matter.js physics engine. The objective is to move a ball through the randomly generated maze to reach the goal. Upon reaching the goal, the walls will fall, and gravity will take over.

## Features
- **Random Maze Generation**: The maze layout is randomly generated on every page load.
- **Ball Movement**: Use keyboard keys to control the ball.
- **Win Condition**: When the ball collides with the goal, a winning message is displayed, and the maze walls collapse.
- **Responsive**: The game adapts to the size of the browser window.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/maze-game.git
   ```
2. Navigate to the project folder:
   ```bash
   cd maze-game
   ```
3. Open `index.html` in your browser to start the game.

## How to Play

Use the following keys to move the ball:
- `W`: Move up
- `A`: Move left
- `S`: Move down
- `D`: Move right

Navigate through the maze to reach the purple goal box.

## Project Structure

- **Matter.js**: Used for physics simulation.
- **Maze Generation**: Randomized recursive backtracking algorithm to generate the maze.
- **Keyboard Controls**: Use event listeners to control ball movement.
- **Collision Detection**: Matter.js Events API detects when the ball reaches the goal.

## Key Files

- **index.html**: The main entry point for the game.
- **game.js**: Contains the game logic, including maze generation, ball movement, and win condition handling.

## Dependencies

- [Matter.js](https://brm.io/matter-js/): A 2D rigid body physics engine for the web.

## Customization

You can customize the following variables to change the size and complexity of the maze:

```javascript
const cellsHorizontal = 14;
const cellsVertical = 10;
```

Modify these values to increase or decrease the number of cells in the maze.

## Future Improvements

- Add different difficulty levels.
- Add sound effects for ball movement and reaching the goal.
- Implement a timer to track how long it takes to solve the maze.


