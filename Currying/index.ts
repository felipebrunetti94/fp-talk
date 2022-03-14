export const add = (x: number) => (y: number) => x + y;
export const add1 = add(1);
export const multiply = (x: number) => (y: number) => x * y;
export const double = multiply(2);

const add4 = add(4);

console.log(double(add4(5)));
