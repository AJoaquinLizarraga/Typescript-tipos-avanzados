let anyVar: any;
anyVar = 123;
anyVar = true;
anyVar = 'algo';

let unknownVar: unknown;
unknownVar = true;
unknownVar = 'string';
unknownVar = 1234;
unknownVar = {};

if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
}

const parse = (string: string): unknown => {
    return JSON.parse(string);
};
