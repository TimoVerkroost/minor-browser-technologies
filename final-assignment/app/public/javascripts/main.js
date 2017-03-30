(function(){
  "use strict";
  // Form data save Search shirts
  if (typeof(Storage) !== "undefined") {
    // Set form values
    var nameShirtForm = document.getElementById("nameShirt");
    // check if form is on page
    if (nameShirtForm) {
      nameShirtForm.removeEventListener("submit", nameShirtgetFormValues);
      // On submit get values
      nameShirtForm.addEventListener("submit", nameShirtgetFormValues);
      // FormInput function
      function nameShirtgetFormValues() {
        var nameInput = document.getElementById("name").value;
        localStorage.setItem("name", nameInput);
      }

      // Get form values
      if (localStorage.getItem("name") !== null) {
        // Fill in the stored values
        document.getElementById("name").value = localStorage.name;
      }
    }
    // Set form values New shirt
    var nameNewForm = document.getElementById("tshirt");
    // check if form is on page
    if (nameNewForm) {
      nameNewForm.removeEventListener("submit", nameNewgetFormValues);
      // On submit get values
      nameNewForm.addEventListener("submit", nameNewgetFormValues);
      // FormInput function
      function nameNewgetFormValues() {
        var nameNewInput = document.getElementById("nameNew").value;
        localStorage.setItem("name", nameNewInput);

        var shirtText1Input = document.getElementById("shirtText1").value;
        localStorage.setItem("shirtText1", shirtText1Input);

        var shirtText2Input = document.getElementById("shirtText2").value;
        localStorage.setItem("shirtText2", shirtText2Input);

        var shirtText3Input = document.getElementById("shirtText3").value;
        localStorage.setItem("shirtText3", shirtText3Input);
      }

      // Get form values
      if (localStorage.getItem("name") !== null) {
        // Fill in the stored values
        document.getElementById("nameNew").value = localStorage.name;
        document.getElementById("shirtText1").value = localStorage.shirtText1;
        document.getElementById("shirtText2").value = localStorage.shirtText2;
        document.getElementById("shirtText3").value = localStorage.shirtText3;
      }
    }
    // Check of form
    var createShirt = document.getElementById("createShirt");
    if (createShirt) {
      var shirtText = document.getElementById("shirtText");
      var shirt1 = document.getElementById("activateShirt1");
      var shirt2 = document.getElementById("activateShirt2");
      var shirt3 = document.getElementById("activateShirt3");
      // Default text
      window.addEventListener("load", function () {
        shirtText.innerHTML = shirt1.value;
      });
      // Shirt1 text
      shirt1.addEventListener("click", function () {
        shirtText.innerHTML = shirt1.value;
      });
      // Shirt2 text
      shirt2.addEventListener("click", function () {
        shirtText.innerHTML = shirt2.value;
      });
      // Shirt3 text
      shirt3.addEventListener("click", function () {
        shirtText.innerHTML = shirt3.value;
      });

      // Size joke
      var tshirtImg = document.getElementById("shirtOverlay");
      var sizeS = document.getElementById("sizeS");
      var sizeM = document.getElementById("sizeM");
      var sizeL = document.getElementById("sizeL");
      // sizeS
      sizeS.addEventListener("click", function () {
        tshirtImg.style.transform = "scale(0.5)";
      });
      // sizeM
      sizeM.addEventListener("click", function () {
        tshirtImg.style.transform = "scale(0.75)";
      });
      // sizeL
      sizeL.addEventListener("click", function () {
        tshirtImg.style.transform = "scale(1)";
      });
    }

    // Check of form
    var tshirtForm = document.getElementById("tshirt");
    if (tshirtForm) {
      var shirtTextHome = document.getElementById("shirtText");
      var shirtTextHome1 = document.getElementById("shirtText1");
      var shirtTextHome2 = document.getElementById("shirtText2");
      var shirtTextHome3 = document.getElementById("shirtText3");
      // Shirt1 text
      shirtTextHome1.addEventListener("click", function () {
        shirtTextHome.innerHTML = shirtTextHome1.value;
      });
      // Shirt2 text
      shirtTextHome2.addEventListener("click", function () {
        shirtTextHome.innerHTML = shirtTextHome2.value;
      });
      // Shirt3 text
      shirtTextHome3.addEventListener("click", function () {
        shirtTextHome.innerHTML = shirtTextHome3.value;
      });

      // Shirt1 text
      shirtTextHome1.addEventListener("keyup", function () {
        shirtTextHome.innerHTML = shirtTextHome1.value;
      });
      // Shirt2 text
      shirtTextHome2.addEventListener("keyup", function () {
        shirtTextHome.innerHTML = shirtTextHome2.value;
      });
      // Shirt3 text
      shirtTextHome3.addEventListener("keyup", function () {
        shirtTextHome.innerHTML = shirtTextHome3.value;
      });
    }

  }
}());