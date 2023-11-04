window.addEventListener("load", function () {
  let form1 = document.querySelector("#form1"); // Corrected the selector
  let resetBtn = document.querySelector("#reset"); // Corrected the selector
  let physicalCharacteristics = document.querySelector("#physicalCharacteristics"); // Corrected the selector

  form1.addEventListener("submit", function (event) {
    const userAge = document.getElementById("userAge").value;
    const hairColor = document.getElementById("hairColor").value;
    const height = document.getElementById("height").value;

    document.querySelector("#userAge").innerText = "It doesn't matter how old you are, anyone can learn to code!";
    document.querySelector("#hairColor").innerText = "It doesn't matter whether or not you even have hair, let alone what color it is. Anyone can learn to code!";
    document.querySelector("#height").innerText = "Don't listen to Randy Newman, short people both have a reason to live and they can also learn to code!"

    physicalCharacteristics.classList.remove("hidden"); // Use classList to remove the "hidden" class

    event.preventDefault();
  });

  form1.addEventListener("submit", function () {
    resetBtn.classList.remove("hidden"); // Use classList to remove the "hidden" class
  });

  resetBtn.addEventListener("click", function () {
    physicalCharacteristics.classList.add("hidden"); // Use classList to add the "hidden" class
    document.getElementById("userAge").value = "";
    document.getElementById("hairColor").value = "";
    document.getElementById("height").value = "";
  });
});

window.onload = function () {
  const form2 = document.querySelector("#form2"); // Corrected the selector
  form2.onsubmit = function (event) { // Use form2 instead of form
    event.preventDefault();
    let drinkMenu = document.getElementById("drinks");
    drinkMenu.classList.add("hidden"); // Use classList to add the "hidden" class
    let under21Message = document.getElementById("under-21");
    under21Message.classList.add("hidden"); // Use classList to add the "hidden" class

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 21) {
      drinkMenu.classList.remove("hidden"); // Use classList to remove the "hidden" class
    } else {
      under21Message.classList.remove("hidden"); // Use classList to remove the "hidden" class
    }
  };
};

