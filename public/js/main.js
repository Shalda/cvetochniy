"use strict";
document.getElementById(['nav-icon1']).addEventListener("click", toggleClass);

function toggleClass() {
    this.classList.toggle('open');
    document.getElementById(['nav-menu']).classList.toggle('open')
}

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
document.getElementById('video').style.height = (document.documentElement.clientHeight - 170) + 'px';
