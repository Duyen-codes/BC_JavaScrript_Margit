// Create an object named car with values for mark, year, owner, city

// const car = {
//   mark: "FI",
//   year: 1999,
//   owner: "HD",
//   city: "Helsinki",
//   calcAge: function () {
//     this.age = 2022 - this.year;
//     return this.age;
//   },
// };
// console.log(car.age);

// // Add new property for color:
// car.color = "red";

// // remove property city from object
// delete car.city;
// console.log(car, "color: blue");

// const car = new Object();
// car.mark = "Ford";
// car.model = "Mustang";
// car.year = 2022;
// car.city = "Helsinki";

// console.log(car);
// delete car.city;
// console.log(car);

// Create an object using a constructor function

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.calcAge = function () {
    const currYear = new Date().getFullYear();
    const age = currYear - this.year;
    console.log(age);
    return age;
  };
}

const myCar = new Car("Eagle", "Talon TSi", 1993);

console.log(myCar);
