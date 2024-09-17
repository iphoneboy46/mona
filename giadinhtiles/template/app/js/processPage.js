const processSl = document.querySelector(".process_sl");
if (processSl) {
    var mySwiperSllf = new Swiper(processSl.querySelector(".mySwiperSllf"), {
        slidesPerView: "auto",
        lazy: !0,
        scrollbar: {
            el: processSl.querySelector(".swiper-scrollbar"),
            hide: false,
            draggable: true,
        },
        spaceBetween: 0,
        // direction: 'vertical',
        speed: 1000,
        slideToClickedSlide: true,
        navigation: {
            nextEl: processSl.querySelector(".next"),
            prevEl: processSl.querySelector(".prev"),
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            800: {
                direction: 'vertical',
                spaceBetween: 20,

            },
        },
    });

    var mySwiperSlrt = new Swiper(processSl.querySelector(".mySwiperSlrt"), {
        slidesPerView: "auto",
        lazy: !0,
        effect: "fade",
        // fadeEffect: {
        //     crossFade: false
        // },

        speed: 1000,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
    });

    mySwiperSllf.controller.control = mySwiperSlrt;
    mySwiperSlrt.controller.control = mySwiperSllf;

    const items = processSl.querySelectorAll(".process_sl--lf-item")
    if (items) {
        if (window.screen.width > 800) {
            items.forEach((item) => {
                const wrap = item.querySelector(".process_sl--lf-item-wrap");
                const content = item.querySelector(".content");
                var computedStyle = window.getComputedStyle(wrap);
                const title = item.querySelector(".box_title");

                const total = item.clientHeight - title.clientHeight - parseInt(computedStyle.rowGap);

                content.style.maxHeight = total + "px";
            })
        }

    }

}

const utilities = document.querySelector(".utilities");
if (utilities) {
    Fancybox.bind("[data-fancybox='gallery']", {
        loop: false, // Tắt loop trong Fancybox
        on: {
            init: (fancybox) => {
                // Lọc bỏ các slide nhân bản trước khi Fancybox hiển thị
                fancybox.items = fancybox.items.filter(item => {
                    return !item.$trigger.closest('.swiper-slide').classList.contains('swiper-slide-duplicate');
                });
            }
        }
    });
}