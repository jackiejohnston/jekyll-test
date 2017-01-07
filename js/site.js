$(window).load(function() {
  // Initialize the Material Bootstrap Design javascript:
  // $.material.init()
  // Initialize pop-overs & tooltips
  // $('[data-toggle="popover"]').popover();
  // $('[data-toggle="tooltip"]').tooltip();

  // Toggle state disclosures open/close icon
  // $(".more-less").on('click', function(){
  //   var text = $(this).find("i").text();
  //   $(this).find("i").text(
  //     text == "add" ? "remove" : "add"
  //   );
  // });

  // $(".toggle-caret").on('click', function(){
  //   var text = $(this).find("i").text();
  //   $(this).find("i").text(
  //     text == "keyboard_arrow_right" ? "keyboard_arrow_down" : "keyboard_arrow_right"
  //   );
  // });

  // Add active class to menu links when you are on the page:
  // function stripTrailingSlash(str) {
  //   if(str.substr(-1) == '/') {
  //     return str.substr(0, str.length - 1);
  //   }
  //   return str;
  // }
  // var locationPage = stripTrailingSlash(window.location.pathname);
  // $.each($('header .nav').find('li'), function() {
  //   if ($(this).find('a')) {   
  //     var parser = document.createElement('a');
  //     parser.href = $(this).find('a').attr('href');
  //     if (stripTrailingSlash(parser.pathname) === locationPage) {
  //       $(this).addClass('active');
  //     }
  //   }
  // });

  $(".fa-bars").on('click', function(){
    $("#mobileMenu").toggleClass("hidden");  
  });


  $(document).ready(function() {
    var dateNow = new Date();
    var yearNow = dateNow.getFullYear();
    $(".current-year").text(yearNow);
    
    $("#more-less").on('click', function(){
      $("#more-less .fa").toggleClass("fa-plus");
      $("#more-less .fa").toggleClass("fa-minus");
    });
    
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
});