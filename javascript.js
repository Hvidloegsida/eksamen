(function () {
  var navButton = document.querySelector(".nav-button1");
  var dropDown = document.querySelector(".active.drop-down1");

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

(function () {
  var navButton = document.querySelector(".nav-button2");
  var dropDown = document.querySelector(".active.drop-down2");

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

(function () {
  var navButton = document.querySelector(".nav-button3");
  var dropDown = document.querySelector(".active.drop-down3");

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

(function () {
  var navButton = document.querySelector(".nav-button5");
  var dropDown = document.querySelector(".active.drop-down5");

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

(function () {
  var navButton = document.querySelector(".nav-button4");
  var dropDown = document.querySelector(".active.drop-down4");

  dropDown.classList.remove("border");

  // Bind mouseenter event to the drop-down navigation button
  navButton.addEventListener("mouseenter", function () {
    // Remove the "closed" class to show the menu

    dropDown.classList.add("border");
  });

  // Bind mouseleave event to the drop-down navigation button
  dropDown.addEventListener("mouseleave", function () {
    // Add the "closed" class to hide the menu
    dropDown.classList.remove("border");
  });
})();

(function () {
  var navButton = document.querySelector(".nav-button6");
  var dropDown = document.querySelector(".active.drop-down6");

  dropDown.classList.remove("border");

  // Bind mouseenter event to the drop-down navigation button
  navButton.addEventListener("mouseenter", function () {
    // Remove the "closed" class to show the menu

    dropDown.classList.add("border");
  });

  // Bind mouseleave event to the drop-down navigation button
  dropDown.addEventListener("mouseleave", function () {
    // Add the "closed" class to hide the menu
    dropDown.classList.remove("border");
  });
})();

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;

  // Check the screen size using a media query
  var mediaQuery = window.matchMedia("(min-width: 500px)");

  // Check if the screen size is over 500px
  if (mediaQuery.matches) {
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  } else {
    // Hide the container element
    expandImg.parentElement.style.display = "none";
  }
}
