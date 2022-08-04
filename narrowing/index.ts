// narrowing

// type guard
const sum = (a: number | string, b: string | number): string | number => {
  if (typeof a === "string" && typeof b === "string") {
    return parseFloat(a) + parseFloat(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `tipos de dados diferentes!`;
  }
};

console.log(sum(1, 2)); // 3
console.log(sum("1", "2")); // 3
console.log(sum(1, "2")); // 3 tipos de dados diferentes

//checando se o valor existe

const whatOperation = (arr: number[], operation?: number | undefined) => {
  if (operation) {
    if (operation === 1) {
      const sum = arr.reduce((prev, actual) => {
        return prev + actual;
      });

      return `a soma de todos os valores é ${sum}`;
    } else if (operation === 2) {
      const mult = arr.reduce((prev, actual) => {
        return prev * actual;
      });

      return `a multiplicação é ${mult}`;
    }
  }
};

console.log(whatOperation([1, 2, 4, 56, 6, 88])); // undefined
console.log(whatOperation([1, 2, 4, 56, 6, 88], 1)); // 157
console.log(whatOperation([1, 2, 4, 56, 6, 88], 2)); // 236544
