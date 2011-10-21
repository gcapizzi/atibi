$(document).ready(function() { $('html').removeClass('no-js'); } );

$(window).load(function() {
    // creo gli elementi non semantici
    $('#trasporto_nav li').append('<div class="button shadow">');
    $('#trasporto_nav li').append('<div class="button glow">');
    $('#trasporto_nav a').wrapInner('<span class="label">');
    $('#trasporto_nav li').append('<div class="icon">');

    // importo un'accelerazione maggiore alle animazioni
    jQuery.easing.def = "easeOutQuart";

    // apparizione dello slogan
    $('#slogan .big_line').css({
        marginLeft: 920,
        opacity: 0
    }).animate({
        marginLeft: 0,
        opacity: 1
    }, 250);

    $('#slogan .line').each(function(i) {
        $(this).css({ opacity: 0 });
        if (i % 2 == 0) {
            $(this).css({ marginLeft: -150 });
        } else {
            $(this).css({ marginLeft: 920 });
        }
        $(this).delay(100 + 100*i).animate({
            marginLeft: 80,
            opacity: 1
        }, 250);
    });

    // apparizione animata dei bottoni
    $('#trasporto_nav li').each(function(i) {
        $(this).css({
            opacity: 0,
            marginLeft: -10
        }).delay(i * 100).animate({
            opacity: 1,
            marginLeft: 0
        }, 500);
    });

    // animazioni rollover
    $('#trasporto_nav a').mouseenter(function() {
        $(this).parent().children('.glow')
            .stop()
            .fadeIn(200);
        $(this).parent().children('.icon')
            .stop()
            .css({ backgroundPosition: "0 0" })
            .animate({ backgroundPosition: "30px 0" }, 300)
    });

    $('#trasporto_nav a').mouseleave(function() {
        $(this).parent().children('.glow')
            .stop()
            .css({ opacity: "1" })
            .fadeOut(200);
        $(this).parent().children('.icon')
            .stop()
            .animate({ backgroundPosition: "60px 0" }, 300)
    });
});
