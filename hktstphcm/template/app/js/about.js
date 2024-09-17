
const aboutImgs = document.querySelector(".about_imgs");
if (aboutImgs) {
    var mySwiperAbImgs = new Swiper(aboutImgs.querySelector(".mySwiperAbImgs"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
            el: aboutImgs.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        // navigation: {
        //     nextEl: aboutImgs.querySelector(".next"),
        //     prevEl: aboutImgs.querySelector(".prev"),
        // },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
    });
}

const aboutTc = document.querySelector(".about_tc");
if (aboutTc) {
    // var swiperAbtc = new Swiper(aboutTc.querySelector(".swiperAbtc"), {
    //     slidesPerView: "auto",
    //     lazy: !0,
    //     pagination: {
    //         el: aboutTc.querySelector(".swiper-pagination"),
    //         clickable: !0,
    //     },
    //     navigation: {
    //         nextEl: aboutTc.querySelector(".next"),
    //         prevEl: aboutTc.querySelector(".prev"),
    //     },
    //     centeredSlides: true,
    //     loop: true,
    //     speed: 1200,

    //     // loopedSlides: 3,
    //     // virtualTranslate: true,
    //     // autoplay: {
    //     //     delay: 8000,
    //     //     disableOnInteraction: false,
    //     // },
    // });

    $(document).ready(function () {
        const owl = $(".owl-carousel");

        owl.owlCarousel({
            loop: true,
            margin: 5,
            nav: true,
            center: true,
            items: 1.25,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1200,
            responsive: {
                600: {
                    margin: 5,
                    items: 1.5,

                },
                1200: {
                    margin: 10,

                    items: 3
                }
            }
        });




        $('.owl-carousel').append(`
            <div class="owl-nav">
              <button class="owl-prev">
                <i class="fas fa-angle-left"></i>
              </button>
              <button class="owl-next">
                <i class="fas fa-angle-right"></i>
              </button>
            </div>
          `);


        // Tùy chỉnh các nút điều hướng
        $('.owl-prev').click(function () {
            owl.trigger('prev.owl.carousel');
        });

        $('.owl-next').click(function () {
            owl.trigger('next.owl.carousel');
        });
    });



}


const aboutQt = document.querySelector(".about_qt");
if (aboutQt) {
    var mySwiperQtBottom = new Swiper(aboutQt.querySelector(".mySwiperQtBottom"), {
        slidesPerView: "auto",
        lazy: !0,
        loop: true,
        speed: 1200,
        slideToClickedSlide: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
    });

    var mySwiperQtTop = new Swiper(aboutQt.querySelector(".mySwiperQtTop"), {
        slidesPerView: "auto",
        lazy: !0,
        loop: true,
        speed: 1200,

        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
    });

    mySwiperQtBottom.controller.control = mySwiperQtTop;
    mySwiperQtTop.controller.control = mySwiperQtBottom;


    const top = aboutQt.querySelector(".about_qt--bottom-item-top .title-sm");
    const item = aboutQt.querySelector(".about_qt--bottom-item-wrap");
    const around = aboutQt.querySelector(".around");
    var computedStyle = window.getComputedStyle(item);
    const arrow = aboutQt.querySelector(".lineTT-Arrow");
    const line = aboutQt.querySelector(".lineTT");


    const total = top.clientHeight + parseInt(computedStyle.rowGap) + (around.clientHeight * 1.85);
    // const total2 = top.clientHeight +  parseInt(computedStyle.rowGap) ;

    line.style.top = total + "px";
    // arrow.style.top = total  + "px";


    if (window.screen.width < 1200) {
        const total = top.clientHeight + parseInt(computedStyle.rowGap) + (around.clientHeight * 1.55);
        line.style.top = total + "px";
    }

    if (window.screen.width < 800) {
        const total = top.clientHeight + parseInt(computedStyle.rowGap) + (around.clientHeight * 1.5);
        line.style.top = total + "px";
    }

    if (window.screen.width < 600) {
        const total = top.clientHeight + parseInt(computedStyle.rowGap) + (around.clientHeight * 1.2);
        line.style.top = total + "px";
    }


}



