import { ReadOnly } from 'aws-sdk/clients/fsx';
import { Product } from './product.model';

/** */
/**Omit omite los campos colocados en string de una interface o type en una nueva interface */
/** */
export interface CreateProductDto
    extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}

/** */
/** Con Pick se crea un nuevo type o interface con los campos seleccionados*/
/** */
export type Example = Pick<Product, 'isNew' | 'color'>;
export type Example2 = Required<Product>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface UpdateAllProductDto extends Required<Product> {}

export interface FindProductDto
    extends Readonly<Partial<Omit<Product, 'tags'>>> {
    readonly tags: ReadonlyArray<string>;
}
