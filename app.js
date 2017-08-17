$(document).ready(function(){
     $('#home').show();
     $('#myskills').hide();
     $('#contactme').hide();
 
   $('#brand-logo').click(function(e){
     e.preventDefault();
     $('#home').show();
     $('#myskills').hide();
     $('#contactme').hide();
     
}) 
   $('#myskills-button').click(function(e){
     e.preventDefault();
     $('#home').hide();
     $('#myskills').show();
     $('#contactme').hide();
})
    
   $('#contactme-button').click(function(e){
     e.preventDefault();
     $('#home').hide();
     $('#myskills').hide();
     $('#contactme').show();
})

});