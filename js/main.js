
$(document).ready(function(){
    $("#signup_btn").click(function(){
        $("#main").animate({left:"22.5%"},400);
        $("#main").animate({left:"30%"},500);
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},400);
    });

    $("#login_btn").click(function(){
        $("#main").animate({left:"77.5%"},400);
        $("#main").animate({left:"70%"},500);
        $("#loginform").animate({left:"83.5%"},400);
        $("#loginform").animate({left:"70%"},500);
        $("#loginform").css("visibility","visible");
    });
});

