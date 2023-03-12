

//  METODOS DE ARREGLO

var amigos = ['Dayana', 'Angel', 'Richar', 'Dario'];



// ---- Metodo length -------

console.log(amigos.length); // cantidad de elementos de arreglo

// ---- Metodo Join

var string = amigos.join('-'); // unir todo el array en un String separado por el parametro de la función
console.log(string)

// ---- Metodo Pop y Push
// pop eliminar el ultimo elemto del array
// push agregar elemento a la lista al final

amigos.pop();

console.log(amigos)
amigos.push('Algo jaja')
console.log(amigos)

// ---- Metodo Shift y Unshift

amigos.shift(); // elimina el primer elemento
console.log(amigos)
amigos.unshift('anto')
console.log(amigos)

// ---- Metodo concat

var amigos2 = ['Lucy', 'Oscar'],
    amicoo = ['Leo'],
    todosAmmigos = amigos.concat(amigos2, amicoo);
console.log(todosAmmigos);

// ---- Metodo Sort y Reverse

// sort ordenar alfabeticamente-SOLO CADENA DE TEXTO
amigos.sort();
console.log(amigos)

// reverse orden alreves
amigos.reverse(amigos)
console.log(amigos)