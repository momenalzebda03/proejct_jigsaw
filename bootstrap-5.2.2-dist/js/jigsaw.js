$(document).ready(() => {
  var icon_animation = $("#icon_animation");
  function scroll_smool() {
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
      icon_animation.on("click", scroll_smool);
    } else {
      icon_animation.on("click", scroll);
    }
  }
  addEventListenerBasedOnWidth();

  window.addEventListener("resize", () => {
    if (icon_animation.removeEventListener) {
      icon_animation.removeEventListener("click", scroll_smool);
    } else {
      icon_animation.removeEventListener("click", scroll);
    }
    addEventListenerBasedOnWidth();
  });

  var button_menu = $("#button_menu");
  var icon_menu = $("#icon_menu");
  var boolen = true;
  button_menu.on("click", () => {
    if (boolen) {
      icon_menu.attr("src", "folder_image/image_navbar/icon_close.svg");
      boolen = false;
    } else {
      icon_menu.attr("src", "folder_image/image_navbar/icon_menu.svg");
      boolen = true;
    }
  });

  $("#video").on("click", function () {
    alert("The video has been played");
  });

  $(".div_check").on("click", function () {
    $(".border_right").removeClass("border_right");
    $(".text_active").removeClass("text_active");
    $(".acitve_background").removeClass("acitve_background");
    $(".icon_active").removeClass("icon_active");
    var $mouse_border = $(this).find(".div_mouse");
    $mouse_border.addClass("border_right text_active");
    var $acitve_background = $(this).find(".icon_padding");
    $acitve_background.addClass("acitve_background");
    var $icon_active = $(this).find(".icon_all");
    $icon_active.addClass("icon_active");
  });

  var text = "“Keep your goal close, and your customer closer”";
  var i = 0;
  var time_clear = setInterval(function () {
    if (i > text.length - 1) {
      clearInterval(time_clear);
    } else {
      $("#id_text").text(function (_, currentText) {
        return currentText + text[i];
      });
      i++;
    }
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
});
