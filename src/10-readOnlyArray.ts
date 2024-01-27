const numbers: ReadonlyArray<number> = [1, 2, 3, 4];
// numbers.push(9);
// numbers.pop();
// numbers.unshift(1);  estos no andan porque es un array de solo lectura, no funciona ningun metodo que modifique el array
numbers.map((item) => {
    item;
});
