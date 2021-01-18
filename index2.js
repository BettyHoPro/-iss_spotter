const { nextISSTimesForMyLocation } = require('./iss_promised');
const { fetchMyIP } = require('./iss_promised');
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .then 
  
