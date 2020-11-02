
document.querySelector(".menu-icon").addEventListener("click",function () {
    document.querySelector("nav ul").classList.toggle("showing")
    
});


 window.addEventListener("scroll",function () {
     let MenuArea = document.getElementById('menu-area');

    if (window.pageYOffset >0) {
         MenuArea.classList.add("black");
     } else {
        MenuArea.classList.remove("black");
     }
     
     
     
 });
 $(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

});
//  for smooth scrolling
 $(document).ready(function() {
   
    $('#nav').onePageNav();
    $('#menu').slicknav();
    
   

    
});


//for preloader
$(window).on("load" , function () {
            $(".preloader").fadeOut()
})

    


    
