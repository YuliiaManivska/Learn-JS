function pow(x, n) {
  if (n < 1 || !Number.isInteger(n)) {
    alert("Please enter a natural number (an integer greater than or equal to 1) for 'n'.");
    return;
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = +prompt("Enter the base (x):", '');
let n = +prompt("Enter the exponent (n):", '');

let result = pow(x, n);

if (result !== undefined) {
  alert(`Result: ${result}`);
}
