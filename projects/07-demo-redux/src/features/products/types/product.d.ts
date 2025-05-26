export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type Product = {
    id: UUID;
    name: string;
    price: number;
    description?: string;
    image?: string;
    category?: string;
    stock?: number;
};

export type ProductDTO = Omit<Product, 'id'>;
