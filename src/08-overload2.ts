// Emanuel => [E,m,a,n,u,e,l]
// [E,m,a,n,u,e,l] => Emanuel

/** Esto es la sobrecarga, se tipa las posibilidades de la funcion */
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
/***************************************************************** */

export function parseStr(input: string | string[]): string | string[] {
    // aqui se cambia el tipado por unknown cuando se usa el tipado estricto en la sobrecarga
    if (Array.isArray(input)) {
        return input.join('');
    } else {
        return input.split('');
    }
}

const rtaArray = parseStr('Emanuel');

rtaArray.reverse(); // aqui si lo reconoce por el tipado de la funcion
console.log(rtaArray);
const rtaStr = parseStr(['J', 'o', 'a', 'q', 'u', 'i', 'n']);
rtaStr.includes('J'); // aqui tambien lo reconoce por ser asertivo con el tipado de la funcion
console.log(rtaStr);
