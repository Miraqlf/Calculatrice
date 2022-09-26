const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    result.textContent += e.target.id;
  });
});
console.log(equal);
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
