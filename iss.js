const request = require('request');
// const fetchMyIP = function(callback) { 
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);
//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
//       return;
//     }
//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// }


const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates. Response: ${body}`), null);
      return;
    };
    const res = JSON.parse(body);
    callback(null, {latitude: res.latitude, longitude: res.longitude});
  });
}
module.exports = { fetchMyIP, fetchCoordsByIP };
