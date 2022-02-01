// const button = document.querySelector(".btn");

// button.addEventListener("click", function () {
//   const weight = Number(document.querySelector("#weight").value);
//   const height = Number(document.querySelector("#height").value);
//   const result = document.querySelector(".result");
//   const BMI = Math.floor((weight / height / height) * 10000);

//   if (BMI < 18.5) {
//     result.textContent = `BMI is: ${BMI} Underweight`;
//     result.style.color = "orange";
//   } else if (BMI > 18.5 && BMI < 24.9) {
//     result.textContent = `BMI is: ${BMI} Normal`;
//     result.style.color = "green";
//   } else {
//     result.textContent = `BMI is: ${BMI} Preobesity`;
//     result.style.color = "red";
//   }
// });

const bmiCalc = () => {
  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value) / 100;
  const result = document.querySelector(".result");
  const BMI = (weight / (height * height)).toFixed(1);
  let color;

  if (BMI < 18.5) {
    result.textContent = `BMI is: ${BMI} - Underweight`;
    color = "warning";
  } else if (BMI > 18.5 && BMI < 24.9) {
    result.textContent = `BMI is: ${BMI} Normal`;
    color = "normal";
  } else if (BMI > 25 && BMI < 29.9) {
    result.textContent = `BMI is: ${BMI} Preobesity`;
    color = "warning";
  } else {
    result.textContent = `BMI is: ${BMI} Obesity`;
    color = "danger";
  }

  result.classList.add(color);
};
