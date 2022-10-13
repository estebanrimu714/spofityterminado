// GENERAR UN TOKEN AUTOMATICO

// URI

const URI = "https://accounts.spotify.com/api/token"

// DATOS DE ENVIO

const DATO1 = "grant_type=client_credentials"
const DATO2 = "client_id=04f68e9473d34215876bd5798e02d974"
const DATO3 = "client_secret=961798f5793b4acc81ddc563a4bd46a5"

// PARAMETROS PETICION 

const PETICION = {

    method: "POST",
    headers: {"Content-Type":"application/x-www-form-urlencoded"},
    body: DATO1+"&"+DATO2+"&"+DATO3

}


export async function obtenerToken(){
    let respuesta=await fetch(URI,PETICION)
    return await respuesta.json()

}

console.log(await obtenerToken())