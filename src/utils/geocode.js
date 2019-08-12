const request = require('request');

module.exports = geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY29vbG1hcHMxOSIsImEiOiJjandoNnNyNm4xZzRwNDNveDhxbDYxdDh6In0.HLDvfCsAotXvTdwmuyDkQQ`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!');
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search!');
        } else {
            const [longitude, latitude] = response.body.features[0].center;
            const location = response.body.features[0].place_name;
            callback(null, {
                longitude,
                latitude,
                location     
            });
        }
    });
};