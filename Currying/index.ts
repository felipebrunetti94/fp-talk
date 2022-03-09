export const add = (x: number) => (y: number) => x + y;
export const add1 = add(1);
export const multiply = (x: number) => (y: number) => x * y;
export const double = multiply(2);
const replace = (oldValue: string, newValue: string) => (input: string) =>
  input.replace(new RegExp(oldValue, "g"), newValue);
