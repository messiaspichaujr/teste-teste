$(document).ready(function(){

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function (){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
    
        console.log(scrollPosition);
    });

});