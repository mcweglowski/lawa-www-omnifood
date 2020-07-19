$(document).ready(function() {

  /* Scroll on buttons*/
  $('.js--scroll-to-sprzet-wojskowy').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-sprzet-wojskowy').offset().top}, 1000)
  });

  /* Smooth scrolling */
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
   }
  });


  /* Animations on scroll */
  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  
  
  /* Lightbox Gallery start */
  $('.js--lightbox-close-gallery').click(function() {
    $(this).parent().css("display", "none");
  })

  var slideIndex = 1;
  var currentGalleryID = '';

  $('.js--lightbox-open-gallery').click(function() {
      currentGalleryID = $(this).attr('data-destination');
      $(currentGalleryID).css("display", "block");
      slideIndex = 1;
      showSlide(slideIndex);
  })

  $('.js--lightbox-prev-slide').click(function() {
      slideIndex = slideIndex - 1;
      showSlide(slideIndex);
  })

  $('.js--lightbox-next-slide').click(function() {
      slideIndex = slideIndex + 1;
      showSlide(slideIndex);
  })

  $('.js--lightbox-image-show').click(function() {
      var id = $(this).attr('data-slideno');
      slideIndex = id;
      showSlide(id);
  })

  function showSlide(n) {
    var slides = $(currentGalleryID).find(".lightbox-slide");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
  /* Lightbox Gallery end */
})