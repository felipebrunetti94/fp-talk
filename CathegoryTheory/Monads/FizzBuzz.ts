class Handled {
  value: string;
  constructor(Value: string) {
    this.value = Value;
  }
}

class Unhandled {
  value: number;
  constructor(Value: number) {
    this.value = Value;
  }
}

// type Handled = string;
// type Unhandled = number;
type FizzBuzzResult = Handled | Unhandled;

const isDivisibleBy = (dividend: number, divisor: number) =>
  dividend % divisor === 0;

const handle =
  (divisor: number, label: string) =>
  (n: number): FizzBuzzResult =>
    isDivisibleBy(n, divisor) ? new Handled(label) : new Unhandled(n);

const ifUnhandledDo = (fn: (arg: any) => any, result: FizzBuzzResult) =>
  result instanceof Handled ? result : fn(result.value);

const FizzBuzz = (n: number) => {
  const result15 = handle(15, "FizzBuzz");
  result15(n) instanceof Handled ? Handled.value : 
};
