document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.column').forEach(function(el){
    el.addEventListener('click', function() {
       document.querySelector(`.modal#${el.id}`).classList.toggle('is-active');  
    }) 
  });
  document.querySelectorAll('.modal-close').forEach(function(el) {
    el.addEventListener('click', function(){
       el.parentNode.classList.remove('is-active'); 
    });
  })
}); 
