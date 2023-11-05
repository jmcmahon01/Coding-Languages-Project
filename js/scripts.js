window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let physicalCharacteristics = document.querySelector("div#physicalCharacteristics");


  form.addEventListener("submit", function (event) {
    const userAge = document.getElementById("userAge").value;
    const hairColor = document.getElementById("hairColor").value;
    const height = document.getElementById("height").value;
    const favColor = document.getElementById("favColor").value;
    const favAnimal = document.getElementById("favAnimal").value;

    document.querySelector("#age").innerText = userAge;
    document.querySelector("#hair").innerText = hairColor;
    document.querySelector("#shortTall").innerText = height;
    document.querySelector("#color").innerText = favColor;
    document.querySelector("#animal").innerText = favAnimal;

    physicalCharacteristics.removeAttribute("class");

    event.preventDefault();
  });

  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function () {
    physicalCharacteristics.setAttribute("class", "hidden");
    document.getElementById("userAge").value = null;
    document.getElementById("hairColor").value = null;
    document.getElementById("height").value = null;
    document.getElementById("favColor").value = null;
    document.getElementById("favAnimal").value = null;
  });
});

