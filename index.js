const { nextISSTimesForMyLocation } = require('./iss');
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log("It didn't work!", error);
  console.log(passTimes);
});
