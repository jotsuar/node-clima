const axios = require('axios');

const getLugarLatLang = async (dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { "X-RapidAPI-Key": "8a4213df3amsh4565841f3bd56f1p14dfb6jsn0d9acccaa4ef" }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para la dirección ${dir}`)
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat       = data.lat;
    const lng       = data.lon;

    return {
        direccion,
        lat,
        lng
    }
        
}

module.exports = {
    getLugarLatLang
}