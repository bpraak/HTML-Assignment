$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $("#nav").addClass("shadow");
        }
        else {
            $("#nav").removeClass("shadow");
        }

    })
})