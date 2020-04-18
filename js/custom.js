$(function () {
    
    
//    preloder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


//   banner-slide

    $('.slide_active').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.venobox').venobox();
    
    
    //    mixitup js
    
    var mixer = mixitup('.work_wrap');
    
    
//    text-slide
      $('.slider_text').slick({
        arrows: false,
        dots: true,       
        autoplay: true,
        autoplaySpeed: 2000
    });
    
//    back-to-top
    $(window).on('scroll', function(event) {
   if($(this).scrollTop() > 800){
       $('.back-to-top').fadeIn(200)
   } else{
       $('.back-to-top').fadeOut(200)
   }
});
    

});
