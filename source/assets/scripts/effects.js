$(function() {
    nav_toggle();
    
});

function nav_toggle() {
    let nav_toggler = $('#checkbox_toggle');
    let nav_icon_close = $('.nav_close');
    let nav_icon_open = $('.nav_open');

    nav_toggler.on('click', function() {
        console.log($(this).prop('checked'));
        if ($(this).prop('checked')) {
            $('header nav').css('width', '70vw');
            nav_icon_close.toggle();
            nav_icon_open.toggle();
        } else {
            $('header nav').css('width', 0);
            nav_icon_close.toggle();
            nav_icon_open.toggle();
        }
    });
}
   