// Initialize the counter
let count = 0;

// Function to increase the counter
function increaseCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Function to decrease the counter
function decreaseCounter() {
    count--;
    document.getElementById('counter').innerText = count;
}

// Function to reset the counter
function resetCounter() {
    count=0;
    document.getElementById('counter').innerText = count;
}