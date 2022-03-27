// faq section
const accordion = document.getElementsByClassName("contentBx");
  for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
      this.classList.toggle('active')
    })

  }
//  testimonial

  AOS.init({
        offset: 20
        // duration: 500,
      });

// clients
      
      $(document).ready(function () {
        if ($(".brands_slider").length) {
          var brandsSlider = $(".brands_slider");

          brandsSlider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            // autoWidth: true,
            items: 6,
            margin: 22,
          });
        }
      });
    