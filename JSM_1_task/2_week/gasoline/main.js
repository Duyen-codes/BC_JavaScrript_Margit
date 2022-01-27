const calculate = () => {
  const price = Number(document.getElementById("price").value);
  const money = Number(document.querySelector("#money").value);
  const answer = document.querySelector("#answer");
  let text;

  const amount = Math.floor(money / price);
  amount >= 10
    ? (text = `You could get ${amount} liters, good, you can escape now`)
    : (text = `You could get ${amount}, Ups, you have to stay here.`);
  answer.textContent = text;
};
