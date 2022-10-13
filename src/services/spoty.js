import {URI,PETICION} from '../helpers/datosPeticionGet'
import {consultarCanciones} from './servicioConsultarCanciones'
import {pintarCanciones} from '../controllers/controladorPintarCanciones'

// CONSUMIR UN API (CONSUMIR UN SERVICIO)

let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

// Renderizo los DATOS (pintar)

 pintarCanciones(canciones.tracks)


