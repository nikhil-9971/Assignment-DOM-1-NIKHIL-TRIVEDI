// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

// e.key => keyboardevent


let container = document.getElementById("container");
let display = document.getElementById("display");

// adding a keydown event listener to the document
// arrow funtion use

document.addEventListener("keydown", (e) => {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown 😊";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", (e) => {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp  🙄";
});

