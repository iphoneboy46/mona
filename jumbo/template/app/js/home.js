


const bannerHome = document.querySelector(".banner_home ");
if (bannerHome) {
    var mySwiperBnHome = new Swiper(bannerHome.querySelector(".mySwiperBnHome"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
            el: bannerHome.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        // simulateTouch: false,
        effect: "fade",
        fadeEffect: {
            // crossFade: true
        },
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 8000,
            disableOnInteraction: true,
        },

    });
}

const homeNews = document.querySelector(".home_news");
if (homeNews) {
    var swiper = new Swiper(homeNews.querySelector(".mySwiperNews"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
            el: homeNews.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        centeredSlides: false,
        loop: true,
        navigation: {
            nextEl: homeNews.querySelector(".next"),
            prevEl: homeNews.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                centeredSlides: true,
            },
        },
    });

}