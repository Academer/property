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
