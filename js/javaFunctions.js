/* JavaScript */
var defaultAlttext = "Hover over or tab to an image below to display it here.";

function addTabFocus() {
  console.log("onload check");
  var images = document.querySelectorAll(".flex img");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
}}

function upDate(previewImage) {
  console.log("upDate check: " + previewImage.alt);
  var big = document.getElementById("picture_div");
  big.style.backgroundImage = "url('" + previewImage.src + "')";
  big.innerHTML = previewImage.alt;
}

function unDo() {
  console.log("unDo check");
  var big = document.getElementById("picture_div");
  big.style.backgroundImage = "url('')";
  big.innerHTML = defaultAlttext;
}
