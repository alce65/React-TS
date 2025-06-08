/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Inferencia de tipos

let x = 10; // x: number
//@ts-expect-error Error: Type 'string' is not assignable to type 'number'
x = 'Hola';

// Inferencia de tipos en objetos
let user = {
    name: 'John',
    age: 30,
    pet: 'Dog',
    id: '12345',
}; // user: { name: string; age: number; pet?: string; id: string; }

//@ts-expect-error Error: Type 'number' is not assignable to type 'string'
user.id = 12345;
//@ts-expect-error Error: Property 'job' does not exist on type '{ name: string; age: number; pet?: string; id: string; }'.
user.job = 'Developer';

// ESLint rule trivially inferred

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
let state: boolean = false;

// Tipos literales en las const
let num = 10; // num: number
const twenty = 20; // twenty: 20

// Tipos literales con let y as const
let str = 'Hello'; // str: string
str = 'World'; // str: string
let greeting = 'Hello' as const; // greeting: 'Hello'
// @ts-expect-error Error: Type '"World"' is not assignable to type '"Hello"'
greeting = 'Hi'; 

// Declaración y posterior asignación: Type Any

let bad; // x: any
bad = 10; // x: any
bad = 'Hola'; // x: any

// Type annotation -> soluciona el problema anterior
let good: string; // x: string
// @ts-expect-error Error: Type 'number' is not assignable to type 'string'
good = 10; // x: string
good = 'Hola'; // x: string

// Parámetros de las fucciones
// Anotación de tipos en los parámetros
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// @ts-expect-error Error: Argument of type 'number' is not assignable to parameter of type 'string'.
greet(123); // x: string
