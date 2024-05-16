document.addEventListener("DOMContentLoaded", function () {
  toggleButton = document.getElementById("toggle__wrapper");

  darkTheme = document.getElementById("dark");
  lightTheme = document.getElementById("light");
  let themeClass;

  toggleButton.addEventListener("click", (event) => {
    if (darkTheme.checked == true) {
      document.body.className = "dark";
    } else if (lightTheme.checked == true) {
      document.body.className = "light";
    }

    themeClass = document.body.className;
    localStorage.setItem("mode", themeClass);
  });

  document.body.className = localStorage.getItem("mode");
  if (document.body.className === "null") {
    document.body.className = "dark";
  }
  // console.log(localStorage.getItem('mode'));
});
