requirejs.config({
    baseUrl: './public/js'
});

define(["jquery", "domReady"], function ($) {
    "use strict";
    document.getElementById(['nav-icon1']).addEventListener("click", toggleClass);
    function toggleClass() {
        this.classList.toggle('open');
        document.getElementById(['nav-menu']).classList.toggle('open')
    }
    document.querySelector('.nav_menu_left').addEventListener("mouseover", ClassText);

    function ClassText(e) {
        const classMenu = e.target.classList[0];
        if (classMenu) {
            switch (classMenu) {
                case 'about':
                    classTextToogle('about');
                    break;
                case 'cooperation':
                    classTextToogle('cooperation');
                    break;
                case 'delivery':
                    classTextToogle('delivery');
                    break;
                default:
                    return;
            }
        }
    }
    function classTextToogle(e) {
        let olreadyOpen =  document.querySelector('.menu_right_text.open');
        if(olreadyOpen){
            olreadyOpen.classList.remove('open');
        }
        setTimeout(function (){document.getElementById(e).classList.add('open')} , 200)

    }
});