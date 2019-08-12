const request = require('request');

module.exports = forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/53d2ba527d49f587eb626387ec0ced14/${lat},${long}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (response.body.error) {
            callback(null, 'Unable to find location!');
        } else {
            callback(null, {
                forecast: response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.',
                weekly: response.body.daily.summary
            });
        }
    });
};