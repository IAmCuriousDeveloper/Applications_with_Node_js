const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// const url = `https://api.darksky.net/forecast/3dab1c3c75d89220bb8dc8be6ad01df1/37.8267,-122.4233?units=si`;
// const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhc2hhbnRwcjciLCJhIjoiY2p5ZmNwMXYyMDF6djNobzgxYzRqeXZscSJ9.yAWHHM4TwLo45VC05eCApA&limit=1`;

geocode("melbourne", (error, { latitude, longitude, location }) => {
  if (error) {
    console.log("Error", error);
  } else {
    forecast(latitude, longitude, (error, response) => {
      console.log("Error", error);
      console.log("data", response);
      console.log(location);
    });
  }
});
