$(document).ready(function(){
    $('.header__carousel').owlCarousel({
        items:1,
        loop:true,
        dots:false,
        nav:true,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive : {
          0 : {

          },
          480 : {

          },
          768 : {

          }
      }
    });
  });


// $(document).ready(function(){
//     $('.header__carousel2').owlCarousel({
//         items:1,
//         loop:true,
//         dots:false,
//         nav:true,
//         responsive : {
//           0 : {

//           },
//           480 : {

//           },
//           768 : {

//           }
//       }
//     });
//   });



$(document).ready(function(){
    $('.gallery__carousel').owlCarousel({
        items:3,
        loop:true,
        dots:false,
        nav:true,
        margin:20,
        autoplay:true,
        autoplayTimeout: 3000,
        responsive : {
          0 : {
            items:1
          },
          480 : {
            items:1
          },
          768 : {

          }
      }
    });
  });


  $(document).ready(function() {
    $("#lightgallery").lightGallery(); 
});