function printNumbersTimeout(from, to) {
  let current = from;
  function print() {
      console.log(current);
      if (current < to) {
          current++;
          setTimeout(print, 1000);
      }
  }
  print();
}

printNumbersTimeout(1, 10);
