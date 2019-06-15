jQuery(function($) {
    $(window).scroll(function() {
        var offset = $(this).scrollTop() / 50;
        $('.bg_scroll').css( 'background-position', '0px ' + offset + 'px' );
    });
});

jQuery(function($) {
    $(window).scroll(function() {
        var offset = $(this).scrollTop() / 50;
        $('.h').css( 'background-position', '0px ' + offset + 'px' );
    });
});