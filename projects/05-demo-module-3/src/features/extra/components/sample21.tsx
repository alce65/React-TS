export const FILTERS = {
    all: "all",
    active: "active",
    completed: "completed",
};

export type FilterType = keyof typeof FILTERS;
export type FilterType2 = (typeof FILTERS)[keyof typeof FILTERS];

let x: FilterType = "active";
let y: FilterType2 = "active";

// @ts-expect-error Type '"invalid"' is not assignable to type 'FilterType2'
x = "invalid";
y = "invalid";

console.log(x, y);
