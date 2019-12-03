$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

jQuery(document).ready(function ($) {
    setTimeout(function () {
        $('.trans--grow').addClass('grow');
    }, 275);
});


$(document).on('scroll', function () {
    if ($(this).scrollTop() > $('#title').position().top && $(this).scrollTop() < $('#title').position()
        .top + $('#title').height()) {
        $(".nav-home").addClass("nav-active");
    } else {
        $(".nav-home").removeClass("nav-active");
    }
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > $('#about').position().top && $(this).scrollTop() < $('#about').position()
        .top + $('#about').height()) {
        $(".nav-about").addClass("nav-active");
    } else {
        $(".nav-about").removeClass("nav-active");
    }
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > $('#pricing').position().top && $(this).scrollTop() < $('#pricing')
        .position().top + $('#pricing').height()) {
        $(".nav-pricing").addClass("nav-active");
    } else {
        $(".nav-pricing").removeClass("nav-active");
    }
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > $('#contact').position().top && $(this).scrollTop() < $('#contact')
        .position().top + $('#contact').height()) {
        $(".nav-contact").addClass("nav-active");
    } else {
        $(".nav-contact").removeClass("nav-active");
    }
});













