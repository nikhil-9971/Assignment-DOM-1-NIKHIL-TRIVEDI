const decrement = document.getElementById("decrbtn");
const incement = document.getElementById("incrbtn");
const displayValue = document.getElementById("displayvalue");
const ResetValue = document.getElementById("resetbtn");
displayValue.style.fontWeight = 900;
displayValue.style. color = "white";

//  for decrement button click
decrement.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

//  for Increment button click
incement.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("Digit of 10+ Number not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

// for reset value

ResetValue.addEventListener("click", () => {
  displayValue.innerText = 0;
});
