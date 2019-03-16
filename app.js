const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) => {
    
    try{
        const coordenadas = await lugar.getLugarLatLang(direccion);
        const temperatura = await clima.getClima(coordenadas.lat,coordenadas.lng);

        return `El clima de ${direccion} es de ${temperatura} grados`

    }catch(err){
        return `No se pudo determinar el clima de ${direccion}`
    }

};

getInfo(argv.direction)
    .then(resp => {
        console.log(resp)
    })
    .catch(err => {
        console.log(err)
    })

// lugar.getLugarLatLang(argv.direction)
//      .then((resp)=> {
//         console.log(resp);
//     }); 

// clima.getClima('40.419998','-3.700000')
// .then(resp => {
//     console.log(resp)
// })
// .catch(err=>{
//     console.log(err)
// })


//status
//data