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

var button_menu = document.getElementById("button_menu");
var span_icon = document.getElementById("span_icon");
var bollen = true;
button_menu.onclick = () => {
  if (bollen === true) {
    span_icon.classList = "fas fa-times";
    bollen = false;
  } else {
    span_icon.classList = "fas fa-bars";
    bollen = true;
  }
};

var button_active_language = document.getElementById("button_active_language");
button_active_language.onclick = () => {
  if (bollen === true) {
    button_active_language.textContent = "عربي";
    bollen = false;
  } else {
    button_active_language.textContent = "English";
    bollen = true;
  }
};

var video = document.getElementById("video");
video.onclick = () => {
  alert("The video has been played");
};

var div_check = document.querySelectorAll("#div_check");
div_check.forEach((element) => {
  element.addEventListener("click", function () {
    const border_span = document.querySelector(".border_right");
    if (border_span) {
      border_span.classList.remove("border_right");
    }
    const mouse_border = element.querySelector(".div_mouse");
    mouse_border.classList.add("border_right");
    const active_span = document.querySelector(".text_active");
    if (active_span) {
      active_span.classList.remove("text_active");
    }
    const text_active = element.querySelector(".div_mouse");
    text_active.classList.add("text_active");
    const active_background = document.querySelector(".acitve_background");
    if (active_background) {
      active_background.classList.remove("acitve_background");
    }
    const acitve_background = element.querySelector(".icon_padding");
    acitve_background.classList.add("acitve_background");
    const active_icon = document.querySelector(".icon_active");
    if (active_icon) {
      active_icon.classList.remove("icon_active");
    }
    const icon_active = element.querySelector(".icon_all");
    icon_active.classList.add("icon_active");
    const activeIndex = Array.from(div_check).indexOf(element);
    localStorage.setItem("activeIndex", activeIndex);
  });
});
window.addEventListener("load", function () {
  const activeIndex = localStorage.getItem("activeIndex");
  if (activeIndex !== null) {
    const savedActiveElement = div_check[activeIndex];
    savedActiveElement.click();
  }
});

var tag_header = document.querySelectorAll(".image_click");
var div_none = document.getElementById("div_none");
var div_none_reverse = document.querySelectorAll(".div_none_reverse");
var bollen = true;
div_none_reverse.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
  });
});
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    if (bollen == true) {
      for (let i = 0; i < tag_header.length; i++) {
        div_none_reverse[i].style.display = "none";
        tag_header[i].classList.remove("active_image");
      }
      div_none_reverse[i].style.display = "block";
      this.classList.add("active_image");
      bollen = false;
    } else {
      for (let i = 0; i < tag_header.length; i++) {
        div_none_reverse[i].style.display = "none";
        tag_header[i].classList.remove("active_image");
      }
      bollen = true;
    }
    if (
      tag_header[i].classList ==
      "overflow-hidden image_click image_fit active_image"
    ) {
      div_none.style.display = "none";
      div_none_reverse[i].style.display = "block";
    } else {
      div_none.style.display = "block";
      div_none_reverse[i].style.display = "none";
    }
  });
}

var div_box = document.querySelectorAll("#div_box");
div_box.forEach((element) => {
  element.addEventListener("click", () => {
    var iconElement = element.querySelector(".image_arraow");
    if (bollen == true) {
      iconElement.classList = "image_arraow active_image_arraow";
      bollen = false;
    } else {
      iconElement.classList = "image_arraow";
      bollen = true;
    }
  });
});

const repeat = false;
const noArrows = false;
const noBullets = false;
const container = document.querySelector(".slider-container");
var slide = document.querySelectorAll(".slider-single");
var slideTotal = slide.length - 1;
var slideCurrent = -1;
function initBullets() {
  if (noBullets) {
    return;
  }
  const bulletContainer = document.createElement("div");
  bulletContainer.classList.add("bullet-container");
  slide.forEach((elem, i) => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.id = `bullet-index-${i}`;
    bullet.addEventListener("click", () => {
      goToIndexSlide(i);
    });
    bulletContainer.appendChild(bullet);
    elem.classList.add("proactivede");
  });
  container.appendChild(bulletContainer);
}
function initArrows() {
  if (noArrows) {
    return;
  }
  const leftArrow = document.createElement("a");
  const iLeft = document.createElement("i");
  iLeft.classList.add("fa");
  iLeft.classList.add("fa-arrow-left");
  leftArrow.classList.add("slider-left");
  leftArrow.appendChild(iLeft);
  leftArrow.addEventListener("click", () => {
    slideLeft();
  });
  const rightArrow = document.createElement("a");
  const iRight = document.createElement("i");
  iRight.classList.add("fa");
  iRight.classList.add("fa-arrow-right");
  rightArrow.classList.add("slider-right");
  rightArrow.appendChild(iRight);
  rightArrow.addEventListener("click", () => {
    slideRight();
  });
  container.appendChild(leftArrow);
  container.appendChild(rightArrow);
}
function slideInitial() {
  initBullets();
  initArrows();
  setTimeout(function () {
    slideRight();
  }, 500);
}
function updateBullet() {
  if (!noBullets) {
    document
      .querySelector(".bullet-container")
      .querySelectorAll(".bullet")
      .forEach((elem, i) => {
        elem.classList.remove("active");
        if (i === slideCurrent) {
          elem.classList.add("active");
        }
      });
  }
  checkRepeat();
}
function checkRepeat() {
  if (!repeat) {
    if (slideCurrent === slide.length - 1) {
      slide[0].classList.add("not-visible");
      slide[slide.length - 1].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-right").classList.add("not-visible");
        document.querySelector(".slider-left").classList.remove("not-visible");
      }
    } else if (slideCurrent === 0) {
      slide[slide.length - 1].classList.add("not-visible");
      slide[0].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-left").classList.add("not-visible");
        document.querySelector(".slider-right").classList.remove("not-visible");
      }
    } else {
      slide[slide.length - 1].classList.remove("not-visible");
      slide[0].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-left").classList.remove("not-visible");
        document.querySelector(".slider-right").classList.remove("not-visible");
      }
    }
  }
}
function slideRight() {
  if (slideCurrent < slideTotal) {
    slideCurrent++;
  } else {
    slideCurrent = 0;
  }
  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }
  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("preactivede")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("preactive")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });
  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");
  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");
  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");
  updateBullet();
}
function slideLeft() {
  if (slideCurrent > 0) {
    slideCurrent--;
  } else {
    slideCurrent = slideTotal;
  }
  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("proactive")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("proactivede")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });
  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");
  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");
  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");
  updateBullet();
}
function goToIndexSlide(index) {
  const sliding = slideCurrent > index ? () => slideRight() : () => slideLeft();
  while (slideCurrent !== index) {
    sliding();
  }
}
slideInitial();
