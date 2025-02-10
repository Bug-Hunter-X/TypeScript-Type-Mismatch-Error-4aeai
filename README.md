This repository demonstrates a common type mismatch error in TypeScript. The `add` function is defined to accept two numbers, but the code attempts to pass a string and a number as arguments. This results in a type error during compilation.

The solution demonstrates how to fix the error by explicitly converting the string to a number using `parseInt` before passing it to the `add` function.