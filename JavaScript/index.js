function maxMin() {
  let numbersInput = document.querySelector("[data-mainInput]").value;
  let array = numbersInput.split(",");
  let newArray = array.map(function (str) {
    return parseInt(str);
  });
  let max = Math.max(...newArray);
  let min = Math.min(...newArray);
  console.log(min, max);
  document.querySelectorAll("div")[3].innerText = `Min value: ${min}`;
  document.querySelectorAll("div")[4].innerText = `Max value: ${max}`;
}

let maxMinBtn = document.querySelector("button");
maxMinBtn.addEventListener("click", () => maxMin());
