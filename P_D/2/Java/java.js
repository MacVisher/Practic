ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
        center: [49.813056, 73.105861],
        zoom: 19
    });

    var customLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="myPlacemarkLayout">' +
            '<img src="$[properties.iconContent]" alt="Изображение">' +
            '<div>$[properties.balloonContent]</div>' +
        '</div>'
    );

    var placemark1 = new ymaps.Placemark([49.813092, 73.105773], {
        hintContent: 'Unit 40 - YAKIMA',
        balloonContent: '',
        iconContent: '../img/pizza.svg' 
    }, {
        iconLayout: customLayout,
        iconShape: {
            type: 'Rectangle',
            coordinates: [[-25, -25], [25, 25]]
        }
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(placemark1);
});
function closeTextMenu() {
    var textMenu = document.querySelector('.text_menu');
    var menu = document.querySelector('.menu');
    var block = document.querySelector('.block');
    var fHat = document.querySelector('.f_hat');
    var hat = document.querySelector('.hat');

    // Добавляем классы анимации закрытия
    textMenu.classList.add('close-animation');
    menu.classList.add('close-animation');

    // Ждем завершения анимации
    setTimeout(function() {
        // Скрываем элементы
        textMenu.style.display = 'none';
        menu.style.display = 'none';

        // Добавляем классы анимации закрытия для остальных элементов
        block.classList.add('close-animation');
        fHat.classList.add('close-animation');
        hat.classList.add('close-animation');

        // Перемещаем остальные элементы влево
        block.style.left = '115px'; // Возможно, вам нужно будет задать другое значение
        fHat.style.left = '115px';
        hat.style.left = '115px';
    }, 500); // 500 миллисекунд, это время длительности анимации
}
