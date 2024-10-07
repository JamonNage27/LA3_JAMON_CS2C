// iterationMapping.js
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// Initialize counters
let i = 0;
let j = 0;

// Loop through each iteration
for (i = 0; i < maxLimit; i++) {
  for (j = 0; j < maxLimit; j++) {
    // Calculate the added value
    const addedValue = i + j;

    // Log the iteration points and added value
    console.log(`[{i}] [{j}] Added value is {addedValue}`);
  }
}
