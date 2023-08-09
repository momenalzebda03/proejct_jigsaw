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
