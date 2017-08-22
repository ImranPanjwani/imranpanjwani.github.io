$(document).ready(function(){
     $('#my-profile-slider').show();
     $('#contact-me').hide();
 
     $('#brand-logo').click(function(e){
      e.preventDefault();
      $('#my-profile-slider').show();
      $('#contact-me').hide();
      
    }) 

    $('#contact-me-button').click(function(e){
      e.preventDefault();
      $('#my-profile-slider').hide();
      $('#contact-me').show();
    })

});

