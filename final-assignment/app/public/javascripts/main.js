(function(){
  "use strict";
  // Form data save
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
    // Set form values
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

  }
}());