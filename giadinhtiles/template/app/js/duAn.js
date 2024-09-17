const postJss = document.querySelectorAll(".postJs");
if (postJss) {
    if (window.screen.width > 1200) {
        postJss.forEach(post => {
            const box = post.querySelector(".post_box")
            const top = post.querySelector(".post_box--top").clientHeight;
            const bottom = post.querySelector(".post_box--bottom");
            var computedStyle = window.getComputedStyle(box);
            const gap = parseInt(computedStyle.rowGap);
            const pt = parseInt(computedStyle.paddingTop);
            const pb = parseInt(computedStyle.paddingBottom);





            const total = (bottom.clientHeight + gap) * -1
            console.log(total)
            bottom.style.marginBottom = total + "px";


        });
    }


}

const duAnNb = document.querySelector(".duAn_nb");
if (duAnNb) {
    var mySwiperDuAn = new Swiper(duAnNb.querySelector(".mySwiperDuAn"), {
        // spaceBetween: 10,
        slidesPerView: "auto",
        speed: 1000,
        loop: true,
        lazy: !0,
        // effect: "fade",
        // fadeEffect: {
        //     crossFade: true, // Kích hoạt cross-fade
        // },
        pagination: {
            el: duAnNb.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        navigation: {
            nextEl: duAnNb.querySelector(".next"),
            prevEl: duAnNb.querySelector(".prev"),
        },



    });
}

const duAnAlb = document.querySelector(".duAn_alb");
console.log(duAnAlb)
if (duAnAlb) {
    var mySwiperAlb = new Swiper(duAnAlb.querySelector('.mySwiperAlb'), {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
            el: duAnAlb.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            // depth: 250,
            modifier: 1,
            slideShadows: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: duAnAlb.querySelector('.next'),
            prevEl: duAnAlb.querySelector('.prev'),
        },

        breakpoints: {
            // 640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            // },
            1200: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 1250,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            1300: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 1200,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            1400: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 1150,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            1500: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 1100,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            1600: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 1050,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            1700: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 850,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
            1800: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 650,
                    // depth: 250,
                    modifier: 1,
                    slideShadows: false,
                },
            },
        },

    })

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