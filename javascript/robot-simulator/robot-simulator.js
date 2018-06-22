const Directions = [ "north", "east", "south", "west" ];

const Instructions = {
  'L': 'turnLeft',
  'R': 'turnRight',
  'A': 'advance'
}

// Assumes direction is valid
function rotateLeft( direction ){
  let current = Directions.indexOf(direction);
  return (current == 0) ? "west" : Directions[current-1];
}

// Assumes direction is valid
function rotateRight( direction ){
  let current = Directions.indexOf(direction);
  return (current == 3) ? "north" : Directions[current+1];
}

const Robot = function(){
  this.coordinates = [ 0, 0 ];
  this.bearing = "north";
}

Robot.prototype.orient = function( newBearing ) {
  if(Directions.indexOf(newBearing) != -1) {
    this.bearing = newBearing;
  } else {
    throw new Error('Invalid Robot Bearing');
  }
}

Robot.prototype.turnLeft = function(){
  this.bearing = rotateLeft(this.bearing);
}

Robot.prototype.turnRight = function(){
  this.bearing = rotateRight(this.bearing);
}

Robot.prototype.at = function(x, y){
  this.coordinates[0] = x;
  this.coordinates[1] = y;
}

Robot.prototype.advance = function(){
  switch(this.bearing){
    case "north" : {
      this.coordinates[1]++;
      break;
    }
    case "east" : {
      this.coordinates[0]++;
      break
    }
    case "south" : {
      this.coordinates[1]--;
      break;
    }
    case "west" : {
      this.coordinates[0]--;
      break;
    }
    default : {
      throw new Error("Invalid bearing")
    }
  }
}

Robot.prototype.instructions = function( letters ){
  let givenInstructions = []
  letters.split("").forEach( current => {
    givenInstructions.push(Instructions[current]);
  });
  return givenInstructions
}

Robot.prototype.place = function( ops ){
  this.coordinates[0] = ops.x;
  this.coordinates[1] = ops.y;
  this.bearing = ops.direction
}

Robot.prototype.evaluate = function( letters ){
  this.instructions( letters ).forEach(current => {
    this[current]();
  });
}

module.exports = Robot;
