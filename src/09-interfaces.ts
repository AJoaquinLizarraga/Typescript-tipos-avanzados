type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
    id: string | number;
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
}

const products: Product[] = [];
products.push({
    id: 1,
    title: 'Camiseta de Dota2',
    createAt: new Date(),
    stock: 50,
    size: 'M',
});

const addProduct = (data: Product) => {
    products.push(data);
};
