$(document).ready(function(){
    $('.items__burger-menu').click(function(event) {
        $('.items__burger-menu,.items__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
