function add(a: number, b: number): number {
  return a + b;
}

let num1 = "1";
let num2 = 2;

let result = add(parseInt(num1), num2); // Fixed: Convert string to number before passing it to the function.