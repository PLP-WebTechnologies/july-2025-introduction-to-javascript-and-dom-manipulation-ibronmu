// === PART 1: Variables and Conditionals ===
const userName = "Alice";
const userAge = 25;

// Conditional example
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// === PART 2: Custom Functions ===
// Function 1: Check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true

// Function 2: Greet a user
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet(userName)); // "Hello, Alice!"

// === PART 3: Loops ===
// Loop 1: For loop (log numbers 1-5)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop 2: While loop (countdown)
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// === PART 4: DOM Interactions ===
// Interaction 1: Button click alert
document.getElementById("btn-alert").addEventListener("click", () => {
  alert("Button clicked!");
});

// Interaction 2: Change paragraph text
document.getElementById("btn-change-text").addEventListener("click", () => {
  document.getElementById("dynamic-text").textContent = "Text changed by JavaScript!";
});

// Interaction 3: Output loop results to DOM
const loopOutput = document.getElementById("loop-output");
let html = "";
for (let i = 0; i < 3; i++) {
  html += `<p>Loop iteration ${i}</p>`;
}
loopOutput.innerHTML = html;