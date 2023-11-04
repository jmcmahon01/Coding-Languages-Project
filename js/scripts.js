window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let age = document.querySelector("div#age");

  form.addEventListener("submit", function (event) {

    const userAge = document.getElementById("userAge").value;
    const hairColor = document.getElementById("hairColor").value;
    const height = document.getElementById("height").value;

    document.querySelector("span#userAge").innerText = "It doesn't matter how old you are, anyone can learn to code!";
    document.querySelector("span#hairColor").innerText = "It doesn't matter whether or not you even have hair, let alone what color it is. Anyone can learn to code!";
    document.querySelector("span#height").innerText = "Don't listen to Randy Newman, short people both have a reason to live and they can also learn to code!"

    age.removeAttribute("class")

    event.preventDefault();
  });

  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function () {
    age.setAttribute("class", "hidden");
    document.getElementById("userAge").value = null;
    document.getElementById("hairColor").value = null;
    document.getElementById("height").value = null;
  });
});





















