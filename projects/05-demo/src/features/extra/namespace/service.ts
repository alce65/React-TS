// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UsersService {
    export interface User {
        id: number;
        name: string;
        email: string;
    }
    export interface UserList {
        users: User[];
    }
    export interface UserDetail {
        user: User;
    }
    export interface UserCreate {
        name: string;
        email: string;
    }
}
