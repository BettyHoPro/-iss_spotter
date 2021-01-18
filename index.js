 const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  // let lat = latitude;
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('it worked! my ip is '+ ip)

  fetchCoordsByIP(ip, (err, {latitude, longitude})=>{
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    console.log(`it worked! my coordinates are latitude: ${latitude}, longitude: ${longitude}`)

  })
});
