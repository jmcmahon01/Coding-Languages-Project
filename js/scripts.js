window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");






  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let javaScript = document.getElementById("language1");
    javaScript.setAttribute("class", "hidden");
    let python = document.getElementById("language2");
    python.setAttribute("class", "hidden");

    const userAge = parseInt(document.getElementById("userAge").value);
    event.preventDefault();

    if (userAge >= 18) {
      javaScript.removeAttribute("class");
    } else {
      python.removeAttribute("class");
    }
  });
});

form.addEventListener("submit", function () {
  resetBtn.removeAttribute("class");
});

resetBtn.addEventListener("click", function () {
  javaScript.setAttribute("class", "hidden");
  python.setAttribute("class", "hidden")
  document.getElementById("userAge").value = null;

});


