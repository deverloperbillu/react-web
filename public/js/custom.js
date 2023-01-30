(function ($) {
    /****---- Sticky Header Start ----****/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 124) {
          $(".header").addClass("fixed");
        } else {
          $(".header").removeClass("fixed");
        }
      });
    /****---- Sticky Header End ----****/


    $(".side-menu").click(function() {
      $("body").addClass("remove-scroll"); 
          $(".siderbar").fadeIn("100");
           $(".siderbar nav.navbar").animate({
        right: "0"
      }, 100)
    });
       $(".btn-close").click(function() {
      $("body").removeClass("remove-scroll"); 
          $(".siderbar nav.navbar").animate({
        right: "-100%"
      }, 100) 
          $(".siderbar").fadeOut("100");
    });
  
  })(window.jQuery);