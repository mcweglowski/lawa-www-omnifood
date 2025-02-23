$(document).ready(function() {

  /*Sticky navigation*/
  $('.js--section-sprzet-wojskowy').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky')
    }
    else {
        $('nav').removeClass('sticky')
  }}, {
    offset: '60px'
  });

  $('.js--go-to-top').click(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 });

  /* Lightbox Gallery start */
  $('.js--lightbox-close-gallery').click(function() {
    $(this).parent().css("display", "none");

    $('nav').addClass('sticky')

    mybutton = document.getElementById("backToTopButton");
    mybutton.style.display = "block";

    // ENABLE: prevent showing "Back to top" button, when user scroll
    $('html, body').css({overflow: 'auto'});
  })

  var slideIndex = 1;
  var currentGalleryID = '';

  $('.js--lightbox-open-gallery').click(function() {
      currentGalleryID = $(this).attr('data-destination');
      $(currentGalleryID).css("display", "block");
      slideIndex = 1;
      showSlide(slideIndex);

      $('nav').removeClass('sticky')
      mybutton = document.getElementById("backToTopButton");
      mybutton.style.display = "none";

    // DISABLE: prevent showing "Back to top" button, when user scroll
    $('html, body').css({overflow: 'hidden'});
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

  /* Back to top button start */
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    mybutton = document.getElementById("backToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  /* Back to top button end */


  /* Mobile nav */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200)

    if ('menu-outline' == icon.attr('name')) {
      icon.attr('name', 'close-outline')
      document.getElementById('js--h1').style.visibility = 'hidden';
    } else {
      icon.attr('name', 'menu-outline')
      document.getElementById('js--h1').style.visibility = 'visible';
    }
  });

  $('.js--main-nav-item').click(function() {
    var width = $( document ).width();

    if (900 >= width) {
      var icon = $('.js--nav-icon ion-icon');

      if ('menu-outline' == icon.attr('name')) {
        icon.attr('name', 'close-outline')
        document.getElementById('js--h1').style.visibility = 'hidden';
      } else {
        icon.attr('name', 'menu-outline')
        document.getElementById('js--h1').style.visibility = 'visible';
      }
    }

    document.getElementById("main-nav").style = "none";
  });
})