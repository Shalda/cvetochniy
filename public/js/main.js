$(document).ready(function () {
    "use strict";
//hamburger
    document.getElementById(['nav-icon1']).addEventListener("click", toggleClass);

    function toggleClass() {
        this.classList.toggle('open');
        document.getElementById(['nav-menu']).classList.toggle('open');
        document.querySelector('.navbar_menu').classList.toggle('link_disable');
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


//googlemaps


});
var map;

function initMap() {
    var myLatLng = {lat: 50.014619,  lng: 36.243711};
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 17,
        styles:[
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
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Магазин Цветочный'  ,
        disableDefaultUI: true,
    });

    var contentString = '<div id="content" style="color: #4d4d4d">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Магазин Цветочный</h1>'+
        '<h3>Режим работы:</h3>'+
        '<p>пн-сб 10:00 - 20:00</p>'+
        '<p>вск выходной</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}
