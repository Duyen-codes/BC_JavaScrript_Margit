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
let resultTable = document.querySelector(".result");

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
const carArray = [
  { licence: "", maker: "", model: "", owner: "", price: "", color: "" },
];

const addCar = (event) => {
  event.preventDefault();
  let licence = document.querySelector("#licence").value;
  let maker = document.querySelector("#maker").value;
  let model = document.querySelector("#model").value;
  let owner = document.querySelector("#owner").value;
  let price = Number(document.querySelector("#price").value);
  let color = document.querySelector("#color").value;

  let newCar = new Car(licence, maker, model, owner, price, color);

  carArray.push(newCar);
  //   console.table(carArray);
  makeTable();
};

// Reset function

let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", (e) => {
  licence.value = "";
  maker.value = "";
  model.value = "";
  owner.value = "";
  price.value = "";
  color.value = "";
  console.log("reset btn clicked");
});

// Search licence function

function check() {
  let searchData = document.querySelector("#searchData");
  let searchTerm = document.querySelector("#search");
  let searchLicence = document.querySelector("#searchLicence");
  let resultPara = document.querySelector(".result-para");
  if (carArray.length == 1) {
    resultPara.textContent = "Please enter car first";
  } else {
    for (let i = 0; i < carArray.length; i++) {
      console.log(carArray[i]);
      if (carArray[i].licence === searchTerm.value) {
        console.log("searchTerm", searchTerm.value);
        resultPara.textContent = `The licence number ${carArray[i].licence} with ${carArray[i].maker}and model ${carArray[i].model} belongs to ${carArray[i].owner}`;
      } else {
        resultPara.textContent = "No car found";
      }
    }
  }
}

const makeTable = () => {
  let result = "<table border=1 >";
  result += "<tr>";
  for (const key in carArray[0]) {
    result += "<th>" + key + "</th>";
  }
  result += "</tr>";
  for (let i = 1; i < carArray.length; i++) {
    result += "<tr>";
    for (const key in carArray[i]) {
      result += "<td>" + carArray[i][key] + "</td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  resultTable.innerHTML = result;
  //   console.log(result);
};

formInput.addEventListener("submit", addCar);

// Call search() when search button gets clicked
searchData.addEventListener("submit", (e) => {
  e.preventDefault();
  check();
});

// Check Discount percent function
const checkDiscount = (e) => {
  e.preventDefault();
  let priceInput = Number(document.querySelector("#priceInput").value);
  let discountResult = document.querySelector(".discount-result");
  if (priceInput >= 5000 && priceInput <= 20000) {
    discountResult.textContent += "You get 15% discount";
  } else if (priceInput < 5000) {
    discountResult.textContent += "10% discount";
  } else {
    discountResult.textContent += "15% discount";
  }
};

// Call functions when buttons click
let discountForm = document.querySelector("#discountForm");
let checkDiscountBtn = document.querySelector("#checkDiscountBtn");

checkDiscountBtn.addEventListener("click", checkDiscount);
