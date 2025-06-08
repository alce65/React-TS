// Alias de tipos
// Tipos primitivos
export type Name = string;
export type Age = number;
// Tipos compuestos
export type ListNames = string[];
export type Person = { name: string; age: number };
export type Tuple = readonly [string, number];

// Tipos de unión
export type Id = string | number;
export type Status = 'success' | 'error';
export type Firsts = 1 | 2 | 3 | 4 | 5;
export type Events = 2 | 4 | 6 | 8;

// Typos union con objetos: tipos discriminados
type Success = { status: 'success'; data: string[] };
type Fail = { status: 'error'; error: Error };
export type Response = Success | Fail;

// Tipos y funciones
type Callback = (a: number, b: number) => number;
export const add: Callback = (a, b) => a + b;
export const multiply: Callback = (a, b) => a * b;

// Tipos v. interfaces

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
