const axios = require('axios');

const getClima = async (lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=af0748fea70804029c6a0d2155d28ba1&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}