// Template string type
type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type User = {
    id: UUID;
    name: string;
    email: string;
    age: number;
};

export type UserList = {
    users: User[];
};

export type UserDTO = Omit<User, 'id'>;

// Type utilities
export type UserWithOptionalEmail = Omit<User, 'email'> & { email?: string };
export type UserWithOptionalAge = Omit<User, 'age'> & { age?: number };
export type UserDTOOptionals = Partial<UserDTO>;
