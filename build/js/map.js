function init(){new ymaps.Map("map",{center:[34.84,-111.77],zoom:6},{searchControlProvider:"yandex#search"}).geoObjects.add(new ymaps.Placemark([34.84,-111.77],{balloonContent:"Отель в <strong>Седоне</strong>"},{preset:"islands#circleDotIcon",iconColor:"red"}))}ymaps.ready(init);