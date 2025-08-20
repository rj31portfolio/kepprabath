(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        // margin: 25,
        loop: true,
        center: false,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
    });

    // Testimonial carousel
    $(".testimonial-carousel2").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        nav: true, // Enable navigation buttons
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // Custom icons
        responsive: {
            0: {
                items: 1 // 1 item for mobile screens
            },
            600: {
                items: 2 // 2 items for tablets
            },
            1000: {
                items: 3 // 3 items for desktops
            }
        }
    });
    
    
})(jQuery);

// JavaScript for Cursor Effect
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});




 // This is for the text animation
 var spanText = function (text) {
    var string = text.innerText;
    var spaned = "";
    for (var i = 0; i < string.length; i++) {
      if (string.substring(i, i + 1) === " ") spaned += string.substring(i, i + 1);
      else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
    }
    text.innerHTML = spaned;
  };
  
  // Select all h1 elements with class "animation"
  let headlines = document.querySelectorAll("h1.animation");
  
  // Apply spanText to each h1 element
  headlines.forEach((headline) => {
    spanText(headline);
  });
  
  // Apply animation delay to each letter
  let animations = document.querySelectorAll(".animation");
  
  animations.forEach((animation) => {
    let letters = animation.querySelectorAll("span");
    letters.forEach((letter, i) => {
      letter.style.animationDelay = i * 0.1 + "s";
    });
  });
  
    