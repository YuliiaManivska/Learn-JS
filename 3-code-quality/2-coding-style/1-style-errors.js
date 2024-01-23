function pow(x,n) 
{
  // no spaces between arguments
  let result=1; // spaces

  // Use spaces after the semicolons in the for loop for better readability
  for(let i=0;i<n;i++) {result*=x;}
    // Use spaces around the *= operator for better readability
    return result;
  // Use an explicit return statement for clarity
}

// Separate variable declarations for better readability
let x=prompt("x?",''); n=prompt("n?",'');

// Add a space before the opening brace of the if statement for consistency
if (n <= 0) 
{
  // Use template literals for better string formatting
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  // Consider using template literals for better string formatting
  alert(pow(x, n));
}


// fixed:

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}

