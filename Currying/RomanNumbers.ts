const pipe =
  (...fns: Array<(...arg: any) => any>) =>
  (...args: any) =>
    fns.reduce((res, fn) => [fn(...res)], args)[0];
// sem Curry
// const replace = (oldValue:string, newValue:string, input:string) => input.replace(new RegExp(oldValue, "g"), newValue);

// com Curry
const replace = (oldValue: string, newValue: string) => (input: string) =>
  input.replace(new RegExp(oldValue, "g"), newValue);

const replace_IIIII_V = replace("IIIII", "V");
const replace_VV_X = replace("VV", "X");
const replace_XXXXX_L = replace("XXXXX", "L");
const replace_LL_C = replace("LL", "C");
const replace_CCCCC_D = replace("CCCCC", "D");
const replace_DD_M = replace("DD", "M");

const numberToRoman = (num: number) =>
  pipe(
    replace_IIIII_V,
    replace_VV_X,
    replace_XXXXX_L,
    replace_LL_C,
    replace_CCCCC_D,
    replace_DD_M,
    replace("VIIII", "IX"),
    replace("IIII", "IV"),
    replace("LXXXX", "LC")
  )("I".repeat(num));

console.log(numberToRoman(14));
