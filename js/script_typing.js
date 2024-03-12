$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing2", {
        //page 19
         strings:["Multi millionaire Goran Tatié is just 36 years old. He comes from Split in Croatia, but today he lives in Victoria, Australia, and has Australian nationality.", 
         "Mr. Tatié owns half of the Orion Group. His colleague, James Bernard, owns the other 50%.", 
        "Orion companies have total sales of about $3billion a year, and about 50,000 people work for the group."],
         typeSpeed:50,
         /*backSpeed:30,*/
         loop:false,

     });
    

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});