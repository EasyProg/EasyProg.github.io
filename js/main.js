


$(document).ready(
    function() {
        $('#contacts').on('click',
            function() {
            load_pages(5);
        });
        $('#main').on('click',
            function() {
                load_pages(1);
            });
        $('#services').on('click',
            function() {
                load_pages(4);
            });
        $('#portfolio').on('click',
            function() {
                load_pages(3);
            });

    }
);
function Load() {
    $.ajax({
        url: "https://formspree.io/kovkamy@gmail.com",
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
};


$("#button").on('click',Load());

function load_pages(num) {
    switch (num)
    {   case 1:
            document.getElementsByClassName("blockInfoDiv")[0].innerHTML='<div class="textDiv">Мы - швейный дом <p>"V.A.Sh style"</p>, предоставляем услуги кройки и шитья одежды ' +
                'любых размеров на заказ для физических и юридических лиц. Качество исходного материала и новейшие инструменты позволяют нам оказывать ' +
                'наиболее качественный и быстрый сервис даже самым требовательным клиентам. Мы рады вас видеть и открыты к сотрудничеству!' +
                '<img id="logo_center" src="icons/logo.gif"/>' +
                '</div>';
            return;
        case 2:
            document.getElementsByClassName("blockInfoDiv")[0].innerHTML='<object type="text/html" data="home.html" ></object>';
            return;
        case 3:
            document.getElementsByClassName("blockInfoDiv")[0].innerHTML='<div class="galleria">' +
                '<img src="img/1.jpg"/>' +
                '<img src="img/2.jpg"/>' +
                '<img src="img/3.jpg"/>' +
                '<img src="img/4.jpg"/>' +
                '<img src="img/5.jpg"/>' +
                '</div>';
            Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
            Galleria.run('.galleria');
            return;
        case 4:
            document.getElementsByClassName("blockInfoDiv")[0].innerHTML='<div class="textDiv">Мы предоставляем услуги кройки и шитья одежды на заказ, ' +
                'в любом количестве любых размеров:' +
                '<ul><li>индивидуальный пошив</li>'+
                '<li>ремонт одежды</li>'+
                '<li>массовый пошив (от 12 единиц)</li></ul>' +
                'Как мы работаем?'+
                '<div class="iconProcess">' +
                '<img src="icons/phone.svg"/>1. <br>Контакт,<br> предоставление информации</img>' +
                '<img src="icons/ruler.svg">2. <br>Уточнение, размеры, примерка</img>' +
                '<img src="icons/machine.svg">3. <br>Пошив изделия</img>' +
                '<img src="icons/shirt.svg">4. <br>Ваш заказ готов</img>' +
                '</div>'
                '</div>';
            return;
        case 5:
            document.getElementsByClassName("blockInfoDiv")[0].innerHTML='<div class="contactDiv"><div>Как нас найти:'+'<p>г. Киев</p>'+'<p>Ул. Практичная 4</p>'+'<p>ЖК "Парк Ленд "</p>' +
                '<p>Часы работы: с 9:00- 19:00</p>'+
                '<p>email: vashstyle.com@gmail.com</p>'+
                '<p>‎<a href="tel:+380667979710" id="newphone">тел. 066 7979 710</a></p>'+
                // '<p id="phone">тел. ‎<a href="tel:+380667979710">066 7979 710</a></p></div>'+
                '</div>'+
                '<div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6049.50686345864!2d30.47431897827485!3d50.394438219129924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0J_RgNCw0LrRgtC40YfQvdCw0Y8gNA!5e0!3m2!1sru!2sua!4v1517235332930"  frameborder="0" style="border:0" allowfullscreen></iframe>' +
                '</div></div>'+
                '<form id="addressform" method="POST">'+
                '<p>Напишите нам:</p>'+
                '<div><input type="text" name="fio" placeholder=" · Укажите имя"/>'+
                '<input type="text" name="phone" placeholder=" · Мобильный номер"/>'+
                '<input type="text" name="message" placeholder=" · Информация"/>'+
                '<input id="button" type="submit" value="Отправить"/></div>'+
                '</form>';
            return;

        default:
            document.getElementsByClassName("blockInfoDiv")[0].innerHTML='<object type="text/html" data="home.html" ></object>';
            return;
    }
}
