// iterationMapping with Double Loops
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// Initialize counters
let j = 0; //serves as the counter
let n = 0; //serves as the counter

// Loop through each iteration
for (j = 0; j < maxLimit; j++) {
  for (n = 0; n < maxLimit; n++) {
    // Calculate the added value
    const addedValue = j + n;

    // Log the output of the counters and added value
    console.log(`[{j}] [{n}] Added value is {addedValue}`);
  }
}
