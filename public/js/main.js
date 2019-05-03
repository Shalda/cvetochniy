"use strict";
$(document).ready(function () {
    dropDownMenuHeader();                   // dropdown menu header
    mobileAdaptive();                       // some mobile optomization
    videoHeroFullSize();                    // video resize on main page
    popUpImageProduct();                    // popup on product page
    submenuLeft();                          // site left menu
    callBackPopUp();                        // own callback
    spikmi();                               // callback from spikmi service
});

function dropDownMenuHeader() {
    //hamburger
    document.getElementById(['nav-icon1']).addEventListener("click", toggleClass);

    function toggleClass() {
        //spikmi hide when menu slidedown
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('div[class$="_root"]').toggle();
        }
        this.classList.toggle('open');
        document.getElementById(['nav-menu']).classList.toggle('open');
        document.querySelector('.navbar_menu').classList.toggle('link_disable');
    }

    //text on dropdown menu

    if (window.matchMedia('(min-width: 768px)').matches) {
        document.querySelector('.nav_menu_left').addEventListener("click", ClassText);
    }

    // function ClassText(e) {
    //     if (window.matchMedia('(min-width: 768px)').matches) { e.preventDefault();}
    //     e.preventDefault();
    //     const classMenu = e.target.className;
    //     if (classMenu) {
    //         switch (classMenu) {
    //             case 'about':
    //                 setTimeout(classTextToogle, 200, 'about');
    //                 break;
    //             case 'weddingLinkMobile':
    //                 setTimeout(classTextToogle, 200, 'weddingLinkMobile');
    //                 break;
    //             case 'visualLinkMobile':
    //                 setTimeout(classTextToogle, 200, 'visualLinkMobile');
    //                 break;
    //             case 'shop':
    //                 setTimeout(classTextToogle, 200, 'shop');
    //                 break;
    //             case 'cooperation':
    //                 setTimeout(classTextToogle, 200, 'cooperation');
    //                 break;
    //             case 'delivery':
    //                 setTimeout(classTextToogle, 200, 'delivery');
    //                 break;
    //             default:
    //                 return;
    //         }
    //     }
    // }

    function classTextToogle(e) {
        let olreadyOpen = document.querySelector('.menu_right_text.open');
        if (olreadyOpen) {
            olreadyOpen.classList.remove('open');
        }
        document.getElementById(e).classList.add('open');
    }
}

function mobileAdaptive() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        //slice long filter text
        let filterList = document.querySelectorAll('.filter-catalog .navLink');
        if (filterList) {
            for (var i = 0; i < filterList.length; i++) {
                filterList[i].innerHTML = filterList[i].innerHTML.slice(8);
            }
        }
        //video tag delete on main
        let video = document.getElementById('videoHero');
        if (video) {
            video.remove();
        }
        //shop link on dropdown menu
        document.querySelector('.shop').setAttribute("href", "shop.html");
        //resize dropmenu mobile
        document.getElementById('navMenuLeft').style.height = (document.documentElement.clientHeight - 170) + 'px';
    }
}

function videoHeroFullSize() {
    if (window.matchMedia('(min-width: 769px)').matches) {
        let video = document.getElementById('video');
        if (video) {
            video.style.height = (document.documentElement.clientHeight - 170) + 'px';
        }
    }
}

function popUpImageProduct() {
    $('.product-card__img img').click(function () {
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
}

function submenuLeft() {
    $(".mainMenu_elem ul").hide(); // скрываем выпадающее меню
    $(".mainMenu_elem").click(
        function (e) {
            e.preventDefault();
            $(this).find('ul').addClass('open_submenu').slideToggle();
        });
}

function callBackPopUp() {
// PopUp Form and thank you popup after sending message
    var $popOverlay = $(".consultation_popup-overlay");
    var $popWindow = $(".consultation_popWindow");
    var $subscribeWindow = $(".consultation_subscribe_window");
    var $popThankYouWindow = $(".thank_you_window");
    var $popClose = $(".consultation_close-btn");
    var $popUp = $('#consultationPopup');
    $(function () {
        // Close Pop-Up after clicking on the button "Close"
        $popClose.on("click", function () {
            $popOverlay.fadeOut();
            $popWindow.fadeOut();
        });

        // Close Pop-Up after clicking on the Overlay
        $(document).on("click", function (event) {
            if ($(event.target).closest($popWindow).length) return;
            if ($(event.target).closest($popUp).length) return;
            $popOverlay.fadeOut();
            $popWindow.fadeOut();
            event.stopPropagation();
        });

        // Form Subscribe
        $(".consultation_subscribe-form").submit(function () {
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: th.serialize()
            }).done(function () {
                // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
                $subscribeWindow.fadeOut();
                $popThankYouWindow.fadeIn();
                // используем куки на 30 дней, если человек заполнил форму
                // для куки обязательно должен быть подключен jquery.cookie.min.js
                //$.cookie('hideTheModal', 'true', { expires: 30 });
                // очищаем форму
                setTimeout(function () {
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    });

// используйте этот код, если нужно появление формы без куки

    $popUp.on('click', function () {
        $popOverlay.fadeIn();
        $subscribeWindow.fadeIn();
    });
}

function spikmi() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        let spikmiElem = document.createElement('script');
        spikmiElem.setAttribute('type', 'text/javascript');
        spikmiElem.setAttribute('src', 'https://spikmi.com/Widget?Id=603');
        let parentBody = document.body;
        parentBody.appendChild(spikmiElem);
    }
}

//googlemaps
function initMap() {
    var myLatLng = {lat: 50.014619, lng: 36.243711};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 17,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Магазин Цветочный',
        disableDefaultUI: true,
    });

    var contentString = '<div id="content" style="color: #4d4d4d">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Магазин Цветочный</h1>' +
        '<h3>Режим работы:</h3>' +
        '<p>пн-сб 10:00 - 20:00</p>' +
        '<p>вск выходной</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}

