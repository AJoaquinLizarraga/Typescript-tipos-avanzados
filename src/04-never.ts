const withoutEnd = () => {
    while (true) {
        console.log('se va a descontrolar');
    }
};

/** No correr esto, es una funcion never */

const fail = (message: string) => {
    throw new Error(message);
};

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'es un string';
    } else if (Array.isArray(input)) {
        return 'Esto es un array';
    }
    return fail('No anduvo rey');
};

console.log(example('asdfasf'));
console.log(example([1, 2, 3]));
console.log(example(2));
console.log('hola despues del fail');
