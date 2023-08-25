$(document).ready(function() {
  $('.menu_btn').click(function() {
    $('.dropped_menu').toggleClass('show_menu');
  });
});


$(document).ready(function() {
    $('.owl-carousel_item_btn').click(function() {
      if (!$(this).hasClass('.owl-carousel_item_active_btn')) {
        $('.owl-carousel_item_active_btn').removeClass('owl-carousel_item_active_btn');
        $(this).addClass('owl-carousel_item_active_btn');
      }
    });
});

$(document).ready(function() {
  $('.feedback_options_btn').click(function() {
    if (!$(this).hasClass('.feedback_options_btn_active')) {
      $('.feedback_options_btn_active').removeClass('feedback_options_btn_active');
      $(this).addClass('feedback_options_btn_active');
    }
  });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        },
        1600:{
            items:4
        }
    }
    });
});

