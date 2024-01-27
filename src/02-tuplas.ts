const prices: (number | string)[] = [1, 2, 3, 4, 'asdasdf'];
// los arrays tienen infinitos numeros de posiciones

let user: [string, number] = ['Joaquin', 15]; //esto es una tupla, dentro del tipado del array se colocan los tipos para esa posicion en especifico, ni mas ni menos

// user = []
user = ['Emanuel', 26];

const [username, age] = user;

console.log(username, age);
