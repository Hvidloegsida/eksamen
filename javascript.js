(function () {
  var navButton = document.querySelector(".nav-button1");
  var dropDown = document.querySelector(".active.drop-down1");

  /*TILFØJ LUK CLASS OG FJERN BORDER*/
  dropDown.classList.add("closed");
  dropDown.classList.remove("border");

  /*MOUSEOVER, SÅ AT MENUERNE FOLDER UD NÅR JEG HOVER OVER DET*/
  navButton.addEventListener("mouseenter", function () {
    /*NU HOVER JEG OVER MIN MENU, SÅ NU SKAL CLOSE FJERNES IGEN, SÅ DEN KAN FOLDE SIG UD + TILFØJ BORDER*/
    dropDown.classList.remove("closed");
    dropDown.classList.add("border");
  });

  /*MOUSELEAVE - MIN MENU FORSVINDER NÅR JEG FJERNER MIN MUS*/
  dropDown.addEventListener("mouseleave", function () {
    /*GENTAGELSE FRA FØR - CLOSE TILFØJES OG BORDER FJERNES*/
    dropDown.classList.add("closed");
    dropDown.classList.remove("border");
  });
})();

/*GENTAG FOR DEM ALLE MED FOLD UD MENU*/
(function () {
  var navButton = document.querySelector(".nav-button2");
  var dropDown = document.querySelector(".active.drop-down2");

  dropDown.classList.add("closed");
  dropDown.classList.remove("border");

  navButton.addEventListener("mouseenter", function () {
    dropDown.classList.remove("closed");
    dropDown.classList.add("border");
  });

  dropDown.addEventListener("mouseleave", function () {
    dropDown.classList.add("closed");
    dropDown.classList.remove("border");
  });
})();

(function () {
  var navButton = document.querySelector(".nav-button3");
  var dropDown = document.querySelector(".active.drop-down3");

  dropDown.classList.add("closed");
  dropDown.classList.remove("border");

  navButton.addEventListener("mouseenter", function () {
    dropDown.classList.remove("closed");
    dropDown.classList.add("border");
  });

  dropDown.addEventListener("mouseleave", function () {
    dropDown.classList.add("closed");
    dropDown.classList.remove("border");
  });
})();

(function () {
  var navButton = document.querySelector(".nav-button5");
  var dropDown = document.querySelector(".active.drop-down5");

  dropDown.classList.add("closed");
  dropDown.classList.remove("border");

  navButton.addEventListener("mouseenter", function () {
    dropDown.classList.remove("closed");
    dropDown.classList.add("border");
  });

  dropDown.addEventListener("mouseleave", function () {
    dropDown.classList.add("closed");
    dropDown.classList.remove("border");
  });
})();

(function () {
  var navButton = document.querySelector(".nav-button4");
  var dropDown = document.querySelector(".active.drop-down4");
  /*HER ER DER IKKE EN DROPDOWN SÅ DERFOR ER DER KUN REMOVE BORDER*/
  dropDown.classList.remove("border");

  navButton.addEventListener("mouseenter", function () {
    /*IGEN KUN BORDER, DA DET ER DET ENESTE ELEMENT DER SKAL STARTES*/

    dropDown.classList.add("border");
  });

  dropDown.addEventListener("mouseleave", function () {
    dropDown.classList.remove("border");
  });
})();

/*SAMME SOM NAV4 SOM HELLER IKKE HAR EN FOLD UD*/
(function () {
  var navButton = document.querySelector(".nav-button6");
  var dropDown = document.querySelector(".active.drop-down6");

  dropDown.classList.remove("border");

  navButton.addEventListener("mouseenter", function () {
    dropDown.classList.add("border");
  });

  dropDown.addEventListener("mouseleave", function () {
    dropDown.classList.remove("border");
  });
})();

/*BILLED GALLERI*/
function myFunction(imgs) {
  /*HER BLIVER DEN CONNECTET TIL MIT ID I HTML MED 'EXPANDEDIMG'*/
  var expandImg = document.getElementById("expandedImg");
  /*HER TILFØJER JAVASCRIPT EXPANDIMG.SRC TIL DET KLIKKEDE BILLEDE, SÅ AT DET BLIVER VIST CONTAINEREN*/
  expandImg.src = imgs.src;

  /*HER TJEKKER JAVASCRIPT OM SKÆRMEN ER OVER ELLER UNDER 500PX, HVIS DEN ER UNDER 500PX SKAL DENNE FUNCTION IKEK AKTIVERES*/
  var mediaQuery = window.matchMedia("(min-width: 500px)");

  if (mediaQuery.matches) {
    /*VIS CONTAINER HVIS MEDIA QUERY PASSER*/
    expandImg.parentElement.style.display = "block";
  } else {
    /*GEM CONTAINER HVIS MEDIA QUERY ER OVER*/
    expandImg.parentElement.style.display = "none";
  }
}
