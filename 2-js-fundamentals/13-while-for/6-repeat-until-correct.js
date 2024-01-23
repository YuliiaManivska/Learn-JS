let number;

do {
    let userInput = prompt("Please enter a number greater than 100:");
    if (number <= 100) {
        alert("Please enter a number greater than 100. Try again.");
    }
} while (number <= 100);
