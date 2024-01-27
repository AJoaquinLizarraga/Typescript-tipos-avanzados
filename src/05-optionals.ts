export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number
) => {
    return {
        id,
        isNew: isNew ?? true,
        stock: stock ?? 10,
    };
};

const product1 = createProduct(1, true, 12);
const product2 = createProduct(1, true);
const product3 = createProduct(1, false, 0);

console.log(product1, product2, product3);
