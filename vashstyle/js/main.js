$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var blockPos = $('.menuHeader').offset().top;

    if (scrollPos>blockPos&&scrollPos>=800) {
        $('.menuHeader').css({position:"fixed",top:0});
    }
    else
       if (scrollPos<800) {
        $('.menuHeader').css({position:"absolute",bottom:0,top:'',height:'80px'});
                          }
});
$(document).ready(function() {
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');
    $('.slider').bxSlider();
    $('.bxslider').bxSlider({captions:true});
    $(".lnk").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top - 400;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".menuHeader").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 400;
        $('body,html').animate({scrollTop: top}, 1500);
    });





    var images = ["header.jpg", "header2.jpg", "header3.jpg"];
    $(function () {
        var i = 0;
        //$("#dvImage").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#fgt").fadeOut("slow", function () {
                $(this).css("background-image", "url(./img/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 4000);
    });
});



