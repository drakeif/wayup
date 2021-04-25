// TABS

$('.card').on('click', function (){
    let currentTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currentTab).addClass('active');
})

// BURGER MENU

$('.hamburger').on('click', function () {
    $('.head__menu').toggle();
})

$('.menu-close').on('click', function () {
    $('.head__menu').hide();
})

// PARALAX

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

// SLIDER

const swiper = new Swiper('.swiper-container', {
   
    direction: 'horizontal',
    spaceBetween: 150,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    }
  
});

// YANDEX MAP

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: ['zoomControls', 'geolocationControl']
    });
}

// JQuerry VALIDATE

$.validator.addMethod('regex', function(value, element, regexp){
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
}, 'please check your input');
$('#form-help').validate( {
    rules : {
        firstName : {
            required: true,
            regex : "[А-Яа-я]{1,32}"
        },
        phoneNumber : {
            digits : true,
            required : true,
            minlength : 10,
            maxlength: 11,
            regex : "[0-9]+"
        }
    },
    messages : {
        firstName : 'Введите имя правильно',
        phoneNumber : 'Введите Ваш номер'
    }
})