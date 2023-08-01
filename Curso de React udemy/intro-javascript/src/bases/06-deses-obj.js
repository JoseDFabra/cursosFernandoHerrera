
//Desestructuracion
//Asignacion Desesctructurante

const persona = {
  nombre : "Maxi",
  edad: 2,
  clave: "Ironman",
  rango:"Soldado",
};

// const { nombre,edad,clave, } = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const Context = ( {nombre, edad, rango = 'Capitan', clave} ) =>{
  // console.log(nombre, edad, rango);
  return{
    nombreClave: clave,
    anios: edad,
    latlng:{
      lat:14.213,
      lng:-17-441,
    }
  }
}

const {nombreClave, anios, latlng:{lat, lng} } = Context( persona );
console.log(nombreClave, anios);
console.log( lat, lng );
