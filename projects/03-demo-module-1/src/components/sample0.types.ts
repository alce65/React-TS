export type User = {
    name: string;
    age: number;
    pet?: string;
    readonly id: string;
};

export interface UserI {
    name: string;
    age: number;
    pet?: string;
    readonly id: string;
}

export class UserC {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
