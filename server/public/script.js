jQuery(function ($) {
    $('#accordion li').hover(function () {
        $(this).find('ul').stop(true, true).slideDown()
    }, function () {
        $(this).find('ul').stop(true, true).slideUp()
    }).find('ul').hide()

});


