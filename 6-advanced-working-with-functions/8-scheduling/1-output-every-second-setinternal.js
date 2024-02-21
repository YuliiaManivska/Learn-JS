function printNumbersInterval(from, to) {
  let current = from;
  const intervalId = setInterval(() => {
      console.log(current);
      if (current === to) {
          clearInterval(intervalId);
      } else {
          current++;
      }
  }, 1000);
}

printNumbersInterval(1, 10);
