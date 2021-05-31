//  map.js

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [34.84, -111.77],
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  })

  myMap.geoObjects
    .add(new ymaps.Placemark([34.84, -111.77], {
      balloonContent: 'Отель в <strong>Седоне</strong>'
    }, {
      preset: 'islands#circleDotIcon',
      iconColor: 'red'
    }))
}

