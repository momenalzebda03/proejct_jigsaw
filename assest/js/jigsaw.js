var tag_header = document.querySelectorAll(".nav-link");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      tag_header[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

var iconAnimation = document.getElementById("iconAnimation");
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

var buttonMenu = document.getElementById("buttonMenu");
var iconMenu = document.getElementById("iconMenu");
buttonMenu.onclick = () => {
  buttonMenu.classList == "navbar-toggler mx-4"
    ? (iconMenu.src = "/assest/images/iconClose.svg")
    : (iconMenu.src = "/assest/images/iconClose.svg");
};

var video = document.getElementById("video");
video.onclick = () => {
  alert("The video has been played");
};

var divCheck = document.querySelectorAll("#divCheck");
divCheck.forEach((element) => {
  element.addEventListener("click", function () {
    const border_span = document.querySelector(".borderRight");
    if (border_span) {
      border_span.classList.remove("borderRight");
    }
    const mouse_border = element.querySelector(".divMouse");
    mouse_border.classList.add("borderRight");
    const active_span = document.querySelector(".textActive");
    if (active_span) {
      active_span.classList.remove("textActive");
    }
    const textActive = element.querySelector(".divMouse");
    textActive.classList.add("textActive");
    const active_background = document.querySelector(".acitveBackground");
    active_background
      ? active_background.classList.remove("acitveBackground")
      : "";
    const acitveBackground = element.querySelector(".iconPadding");
    acitveBackground.classList.add("acitveBackground");
    const activeIcon = document.querySelector(".iconActive");
    activeIcon ? activeIcon.classList.remove("iconActive") : "";
    const icoAactive = element.querySelector(".iconAll");
    icoAactive.classList.add("iconActive");
  });
});

var divBox = document.querySelectorAll("#divBox");
var bollenIcon = true;
divBox.forEach((element) => {
  element.addEventListener("click", () => {
    var iconElement = element.querySelector(".imageArraow");
    if (bollenIcon == true) {
      iconElement.classList = "imageArraow activeImageArraow";
      bollenIcon = false;
    } else {
      iconElement.classList = "imageArraow";
      bollenIcon = true;
    }
  });
});

// var divBox = document.querySelectorAll("#divBox");
// var bollenIcon = true;
// divBox.forEach((element) => {
//   element.addEventListener("click", () => {
//     var iconElement = element.querySelector(".imageArraow");
//     if (bollenIcon == true) {
//       iconElement.classList = "imageArraow activeImageArraow";
//       bollenIcon = false;
//     } else {
//       iconElement.classList = "imageArraow";
//       bollenIcon = true;
//     }
//   });
// });

var text = "“Keep your goal close, and your customer closer”";
var idText = document.getElementById("idText");
var i = 0;
var timeClear = setInterval(() => {
  i > text.length - 1
    ? clearInterval(timeClear)
    : (idText.textContent += text[i]);
  i++;
}, 100);

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 400,
    modifier: 0.5,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 3,
});
swiper.on("slideChangeTransitionEnd", function () {
  var slides = swiper.slides;
  slides.forEach(function (slide) {
    if (!slide.classList.contains("swiper-slide-active")) {
      slide.classList.add("inactive");
    } else {
      slide.classList.remove("inactive");
    }
  });
});
