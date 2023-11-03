window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    const userAge = document.getElementById("userAge").value;
    const hairColor = document.getElementById("hairColor").value;
    const height = document.getElementById("height").value;

    document.querySelector("span#userAge").innerText = "It doesn't matter how old you are, anyone can learn to code!";
    document.querySelector("span#hairColor").innerText = "It doesn't matter whether or not you even have hair, let alone what color it is. Anyone can learn to code!";
    document.querySelector("span#height").innerText = "Don't listen to Randy Newman, short people both have a reason to live and they can also learn to code!"


    document.querySelector("div#age").removeAttribute("class");

    event.preventDefault();
  };
};

