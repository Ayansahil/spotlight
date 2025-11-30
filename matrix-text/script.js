const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const para = document.querySelector("p");
const text = para.innerText;

let iteration = 0;
let intervalId = null; // Interval ka reference store karne ke liye

function randomText() {
  const str = text.split("").map(function (char, index) {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[Math.floor(Math.random() * 52)];
    }).join("");
  
  para.innerText = str;
  iteration += 0.5;
  
  // Jab animation complete ho jaye toh interval clear 
  if (iteration >= text.length) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

para.addEventListener("mouseenter", function () {
  // Agar pehle se interval chal raha hai toh use clear 
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  
  // Iteration reset 
  iteration = 0;
  
  // Naya interval start 
  intervalId = setInterval(randomText, 100);
});