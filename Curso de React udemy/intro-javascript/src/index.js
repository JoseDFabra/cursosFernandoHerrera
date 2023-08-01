

// Funciones en JS

const saludar = function( nombre ){
  return `Hola, ${nombre}`;
}//se aconseja manejar funciones como constantes porque es posible canbiar el valor de la funcion si no se declara como constante...

const saludar2 = ( nombre ) => {
  return `Hola, ${nombre}`;
}//ventaja de la fleja es quie si solo tiene solo 1 return es que se puede simplificar

const saludar3 = nombre => `Hola, ${nombre}`;

console.log(saludar);
console.log(saludar2);
console.log(saludar3);

console.log(saludar("Jose"));
console.log(saludar("Daniel"));
console.log(saludar("Fabra"));


const gerUser = ()=>({
  uid: "ABC123",
  username: "El_papi102"
});


console.log( gerUser() );

//Tarea
// 1. Transformen a una funcion de flecha
//2. tiene que retornar un obj implicito
//3. probar

function GetUserActivo ( nombre ){
  return {
    uid: "ABC567",
    username: nombre
  }
}

const usuarioActivo = GetUserActivo("Andrea");
console.log( usuarioActivo );