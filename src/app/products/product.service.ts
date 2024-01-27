import { Product } from './product.model';

import {
    CreateProductDto,
    FindProductDto,
    UpdateProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
    const newProduct = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.anytime(),
            updatedAt: faker.date.anytime(),
        },
    };
    products.push(newProduct);
    return newProduct;
};

export const getProduct = (data: Product) => {
    //
};
export const updateProduct = (
    id: Product['id'],
    changes: UpdateProductDto
): Product => {
    const index = products.findIndex((item) => item.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes,
    };
    return products[index];
};
export const deleteProduct = (data: Product) => {
    //
};

export const findProduct = (dto: FindProductDto): Product[] => {
    // dto.tags = [];
    // dto.tags?.pop();
    return products;
};
