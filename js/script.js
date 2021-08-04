window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
});

$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arrowleft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arrowright.svg"></button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('fast');

            $('form').trigger('reset');
        });
        return false;
    });

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation, .button_price').fadeIn('fast');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('fast');
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });


});