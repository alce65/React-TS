import { User, UserDTO, UserRepository } from "./repo";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    private _generateID(): number {
        return this.users.length
            ? Math.max(...this.users.map((u) => u.id)) + 1
            : 1;
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }
    async getUserById(id: number): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        if (!user) throw new Error("User not found");
        return user;
    }
    async createUser(user: UserDTO): Promise<User> {
        const newUser = { ...user, id: this._generateID() };
        this.users.push(newUser);
        return newUser;
    }

    async updateUser(id: number, user: Partial<UserDTO>): Promise<User> {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) throw new Error("User not found");
        this.users[index] = { ...this.users[index], ...user };
        return this.users[index];
    }

    async deleteUser(id: number): Promise<void> {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) throw new Error("User not found");
        this.users.splice(index, 1);
    }
}
