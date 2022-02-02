// let form = document.querySelector("form");
// let color1 = document.querySelector(".color1");
// let color2 = document.querySelector(".color2");
// let inputs = document.querySelectorAll("input");
// let colorCode = document.querySelector(".color-code");

// let direction;
// for (const input of inputs) {
//   input.addEventListener("change", () => {
//     direction = input.value;
//     console.log(direction);
//   });
// }

// const setGradient = () => {
//   document.body.style.backgroundImage = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
//   colorCode.textContent = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
// };

// form.addEventListener("change", setGradient);

// In Class solution
let form = document.querySelector("form");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let direction = document.querySelectorAll('input[name="direction"]');
let colorCode = document.querySelector(".color-code");

const setGradient = () => {
  let selectedValue;

  for (const sel of direction) {
    if (sel.checked) {
      console.log(sel.value);
      selectedValue = sel.value;
    }
  }

  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
  colorCode.textContent = `linear-gradient (${selectedValue}, ${color1.value}, ${color2.value})`;
};

form.addEventListener("change", setGradient);
