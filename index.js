

function produceDrivingRange(blockRange) {

  return function(startingDistance, endingDistance){
    let parsedStart = parseInt(startingDistance);
    let parsedEnd = parseInt(endingDistance);
    let distance = Math.abs( parsedEnd - parsedStart );
    let distanceBlockRange = blockRange - distance

    if (distanceBlockRange > 0){
      return `within range by ${distanceBlockRange}`;
    }
    else{
      return `${Math.abs(distanceBlockRange)} blocks out of range`;
    }
  };
}

function produceTipCalculator(multiplier){
  return function(fare){
    return fare * multiplier;
  }
}

function createDriver(){
  let driverId = 1;
  return class Driver{
    constructor(name, id){
      this.id = ++driverId;
      this.name = name;
    }

    }
  }
// createDriver is a function that returns a Driver class. The class
//  has reference to a driverId that is incremented each time a new driver is created.
//  The rest of the code base does not have access to driverId.
