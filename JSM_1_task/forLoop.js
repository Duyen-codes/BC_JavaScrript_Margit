//1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

//2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …

for (i = 2; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i, 100 - i);
  }
}

let j = 100;
for (i = 2; i <= 100; i += 2) {
  j -= 2;
  console.log(i, j);
}

let i = 0;
white(i <= 100) {
    i += 2;
    console.log(i);
    console.log(100 - i);
}

//3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distance, time;
while (distance !== 0) {
    let distance = parseInt(prompt("What's the distance?"));
let time = parseInt(prompt("How much time is it?"));
let speed = parseInt(km / h);
  console.log(speed);
}

do {

    dist = prompt("please, input distance");
    
    time = prompt("please, input time");
    
    speed = dist / time;
    
    alert("average speed " + speed);
    
    } while (dist > 0);

//4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let counter = 0;
for (let i = 0; i <= 5; i++) {
  let num = Number(prompt("What's the number?"));
  if (num % 2 === 0) {
    counter++;
  }
  console.log(counter);
}

//5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let number = parseInt(prompt("Whats the number?"));
let average = number;
let sum = 0;
let count = 0;
let n = parseInt(prompt("What's the number?"));
while (n !== 0) {
  sum += number;
  count++;
  console.log("Average is: " + sum / count);
}

//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.
let sum = 0;
let num;
let count = 0;
let average;
for (i = 0; i < 25; i++) {
  num = parseInt(prompt("Whats the number?"));
  sum += n;
  count++;
  average = sum / count;
  console.log(average);
}

//7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let number = parseInt(promp("Enter any number: "));
let sum = number;
let answer = prompt("Do you want to continue giving numbers?(y/n)");
do {
  number = parseInt(prompt("Whats another number?"));
  sum += number;
  count++;
  console.log("Average is " + sum / count);
} while (answer === "y" || answer === "Y");

// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let numberAmount = prompt("how many numbers you want to give to the program?");
for (i = 0; i <= numberAmount; i++) {}
// Make a program that asks ten numbers and in the end prints out two biggest numbers.
let counter = 10;
let number = prompt("Enter a numbe: ");

// Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
