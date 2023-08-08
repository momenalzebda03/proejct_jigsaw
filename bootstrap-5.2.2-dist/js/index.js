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