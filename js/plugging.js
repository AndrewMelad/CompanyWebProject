$(document).ready(function() {

    /*****************************************header in phone and tablas slide******************************/
    $("header").click(function() {
        $(".nav-list").slideToggle(1000);
    });
    /******************************************  show nav to distance ******************************************/
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 497) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    /****************************************typing write ********************************/
    myTEXT = "Meet Our New Template Andrew Melad",

    i=0;


    window.onload = function  ()
    {
        "use strict";

        var wrriteL = setInterval(function ()
        {
            "use strict"; 

            document.getElementById("text").textContent += myTEXT[i];

            i=i+1;

            if(i > myTEXT.length -1 )
            {
                clearInterval(wrriteL);
            }
        }
        ,300);
    };


    /*********************** library count to*********************************************** */
    console.log("offset" + $(".statistics").offset().top);
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 2143) {
            $('.timer').countTo();
            $(window).off("scroll");
        }
    });
    /*****************************************slide photo ********************************/
    /*
    $(".buttons button").click(function()
     { 
        "use strict";
        $(this).addClass("active-btn").siblings().removeClass("active-btn");

        var FILTERCSS = $(this).prop('id');
        console.log(FILTERCSS);
        if (FILTERCSS === 'all') {
            $(".Images > div").fadeIn();
        } else  {
            $(".Images > div").fadeOut();
            $(".Images ").contents().filter('.'  + FILTERCSS ).fadeIn();
        }
    });
    */
   $('.buttons button a').click(function() {
    if($(this).attr('rel')) {
        $('.Images img').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
        
    } else {
        $(' .Images img').show();
    }
    
    return false;
});
    /************************************************************************************* */

        $('#circle').circleProgress({
            value: 0.75, //value is from 0 to 1 مساحه اللي متلونه 
            size: 150, //جحم الدايره
            startAngle: 3.14, //default 3.14 بدايه هاتكون من فين 
            thickness: 20, //سمك الدايره
            lineCap: "round",
            animation: { duration: 2000, easing: "circleProgressEasing" },
            fill: {
                gradient: ["red", "orange"]
            }
        });
        $('#circle-2').circleProgress({
            value: 0.5,
            size: 150,
            startAngle: 3.14,
            thickness: 20,
            animation: { duration: 2000, easing: "circleProgressEasing" },
            lineCap: "round",
            fill: {
                gradient: ["red"]
            }
        });
        $('#circle-3').circleProgress({
            value: 0.60,
            size: 150,
            startAngle: 3.14,
            thickness: 20,
            animation: { duration: 2000, easing: "circleProgressEasing" },
            lineCap: "round",
            fill: {
                gradient: ["blue"]
            }
        });
        $('#circle-4').circleProgress({
            value: 0.80,
            size: 150,
            startAngle: 3.14,
            thickness: 20,
            lineCap: "round",
            animation: { duration: 2000, easing: "circleProgressEasing" },
            fill: {
                gradient: ["orange"]
            }
        });
   
    

    /*****************************************owl-carousel ********************************/

    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
        /******************************choose panel*************************************/
        $('.c_panel ul li').click(function()
        {
            $(this).addClass("active-btn").siblings().removeClass("active-btn");
            var p = $(this).data('role'); 
            $(".content > div").hide();
            $(".content").contents().filter("#" + p).fadeIn();
             
        });
        /****************************** magnificPopup*************************************/
        $('.pop').magnificPopup({
            type: 'iframe',

        });
        /*****************************************scroll button ********************************/
    var scrollButton = $(".scroll"); ///لازم يكون المكان اللي يتعمل بيه الكاش الاب 
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 1000) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

    });
    scrollButton.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
});