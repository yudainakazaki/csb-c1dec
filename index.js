/* global $ */

$(function () {
  $(".nav-item a[href]").on("click", function (event) {
    console.log("Clicked");
    $("#navToggle").trigger("click");
  });

  document.body.style.zoom = 1;

  window.onload = function () {
    const loader = document.getElementById("loading-wrapper");
    loader.classList.add("completed");
  };
});
