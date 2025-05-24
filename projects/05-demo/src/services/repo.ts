export type User = {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user";
};

export type UserDTO = Omit<User, "id">;

export interface UserRepository {
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(user: UserDTO): Promise<User>;
    updateUser(id: number, user: Partial<UserDTO>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
