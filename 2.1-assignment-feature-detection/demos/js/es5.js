(function () {
    var supportChecker = document.getElementById("support");
    console.log(supportChecker);
    supportChecker.innerHTML = "This browser doesn't support ES6 and it's fallback will be ES5. So the const deceleration won't work.";
}());
