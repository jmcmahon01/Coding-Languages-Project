window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let javaScript = document.getElementById("language1");
  let python = document.getElementById("language2");
  let cSharp = document.getElementById("language3");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    javaScript.setAttribute("class", "hidden");
    cSharp.setAttribute("class", "hidden");
    python.setAttribute("class", "hidden");

    const userAge = parseInt(document.getElementById("userAge").value);

    if (userAge > 18) {
      javaScript.removeAttribute("class");
    } else if (userAge === 18) {
      cSharp.removeAttribute("class");
    } else {
      python.removeAttribute("class");
    }

    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function () {
    javaScript.setAttribute("class", "hidden");
    cSharp.setAttribute("class", "hidden");
    python.setAttribute("class", "hidden");
    document.getElementById("userAge").value = "";
    resetBtn.setAttribute("class", "hidden");
  });
});












