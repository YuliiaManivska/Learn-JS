// loop:
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert( sumTo(100) );

//recursion:
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );

// formula: sumTo(n) = n*(n+1)/2:
function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );