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

var icon_animation = document.getElementById("icon_animation");
icon_animation.addEventListener("click", () => {
  window.scrollTo({
    top: 670,
    behavior: "smooth",
  });
});

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
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("mouseenter", function () {
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