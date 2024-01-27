import { faker } from '@faker-js/faker';
import {
    addProduct,
    findProduct,
    products,
    updateProduct,
} from './products/product.service';

for (let i = 0; i < 10; i++) {
    addProduct({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        color: faker.color.rgb(),
        price: parseInt(faker.commerce.price(), 10),
        size: faker.helpers.arrayElement(['L', 'M', 'S', 'XL']),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(
            ['prueba1', 'prueba2', 'prueba3', 'prueba4'],
            2
        ),
        stock: faker.number.int({ min: 10, max: 100 }),
        categoryId: faker.string.uuid(),
    });
}

console.log(products);
const product = products[0];
// updateProduct(product.id, title: 'New Title') // Esto no funciona sin el Partial
updateProduct(product.id, { title: 'New Title', price: 80, stock: 200 });

findProduct({
    stock: 10,
    color: 'red',
    isNew: true,
    tags: ['1', '2', '3'],
});
