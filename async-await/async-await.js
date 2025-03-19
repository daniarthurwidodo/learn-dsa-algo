async function makeSandwich() {
  console.log("Making a sandwich...");
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating time to make a sandwich
  console.log("Sandwich is ready! 🥪");
}

// it will wait for the makeSandwich function to finish before continuing
async function eatSandwich() {
  console.log("I go play while waiting... 🎮");
  await makeSandwich();
  console.log("Now I can eat! 😋");
}

//  it will not wait for the makeSandwich function to finish before continuing
function eatSandwichSync() {
  console.log("I go play while waiting... 🎮xx");
  console.log("Making a sandwich... xx");
  console.log("Sandwich is ready! 🥪xx");
  console.log("Now I can eat! 😋xx");
}

eatSandwich();

//   eatSandwichSync();
