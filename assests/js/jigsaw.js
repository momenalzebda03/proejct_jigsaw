var iconAnimation = document.getElementById("icon-animation");
function scrollSmool() {
  window.scrollTo({
    top: 750,
    behavior: "smooth",
  });
}
function scroll() {
  window.scrollTo({
    top: 670,
    behavior: "smooth",
  });
}
function addEventListenerBasedOnWidth() {
  if (window.innerWidth <= 990) {
    iconAnimation.addEventListener("click", scrollSmool);
  } else {
    iconAnimation.addEventListener("click", scroll);
  }
}

addEventListenerBasedOnWidth();
window.addEventListener("resize", () => {
  if (iconAnimation.removeEventListener) {
    iconAnimation.removeEventListener("click", scrollSmool);
  } else {
    iconAnimation.removeEventListener("click", scroll);
  }
  addEventListenerBasedOnWidth();
});

var buttonMenu = document.getElementById("button-menu");
var iconMenu = document.getElementById("icon-menu");
buttonMenu.onclick = () => {
  buttonMenu.classList == "navbar-toggler mx-4"
    ? (iconMenu.src = "/assest/images/iconClose.svg")
    : (iconMenu.src = "/assest/images/iconMenu.svg");
};

var divCheck = document.querySelectorAll("#div-check");
divCheck.forEach((element) => {
  element.addEventListener("click", function () {
    const border_span = document.querySelector(".border-right");

    border_span ? border_span.classList.remove("border-right") : "";

    const mouse_border = element.querySelector(".div-mouse");

    mouse_border.classList.add("border-right");

    const active_span = document.querySelector(".text-active");

    active_span ? active_span.classList.remove("text-active") : "";

    const textActive = element.querySelector(".div-mouse");

    textActive.classList.add("text-active");

    const active_background = document.querySelector(".acitve-background");

    active_background
      ? active_background.classList.remove("acitve-background")
      : "";

    const acitveBackground = element.querySelector(".icon-padding");

    acitveBackground.classList.add("acitve-background");

    const activeIcon = document.querySelector(".icon-active");

    activeIcon ? activeIcon.classList.remove("icon-active") : "";

    const icoAactive = element.querySelector(".icon-all");

    icoAactive.classList.add("icon-active");
  });
});

var divBox = document.querySelectorAll("#divBox");
var bollenIcon = true;
divBox.forEach((element) => {
  element.addEventListener("click", () => {
    var iconElement = element.querySelector(".image-arraow");
    if (bollenIcon == true) {
      iconElement.classList = "image-arraow active-image-arraow";
      bollenIcon = false;
    } else {
      iconElement.classList = "image-arraow";
      bollenIcon = true;
    }
  });
});

var text = "“Keep your goal close, and your customer closer”";
var idText = document.getElementById("idText");
var i = 0;
var timeClear = setInterval(() => {
  i > text.length - 1
    ? clearInterval(timeClear)
    : (idText.textContent += text[i]);
  i++;
}, 100);

var lastScrollTop = 0;
var navbar = $(".navbar");

$(window).on("scroll", function () {
  var scrollPos = $(this).scrollTop();

  scrollPos > lastScrollTop
    ? navbar.removeClass("visible").addClass("hidden")
    : navbar.removeClass("hidden").addClass("visible");

  scrollPos >= 100
    ? navbar.addClass("scroll-up")
    : navbar.removeClass("scroll-up");

  lastScrollTop = scrollPos <= 0 ? 0 : scrollPos;
});
