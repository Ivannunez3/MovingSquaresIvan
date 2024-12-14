let squares = []; // Array to store square objects
let numSquares = 20; // Number of squares to create

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numSquares; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    let speedX = random(-3, 3);
    let speedY = random(-3, 3);
    squares.push(new Square(x, y, size, speedX, speedY));
  }
}

function draw() {
  background(220);

  // Loop through all squares and update their positions
  for (let square of squares) {
    square.move();
    square.draw();
  }
}

// Function to check boundaries and reverse direction if needed
function checkBoundaries(value, min, max, speed) {
  if (value < min || value > max) {
    return -speed; // Reverse direction
  }
  return speed;
}

class Square {
  constructor(x, y, size, speedX, speedY) {
    this.x = x; // x-coordinate
    this.y = y; // y-coordinate
    this.size = size; // Size of the square
    this.speedX = speedX; // Horizontal speed
    this.speedY = speedY; // Vertical speed
  }

  draw() {
    fill(random(255), random(255), random(255));
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Check boundaries and reverse direction if needed
    this.speedX = checkBoundaries(this.x, 0, width - this.size, this.speedX);
    this.speedY = checkBoundaries(this.y, 0, height - this.size, this.speedY);
  }
}