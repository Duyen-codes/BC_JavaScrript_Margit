// const licence = document.querySelector("#licence").value;
// const maker = document.querySelector("#maker").value;
// const model = document.querySelector("#model").value;
// const owner = document.querySelector("#owner").value;
// const price = document.querySelector("#price").value;
// const color = document.querySelector("#color").value;

// const addBtn = document.querySelector(".add-btn");
// const resetBtn = document.querySelector(".reset-btn");

// let cars = [];

// function Car(licenceNumber, maker, model, owner, price, color) {
//   this.licenceNumber = licenceNumber;
//   this.maker = maker;
//   this.model = model;
//   this.owner = owner;
//   this.price = price;
//   this.color = color;
// }

// function addCar() {
//   let car = new Car(
//     document.querySelector("#licence-number").value,
//     document.querySelector("#maker").value,
//     document.querySelector("#model").value,
//     document.querySelector("#owner").value,
//     document.querySelector("#price").value,
//     document.querySelector("#color").value
//   );
//   cars.push(car);
//   console.log(cars);
// }

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   addCar();
// });

let formInput = document.querySelector("#inputData");

class Car {
  constructor(licence, maker, model, owner, price, color) {
    this.licence = licence;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const carArray = [];

const addCar = (event) => {
  event.preventDefault();
  console.log("clicked");
  const licence = document.querySelector("#licence").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;
  let newCar = new Car(licence, maker, model, owner, price, color);
  carArray.push(newCar);
  console.table(carArray);
};

formInput.addEventListener("submit", addCar);
