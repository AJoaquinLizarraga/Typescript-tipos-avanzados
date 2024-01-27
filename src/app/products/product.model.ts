import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
    //aqui BaseModel es otro modelo con parametros que los comparte y hereda hacia Product
    title: string;
    image: string;
    description: string;
    stock: number;
    size?: Sizes;
    color: string;
    price: number;
    category: Category;
    isNew: boolean;
    tags: string[];
}

// type CreateProductDto = Omit<
//     Product,
//     'id' | 'createdAt' | 'updatedAt' | 'category'
// >;
