export interface BaseModel {
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
}

// el readonly sirve para que sea solo de lectura
