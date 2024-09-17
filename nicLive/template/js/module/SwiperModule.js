export default function SwiperModule() {
    const eleFree = document.querySelectorAll(".free-slide");

    if (eleFree) {
        eleFree.forEach((ele, i) => {
            var swiper2 = new Swiper(ele.querySelector(".swiper"), {
                slidesPerView: "auto",
                lazy: !0,
                pagination: {
                    el: ele.querySelector(".swiper-pagination"),
                    clickable: !0,
                },
                centeredSlides: ele.querySelector(".swiper").classList.contains("--center"),
                loop: ele.querySelector(".swiper").classList.contains("--loop"),
                navigation: {
                    nextEl: ele.querySelector(".next"),
                    prevEl: ele.querySelector(".prev"),
                },
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
            if (!ele.querySelector(".swiper").classList.contains("--auto")) {
                swiper2.autoplay.stop();
            }
        });
    }

    const eleFree2 = document.querySelectorAll(".free-slide2");

    if (eleFree2) {
        eleFree2.forEach((ele2, i) => {
            var swiper2 = new Swiper(ele2.querySelector(".swiper"), {
                slidesPerView: "auto",
                lazy: !0,
                // pagination: {
                //   el: ele2.querySelector(".swiper-pagination"),
                //   clickable: !0,
                //   type: "progressbar",
                // },
                scrollbar: {
                    el: ele2.querySelector(".swiper-scrollbar"),
                    hide: false,
                    draggable: true,
                },
                centeredSlides: ele2.querySelector(".swiper").classList.contains("--center"),
                loop: ele2.querySelector(".swiper").classList.contains("--loop"),
                navigation: {
                    nextEl: ele2.querySelector(".next"),
                    prevEl: ele2.querySelector(".prev"),
                },
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
            if (!ele2.querySelector(".swiper").classList.contains("--auto")) {
                swiper2.autoplay.stop();
            }
        });
    }

    const bannerHome = document.querySelector(".banner_home");
    if (bannerHome) {
        const bannerHomeBg = new Swiper(bannerHome.querySelector('.mySwiperBnHome '), {
            // allowTouchMove: false,
            slidesPerView: "auto",
            speed: 600,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: bannerHome.querySelector(".swiper-pagination"),
                clickable: !0,
            },

        });
    }


    const productCt = document.querySelector(".product_ct");
    if (productCt) {
        const productCtBottom = new Swiper(productCt.querySelector('.mySwiperProCtBottom'), {
            slidesPerView: "auto",
            speed: 600,
            slideToClickedSlide: true,
            scrollbar: {
                el: productCt.querySelector(".swiper-scrollbar"),
                hide: false,
                draggable: true,
            },
        });

        const productCtTop = new Swiper(productCt.querySelector('.mySwiperProCtTop'), {
            allowTouchMove: false,
            slidesPerView: "auto",
            speed: 600,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: productCt.querySelector(".next"),
                prevEl: productCt.querySelector(".prev"),
            },
            thumbs: {
                swiper: productCtBottom,
            },

        });
    }


    const pros = document.querySelectorAll(".pro");
    if (pros) {
        pros.forEach((pro, i) => {
            const productBottom = new Swiper(pro.querySelector('.mySwiperProBottom'), {
                slidesPerView: "auto",
                speed: 600,
                slideToClickedSlide: true,
                scrollbar: {
                    el: pro.querySelector(".swiper-scrollbar"),
                    hide: false,
                    draggable: true,
                },
            });

            const productTop = new Swiper(pro.querySelector('.mySwiperProTop'), {
                allowTouchMove: false,
                slidesPerView: "auto",
                speed: 600,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: pro.querySelector(".next"),
                    prevEl: pro.querySelector(".prev"),
                },
                thumbs: {
                    swiper: productBottom,
                },

            });
        });
    }

    
}