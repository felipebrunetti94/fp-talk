// type Add = (x: number) => (y: number) => number;

// const add: Add = (x) => (y) => x + y;
// const add1 = add(1)
// const numero5 = add1(4)

// type User = {};
// type UsernameTakenError = typeof Error;
// type EmailInvalidError = typeof Error;
// type AccountAlreadyExistsError = typeof Error;
// type InsecurePasswordError = typeof Error;

// type CreateUserErrors =
//   | UsernameTakenError
//   | EmailInvalidError
//   | AccountAlreadyExistsError
//   | InsecurePasswordError;

// type CreateUser = (
//   name: string,
//   email: string,
//   password: string
// ) => Either<CreateUserErrors, User>;

// export type Either<L, A> = Left<L, A> | Right<L, A>;

// export class Left<L, A> {
//   readonly value: L;

//   constructor(value: L) {
//     this.value = value;
//   }

//   isLeft(): this is Left<L, A> {
//     return true;
//   }

//   isRight(): this is Right<L, A> {
//     return false;
//   }
// }

// export class Right<L, A> {
//   readonly value: A;

//   constructor(value: A) {
//     this.value = value;
//   }

//   isLeft(): this is Left<L, A> {
//     return false;
//   }

//   isRight(): this is Right<L, A> {
//     return true;
//   }
// }

// export const left = <L, A>(l: L): Either<L, A> => {
//   return new Left(l);
// };

// export const right = <L, A>(a: A): Either<L, A> => {
//   return new Right<L, A>(a);
// };

console.log(
  []
    .map((x) => x * 2)
    .map((x) => x + 1)
    .map((x) => x.toString())
);
