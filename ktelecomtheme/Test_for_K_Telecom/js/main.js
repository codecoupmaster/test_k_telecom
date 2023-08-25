const menuBtn = document.querySelector('.menu_btn');

menuBtn.addEventListener('click', function() {
  alert('Кнопка нажата!');
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