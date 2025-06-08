// Fusión de declaraciones (declaration merging)**:

// Declaración inicial (e.g. en una librería externa)
export interface Pet {
    name: string;
}

// Declaración adicional (e.g. en tu código)
// Esto fusionará la declaración original con la nueva propiedad 'age'
// Si la propiedad ya existe, se producirá un error de tipo
// porque no se puede redefinir una propiedad existente en una interfaz.
// Si la propiedad no existe, se añadirá correctamente.

export interface Pet {
    age: number;
}

const pet: Pet = { name: 'Rufo', age: 4 };
console.log(pet);


// Extensión de interfaces (interface extension):

interface UserI {
  name: string;
}

export interface AdminI extends UserI {
  role: string;
}

// Ejemplo de uso de la interfaz extendida
const admin: AdminI = {
    name: 'Alice',
    role: 'Administrator'
};
console.log(admin);

// Combinación de tipos = Extensión de interfaces

type User = {
  name: string;
};

type Admin = User & {
  role: string;
};

// Ejemplo de uso del tipo combinado
const admin2: Admin = {
    name: 'Bob',
    role: 'Administrator'
};
console.log(admin2);

// Puede hacerse unión entre tipos y interfaces
type UserType = {
  name: string;
  boss: string;
};

interface AdminInterface {
  name: string;
  team: string;
}

export type UserOrAdmin = UserType | AdminInterface;
