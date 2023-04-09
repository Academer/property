$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");

    // console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $(".nav").toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
    $(".mobicon").toggleClass(
      "chitta",
      $(this).scrollTop() > $nav.height() / 3
    );
    $(".navigation-section").toggleClass(
      "scrolled1",
      $(this).scrollTop() > $nav.height() / 3
    );
    // $(".kl").toggleClass("nav-el", $(this).scrollTop() > $nav.height() / 3);
    // $(".logo a").toggleClass("chitta", $(this).scrollTop() > $nav.height() / 3);
  });
});
document.querySelector(".mobicon").addEventListener("click", (el) => {
  document.querySelector(".mobileNav").classList.toggle("none");
});
document.querySelector(".closeicon").addEventListener("click", (el) => {
  document.querySelector(".mobileNav").classList.toggle("none");
});

// codepennnnnnnnn
// Change option selected
const label = document.querySelector(".dropdown__filter-selected");
const options = Array.from(
  document.querySelectorAll(".dropdown__select-option")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    label.textContent = option.textContent;
  });
});

// Close dropdown onclick outside
document.addEventListener("click", (e) => {
  const toggle = document.querySelector(".dropdown__switch");
  const element = e.target;

  if (element == toggle) return;

  const isDropdownChild = element.closest(".dropdown__filter");

  if (!isDropdownChild) {
    toggle.checked = false;
  }
});
