
//Arreglos js

// const arreglo =  new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)     no se usa el push para agregar objetos al arreglo 
// arreglo.push(4)

let arreglo2 = [...arreglo, 5];
// arreglo2.push( 5 );

const arreglo3 = arreglo2.map( function(n){
  return n*2
} );


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);