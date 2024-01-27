// Emanuel => [E,m,a,n,u,e,l]
// [E,m,a,n,u,e,l] => Emanuel

export function parseStr(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('');
    } else {
        return input.split('');
    }
}

const rtaArray = parseStr('Emanuel');
// rtaArray.reverse() //aqui no se reconoce el type retornado porque puede ser string o string[], hasta no usar un condicional, typescript no sabe que es
console.log(rtaArray);
const rtaStr = parseStr(['J', 'o', 'a', 'q', 'u', 'i', 'n']);
console.log(rtaStr);
