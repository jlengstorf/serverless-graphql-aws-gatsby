/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const axios = require("axios")

exports.handler = function(event, context) {
  //eslint-disable-line
  // https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139
  const { lat, lon } = event.source.location
  axios
    .get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
    .then(result => {
      const temp = result.data.main.temp
      const description = result.data.weather[0].description
      const weather = `The current temperature is ${temp} and ${description}`

      context.done(null, weather)
    })
    .catch(error => context.done(error))
}
