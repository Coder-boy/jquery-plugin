$(document).ready(function() {
    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
        enabled:true
      }
    
    });
    $('.video-link').magnificPopup({
        type:'iframe'
    
    });
    
  });