import { URL } from "../config";
import type { User, UserDTO, UserRepository } from "./repo";

export class ApiUserRepository implements UserRepository {
    private apiUrl = URL;

    async getUserById(id: number): Promise<User> {
        const response = await fetch(`${this.apiUrl}/${id}`);
        return response.json();
    }

    async getUsers(): Promise<User[]> {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error("Error fetching users");
        }
        return response.json();
    }

    async createUser(user: UserDTO): Promise<User> {
        const response = await fetch(this.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return response.json();
    }

    async updateUser(id: number, user: Partial<UserDTO>): Promise<User> {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Error updating users");
        }
        return response.json();
    }
    async deleteUser(id: number): Promise<void> {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Error updating users");
        }
    }
}
