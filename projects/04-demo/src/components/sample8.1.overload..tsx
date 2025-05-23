/* eslint-disable react-refresh/only-export-components */
// Sobrecarga de funciones

export function format(value: string): number;
export function format(value: number, decimals?: number): string;
export function format(
    value: string | number,
    decimals?: number,
): string | number {
    return typeof value === 'number'
        ? value.toFixed(decimals && 2)
        : Number(value.trim());
}

//

const varA: string = format(10); // '10'
const varB: number = format('23.45'); // 23.45
console.log(varA, varB);

format(2, 2); // '2.00'
// @ts-expect-error No corresponde a ninguna firma
format('2', 2); // 2

// Sobrecarga de métodos

export class Formatter {
    format(value: string): number;
    format(value: number, decimals: number): string;
    format(value: string | number, decimals?: number): string | number {
        return typeof value === 'number'
            ? value.toFixed(decimals && 2)
            : Number(value.trim());
    }
}

// Ejemplo en sencillo en React

// 1️⃣ Firmas de sobrecarga

function getDisplayValue(value: Date): string;
function getDisplayValue(value: number, decimals: number): string;

// 2️⃣ Firma de Implementación & implementación
function getDisplayValue(value: number | Date, decimals?: number): string {
    if (value instanceof Date) {
        return value.toLocaleDateString();
    }

    return value.toFixed(decimals);
}

console.log(getDisplayValue(23, 2)); // '23.00'
console.log(getDisplayValue(new Date())); // '23/05/2025'

type Props = {
    label: string;
    value: number | Date;
    decimals?: number;
};

export const DisplayField: React.FC<Props> = ({ label, value, decimals }) => {
    return (
        <div>
            {value instanceof Date && (
                <p>
                    <strong>{label}:</strong>
                    <span> - </span>
                    <span>{getDisplayValue(value)}</span>
                </p>
            )}
            {typeof value === 'number' && typeof decimals === 'number' && (
                <p>
                    <strong>{label}:</strong>
                    <span> - </span>
                    <span>{getDisplayValue(value, decimals)}</span>
                </p>
            )}
        </div>
    );
};

// Ejemplo de uso en un componente padre
export const UserInfo: React.FC = () => {
    return (
        <div>
            <DisplayField label="Edad" value={28} decimals={0} />
            <DisplayField
                label="Fecha de nacimiento"
                value={new Date('1995-08-15')}
            />
        </div>
    );
};
