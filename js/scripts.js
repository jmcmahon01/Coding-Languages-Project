window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    const userAge = document.getElementById("userAge").value;

    document.querySelector("span#userAge").innerText = "It doesn't matter how old you are, anyone can learn to code!";

    document.querySelector("div#age").removeAttribute("class");

    event.preventDefault();
  };
};

