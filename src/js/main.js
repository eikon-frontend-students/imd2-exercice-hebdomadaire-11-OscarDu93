var button = document.querySelector(".button");
var icon = document.querySelector(".icon");
var like = document.querySelector(".like");
var count = document.querySelector(".count");

function colorChange() {
  button.classList.add("is-red");
  icon.classList.add("is-white");
  like.classList.add("is-white");
  count.classList.add("is-white");
}

button.addEventListener("click", colorChange);

button.addEventListener("click", function () {
  var currentNumber = parseInt(count.textContent) || 0;
  count.textContent = currentNumber + 1;
});
