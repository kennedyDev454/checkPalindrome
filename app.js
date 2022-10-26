
const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");

let check;

function checkPalindrome() {
  const inputSplited = input.value
    .split("")
    .filter((item) => {
      return item != " ";
    })
    .join("")
    .toLowerCase();

  if (check === inputSplited) {
    result.innerHTML = `<p>A palavra <span>${inputSplited}</span> é um palíndromo</p>`;
  } else {
    result.innerHTML = `<p>A palavra <span>${inputSplited}</span> não é palíndromo</p>`;
  }

  setTimeout(() => {
    result.firstElementChild.remove();
    input.focus()
  }, 2000);

  input.value = ''
}

input.addEventListener("input", (event) => {
  event.preventDefault();
  const inputValue = event.target.value;
  check = inputValue
    .split("")
    .reverse()
    .filter((item) => {
      return item != " ";
    })
    .join("")
    .toLowerCase();

  if (inputValue) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});


btn.addEventListener("click", checkPalindrome);
