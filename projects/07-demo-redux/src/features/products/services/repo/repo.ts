export type DTO<T> = Omit<T, 'id'>;

export interface Repository<T extends { id: unknown }> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    create(user: DTO<T>): Promise<T>;
    update(id: T['id'], item: Partial<DTO<T>>): Promise<T>;
    delete(id: T['id']): Promise<void>;
}
