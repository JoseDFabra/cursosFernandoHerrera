
//Desectructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3)

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);




const retornaArreglo  = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea
// 1. el primer valor de arr se llamara nombre
// 2. se llamara losnombre
const State = ( valor ) =>{
  return[valor, ()=>{console.log('Hola Mundo')}];
}

const arr =   State('Cualquier cosa');

console.log(nombre);
losnombre();
