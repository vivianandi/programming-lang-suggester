window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById("addName").value;
    const age = document.getElementById("addAge").value;
    const onlyChild = document.getElementById("onlyChild").value;
    const favoriteColor = document.getElementById("favoriteColor").value;
    const favoriteFood = document.getElementById("favoriteFood").value;

    let result = "Here it is, " + name + "! ";

    if (age < 21) {
      result += "You are under 21, so try Python.";
    } else if (age >= 21 && onlyChild.toLowerCase() === "no") {
      result += "You might like Python!";
    } else if (age >= 21 && favoriteColor.toLowerCase() === "blue" && favoriteFood.toLowerCase() === "pizza") {
      result += "Try Javascript.";
    } else {
      result += "You do not fit the specific criteria, but give Rust a try!";
    }

    let resultDiv = document.getElementById("result");
    resultDiv.textContent = result;

  };
};