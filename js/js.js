function closePopup() {
    $('.order-call-form').parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    $('body').css({'overflow': 'auto'});
}
$(function () {
    $('.order-call').click(function () {
        $('.call-form-wrap').css({'display': 'flex'}).show(200);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter': 'alpha(opacity=80)'});
        $('body').css({'overflow': 'hidden'});
        return false;
    });
    $('.close').click(function () {
        closePopup();
        return false;
    });
});
$(function () {
    $('.order-call-form').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'https://echo.htmlacademy.ru/', // Этот URL - тестовый
            data: $(this).serialize(),
            complete: function () {
                closePopup();
            }
        });
    })
})

$(function () {
    var flag = true;
    $('.header__toggle-menu').on('click', function () {

        $('.menu-mobil').slideToggle(0, function () {
            if (flag) {
                flag = false;
                $(this).css({
                    'flex-direction': 'column',
                    'display': 'flex'
                });
                $('.header__toggle-menu i').attr('class','fa fa-times');
            } else {
                flag = true;
                $('.header__toggle-menu i').attr('class','fa fa-bars');
            }
        });
    });
});
$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        responsive: [
            {
                breakpoint: 1221,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
            });
});


