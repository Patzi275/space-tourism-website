$(function() {
    let nav_toggler = $('#checkbox_toggle');

    nav_toggler.on('click', function() {
        $('header nav').animate({width: 'toggle'}, 500);
    });  
});