// Initialize the counter
let count = 0;

// In your implementation, the functions increaseCounter, decreaseCounter, and resetCounter
// retrieve the counter element from the DOM every time they are invoked.
// In most cases, it's better to retrieve HTML elements from the DOM once and store them
// as constant variables at the top of the script. This prevents repeated DOM access every time
// the functions run, improving performance.
// If you want to read more about this technique, browse: Caching the DOM element.

// Function to increase the counter
function increaseCounter() {
  count++;
  document.getElementById("counter").innerText = count;
}

// Function to decrease the counter
function decreaseCounter() {
  count--;
  document.getElementById("counter").innerText = count;
}

// Function to reset the counter
function resetCounter() {
  count = 0;
  document.getElementById("counter").innerText = count;
}
