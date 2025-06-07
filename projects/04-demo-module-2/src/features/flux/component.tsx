/* eslint-disable react-refresh/only-export-components */
// 1 Definición del estado

import { useReducer } from 'react';

// type State = {
//     sourceLanguage: string;
//     destinationLanguage: string;
//     sourceText: string;
//     destinationText: string;
//     isLoading: boolean;
// };

// 5. Definición de las posibles tipos acciones

// type Action =
//     | { type: "INTERCHANGE_LANGUAGE";}
//     | { type: "SET_SOURCE_LANGUAGE"; payload: string }
//     | { type: "SET_DESTINATION_LANGUAGE"; payload: string }
//     | { type: "SET_SOURCE_TEXT"; payload: string }
//     | { type: "SET_DESTINATION_TEXT"; payload: string }
//     | { type: "SET_IS_LOADING"; payload: boolean };

// 6. Ajuste de los tipos de las accinones

export const VALID_LANGUAGES = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    pt: 'Portuguese',
    ru: 'Russian',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
};

export const AUTO_LANGUAGE = 'auto';

type Language = keyof typeof VALID_LANGUAGES;
type SourceLanguage = Language | typeof AUTO_LANGUAGE;

// const ACTION_TYPES = {
//     interchange: "INTERCHANGE_LANGUAGE",
//     setSource: "SET_SOURCE_LANGUAGE",
//     setDestination: "SET_DESTINATION_LANGUAGE",
//     source: "SET_SOURCE_TEXT",
//     result: "SET_DESTINATION_TEXT",
//     isLoading: "SET_IS_LOADING",
// } as const;

type Action =
    | { type: 'INTERCHANGE_LANGUAGE' }
    | { type: 'SET_SOURCE_LANGUAGE'; payload: SourceLanguage }
    | { type: 'SET_DESTINATION_LANGUAGE'; payload: Language }
    | { type: 'SET_SOURCE_TEXT'; payload: string }
    | { type: 'SET_DESTINATION_TEXT'; payload: string }
    | { type: 'SET_IS_LOADING'; payload: boolean };

// Con los nuevos tipos, refinamos el tipado del estado

type State = {
    sourceLanguage: SourceLanguage;
    destinationLanguage: Language;
    sourceText: string;
    destinationText: string;
    isLoading: boolean;
};

// 2. Creación del estado inicial
const initialState: State = {
    sourceLanguage: 'en',
    destinationLanguage: 'es',
    sourceText: '',
    destinationText: '',
    isLoading: false,
};

// 3. Creación del useReducer
// Una función pura que toma el estado actual y una acción
// y devuelve un nuevo estado
const reducer = (state: State, action: Action): State => {
    // Lógica del reducer antes de tener acciones
    // if (action) {
    //     return {
    //         ...state,
    //     }
    // }
    // return {
    //     ...state,
    // }

    // 7. Definición de la lógica del reducer

    switch (action.type) {
        case 'INTERCHANGE_LANGUAGE':
            // Lógica de gestión del estado

            if (state.sourceLanguage === AUTO_LANGUAGE) {
                return { ...state };
            }
            return {
                ...state,
                sourceLanguage: state.destinationLanguage,
                destinationLanguage: state.sourceLanguage,
            };
        case 'SET_SOURCE_LANGUAGE':
            return {
                ...state,
                sourceLanguage: action.payload,
            };
        case 'SET_DESTINATION_LANGUAGE':
            return {
                ...state,
                destinationLanguage: action.payload,
            };
        case 'SET_SOURCE_TEXT':
            return {
                ...state,
                sourceText: action.payload,
            };
        case 'SET_DESTINATION_TEXT':
            return {
                ...state,
                destinationText: action.payload,
            };
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return { ...state };
    }
};

export const Translator: React.FC = () => {
    // 4. Uso del useReducer
    // Manejo de estados dependiente de acciones y reducers
    // devuelve el estado y la función dispatch
    // dispatch es una función que se utiliza para enviar acciones al reducer

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Traductor</h3>
            <p>Traductor is a simple translation tool.</p>
            <p>
                It uses the Google Translate API to translate text from one
                language to another.
            </p>
            <p>
                It supports multiple languages and can be used for both personal
                and professional purposes.
            </p>
            <p>
                From {state.sourceLanguage} to {state.destinationLanguage}{' '}
            </p>

            <button
                disabled={state.sourceLanguage === AUTO_LANGUAGE}
                onClick={() => dispatch({ type: 'INTERCHANGE_LANGUAGE' })}
            >
                Interchange Language
            </button>
        </div>
    );
};
