// добавляем прослушку во всем окне

window.addEventListener ('click', function(event){


    // объявляем переменную для счетчика
    let counter;

    // проверяем клик строго по кнопкам плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');

    // находим див с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');

    }

    // является ли элемент кнопкой плюс
    if(event.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText;
    }

    // является ли элемент кнопкой минус
    if(event.target.dataset.action === 'minus'){

        if (parseInt(counter.innerText) >1 ) {
            // уменьшаем текст в счетчике
            counter.innerText = --counter.innerText;
            
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая/ Полная
            toggleCartStatus();

            // пересчет общей стоимости товара в корзине
            calcCartPriceAndDelivery();
        }
    }

    // проверяем клик на + или - в нутри корзины

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // пересчет общей стоимости товара в корзине
        calcCartPriceAndDelivery();

    }

});