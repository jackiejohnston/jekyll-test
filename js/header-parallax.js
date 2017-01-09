$(document).ready(function() {
  // blur, darken and zoom hero image on scroll
  if ($(".hero").length) {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var imgFilter = "blur(" + (scroll/200) + "px) brightness(" + (100 - scroll/4) + "%)";
      $(".hero").css({
        "background-size": (100 + scroll/20)  + "%",
        "-webkit-filter": imgFilter,
        "filter": imgFilter
      });
    });
  }
});