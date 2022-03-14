const pipe =
  (...fns: Array<(...arg: any) => any>) =>
  (...args: any) =>
    fns.reduce((res, fn) => [fn(...res)], args)[0];

// sem Curry
// const replace = (oldValue: string, newValue: string, input: string) =>
//   input.replace(new RegExp(oldValue, "g"), newValue);

// const replace_IIIII_V = (num: number) => replace("IIIII", "V", "I".repeat(num));

// com Curry
const replace = (oldValue: string, newValue: string) => (input: string) =>
  input.replace(new RegExp(oldValue, "g"), newValue);

const replace_IIIII_V = replace("IIIII", "V");
const replace_VV_X = replace("VV", "X");
const replace_XXXXX_L = replace("XXXXX", "L");
const replace_LL_C = replace("LL", "C");
const replace_CCCCC_D = replace("CCCCC", "D");
const replace_DD_M = replace("DD", "M");
const repeat = (str: string) => (num: number) => str.repeat(num);

const numberToRoman = (num: number) =>
  pipe(
    repeat("I"),
    replace("IIIII", "V"),
    replace("VV", "X"),
    replace("XXXXX", "L"),
    replace("LL", "C"),
    replace("CCCCC", "D"),
    replace("DD", "M"),
    replace("VIIII", "IX"),
    replace("IIII", "IV"),
    replace("LXXXX", "LC")
  )(num);

console.log(numberToRoman(114));
