var myMap, data = [], geodata = [];
var markCounter = 1;

function fromString(val) {
    var parts = val.split(',');
    return [parseFloat(parts[1]), parseFloat(parts[0])];
}

function init() {
    data[0] = {
        name: 'метро Кузьминки',
        text: '<span class="map-name">метро Кузьминки</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Васильцовский Стан, д.11</span>',
        coords: '37.751188,55.716701',
        geodata: 'ул. Васильцовский Стан, д.11'
    };
    data[1] = {
        name: 'Люберцы',
        text: '<span class="map-name">Люберцы</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">Октябрьский пр-т., д. 127, ТЦ Millenium Plaza</span>',
        coords: '37.88702,55.682423',
        geodata: 'Октябрьский пр-т., д. 127, ТЦ Millenium Plaza'
    };
    data[2] = {
        name: 'Раменское',
        text: '<span class="map-name">Раменское</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Красноармейская, д. 15а</span>',
        coords: '38.23726,55.572207',
        geodata: 'ул. Красноармейская, д. 15а'
    };
    data[3] = {
        name: 'Жуковский',
        text: '<span class="map-name">Жуковский</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Гудкова, д. 21</span>',
        coords: '38.086361,55.599732',
        geodata: 'ул. Гудкова, д. 21'
    };
    data[4] = {
        name: 'Балашиха',
        text: '<span class="map-name">Балашиха</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ш. Энтузиастов, д. 30, 3 этаж</span>',
        coords: '37.935707,55.792882',
        geodata: 'ш. Энтузиастов, д. 30, 3 этаж'
    };
    data[5] = {
        name: 'Подольск',
        text: '<span class="map-name">Подольск</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address"> ул. 50 лет ВЛКСМ, д.16</span>',
        coords: '37.537173,55.42588',
        geodata: 'ул. 50 лет ВЛКСМ, д.16'
    };
    data[6] = {
        name: 'Королев',
        text: '<span class="map-name">Королев</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Карла Маркса, д.1а</span>',
        coords: '37.820558,55.924837',
        geodata: 'ул. Карла Маркса, д.1а'
    };
    data[7] = {
        name: 'Пушкино',
        text: '<span class="map-name">Пушкино</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Чехова д.12, ТОЦ «ВИТ»</span>',
        coords: '37.852029,56.008547',
        geodata: 'ул. Чехова д.12, ТОЦ «ВИТ»'
    };
    data[8] = {
        name: 'Егорьевск',
        text: '<span class="map-name">Егорьевск</span><br/><span class="map-phone">+7 495 984 97 10</span><br/>',
        coords: '39.025935,55.382419',
        geodata: 'Откройте собственную школу YES в Егорьевске  по франшизе Центра иностранных языков YES  http://www.yescenter.ru/franchising/'
    };
    data[9] = {
        name: 'Солнцево',
        text: '<span class="map-name">Солнцево</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Солнцевский пр-т, д.6. корп.1</span>',
        coords: '37.400153,55.653908',
        geodata: 'ул. Солнцевский пр-т, д.6. корп.1'
    };
    data[10] = {
        name: 'Ховрино',
        text: '<span class="map-name">Ховрино</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Дыбенко, д.6</span>',
        coords: '37.485843,55.868435',
        geodata: 'ул. Дыбенко, д.6'
    };
    data[11] = {
        name: 'метро Павелецкая',
        text: '<span class="map-name">метро Павелецкая</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Кожевническая, д. 7, стр.2, 2 этаж, офис 202</span>',
        coords: '37.636635,55.719936',
        geodata: 'ул. Кожевническая, д. 7, стр.2, 2 этаж, офис 202'
    };
    data[12] = {
        name: 'Александров',
        text: '<span class="map-name">Александров</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">улица Свердлова, 34</span>',
        coords: '38.719554,56.396653',
        geodata: 'улица Свердлова, 34'
    };
    data[13] = {
        name: 'Тула',
        text: '<span class="map-name">Тула</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Арсенальная, 18</span>',
        coords: '37.603702,54.212492',
        geodata: 'ул. Арсенальная, 18'
    };
    data[14] = {
        name: 'метро Перово',
        text: '<span class="map-name">метро Перово</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Перовская д.66 корп. 7</span>',
        coords: '37.804224,55.743461',
        geodata: 'ул. Перовская д.66 корп. 7'
    };
    data[15] = {
        name: 'Санкт-Петербург',
        text: '<span class="map-name">Санкт-Петербург</span><br/><span class="map-phone">+7 495 984 97 10</span><br/>',
        coords: '30.407847,59.956687',
        geodata: 'Откройте собственную школу YES в Санкт-Петербурге по франшизе Центра иностранных языков YES'
    };
    data[16] = {
        name: 'Лыткарино',
        text: '<span class="map-name">Лыткарино</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><class="map-address">Советская, 14б</span>',
        coords: '37.902985,55.578508',
        geodata: 'Советская, 14б'
    };
    data[17] = {
        name: 'Волоколамск',
        text: '<span class="map-name">Волоколамск</span><br/><span class="map-phone">+7 495 984 97 10</span><br/><span class="map-address">ул. Заводская, 23</span>',
        coords: '35.919882,56.007489',
        geodata: 'ул. Заводская, 23'
    };

    function center() {
        if (window.innerWidth < 767) {
            return '37.636635, 55.719936';
        } else {
            return '37.209218, 55.753559';
        }
    }

    myMap = new ymaps.Map('map', {
        center: fromString(center()),
        zoom: ((data[0]['coords'] !== undefined) ? 10 : 10)
    }, {suppressMapOpenBlock: true});

    var myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'static/img/general/pin.png',
        iconImageSize: [28, 41],
        iconImageOffset: [-28, -41]
    });

    for (var i = 0; i < data.length; i++) {
        myCollection.add(
            new ymaps.Placemark(
                fromString(data[i]['coords']),
                {
                    iconContent: data[i].address,
                    balloonContentHeader: data[i].address,
                    balloonContentBody: data[i].text,
                    hintContent: data[i].address
                }
            )
        );
    }

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('mapTools');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('rulerControl');
}

function initMap() {
    if (typeof ymaps === 'undefined') {
        return false;
    } else {
        if ($('#map').length) {
            ymaps.ready(init);
        }
    }
}
initMap();
