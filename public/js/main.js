"use strict";
//hamburger
document.getElementById(['nav-icon1']).addEventListener("click", toggleClass);

function toggleClass() {
    this.classList.toggle('open');
    document.getElementById(['nav-menu']).classList.toggle('open');
    document.querySelector('.navbar_menu').classList.toggle('link_disable')
}

//text on dropdown menu
document.querySelector('.nav_menu_left').addEventListener("click", ClassText);

function ClassText(e) {
    const classMenu = e.target.className;
    if (classMenu) {
        switch (classMenu) {
            case 'about':
                setTimeout(classTextToogle, 200, 'about');
                break;
            case 'shop':
                setTimeout(classTextToogle, 200, 'shop');
                break;
            case 'cooperation':
                setTimeout(classTextToogle, 200, 'cooperation');
                break;
            case 'delivery':
                setTimeout(classTextToogle, 200, 'delivery');
                break;
            default:
                return;
        }
    }
}

function classTextToogle(e) {
    let olreadyOpen = document.querySelector('.menu_right_text.open');
    if (olreadyOpen) {
        olreadyOpen.classList.remove('open');
    }
    document.getElementById(e).classList.add('open');

}

//video fullscreen size
let video = document.getElementById('video');
if (video) {
    video.style.height = (document.documentElement.clientHeight - 170) + 'px';
}

//popup

$('.catalog-item__img img').click(function () {
    console.log('asdfas');
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign img').attr('src', $(this).attr('src'));
    $('.js-overlay-campaign').addClass('disabled');

 });

// закрыть на крестик
$('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign').fadeOut();

    }
});


