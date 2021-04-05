$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });
    
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $("html").niceScroll({
        cursorcolor: "#000",
        cursorwidth: "5px",
        cursorborder: false,
    });
});
