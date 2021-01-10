var nightModeText = "white";
var lightModeText = "black";

var nightModeIcon = document.getElementById("toggle-night");
nightModeIcon.addEventListener("click", toggleNightMode);

var lightModeIcon = document.getElementById("toggle-light");
lightModeIcon.addEventListener("click", toggleLightMode);

function toggleNightMode() {
  document.body.style.backgroundColor = "black";
  var text = document.getElementsByClassName("text");
  for (var i = 0; i < text.length; i++) text[i].style.color = nightModeText;

  var gray = document.getElementsByClassName("gray");
  for (var i = 0; i < gray.length; i++)
    gray[i].style.backgroundColor = "#202020";

  var sectionIcons = document.getElementsByClassName("section-icon");
  for (var i = 0; i < sectionIcons.length - 1; i++)
    sectionIcons[i].style.filter = "brightness(0) invert(1)";

  var logo = document.getElementsByClassName("logo");
  for (var i = 0; i < logo.length; i++)
    logo[i].style.filter = "brightness(0) invert(1)";

  document.getElementsByClassName("footer")[0].style.color = nightModeText;
  document.getElementsByClassName("dropdown")[0].style.color = nightModeText;
  document.getElementById("git").style.filter = "brightness(0) invert(1)";
  nightModeIcon.style.filter = "brightness(0) invert(1)";
  lightModeIcon.style.filter = "brightness(0) invert(1)";
}

function toggleLightMode() {
  document.body.style.backgroundColor = "white";
  var text = document.getElementsByClassName("text");
  for (var i = 0; i < text.length; i++) text[i].style.color = lightModeText;

  var gray = document.getElementsByClassName("gray");
  for (var i = 0; i < gray.length; i++)
    gray[i].style.backgroundColor = "#f7f6f6";

  var sectionIcons = document.getElementsByClassName("section-icon");
  for (var i = 0; i < sectionIcons.length - 1; i++)
    sectionIcons[i].style.filter = "brightness(0)";

  var logo = document.getElementsByClassName("logo");
  for (var i = 0; i < logo.length; i++) logo[i].style.filter = "";

  document.getElementsByClassName("footer")[0].style.color = lightModeText;
  document.getElementsByClassName("dropdown")[0].style.color = lightModeText;
  document.getElementById("git").style.filter = "brightness(0)";
  nightModeIcon.style.filter = "brightness(0)";
  lightModeIcon.style.filter = "brightness(0)";
}
