(function () {
  var navButton = document.querySelector(".nav-button");
  var dropDown = document.querySelector(".active.drop-down");

  // Hide the border initially
  dropDown.classList.add("closed");
  dropDown.classList.remove("border");

  // Bind mouseenter event to the drop-down navigation button
  navButton.addEventListener("mouseenter", function () {
    // Remove the "closed" class to show the menu
    dropDown.classList.remove("closed");
    dropDown.classList.add("border");
  });

  // Bind mouseleave event to the drop-down navigation button
  dropDown.addEventListener("mouseleave", function () {
    // Add the "closed" class to hide the menu
    dropDown.classList.add("closed");
    dropDown.classList.remove("border");
  });
})();
