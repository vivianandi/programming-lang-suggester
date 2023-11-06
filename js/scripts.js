window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById("addName").value;
    const age = document.getElementById("addAge").value;
    const email = document.getElementById("addEmail").value;
    const favoriteColor = document.getElementById("favoriteColor").value;
    const favoriteFood = document.getElementById("favoriteFood").value;

    let result = "Here it is!";

    if (age < 21) {
      result += "You are under 21, so try Python.";
    } else if (age >= 21 && favoriteColor.toLowerCase() === "blue") {
      result += "You are 21 or older and your favorite color is blue. Try Javascript.";
    } else {
      result += "You do not fit the mold, try Rust.";
    }

    resultDic.textContent = result;

  };
};