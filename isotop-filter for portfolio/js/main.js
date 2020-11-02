$(document).ready(function(){
//   // init Isotope
    var $grid = $('.portfolio-item').isotope({
        // options
    });
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // filter items on button  active
    $('.portfolio-menu li').click(function(){
        $(' li').removeClass('active');
      
        $(this).addClass('active');
      
    });  
})

