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

    const homeDh = document.querySelector(".home_dh");
    if (homeDh) {

        const homeDfBottomRt = new Swiper(homeDh.querySelector('.mySwiperRtBottom'), {
            slidesPerView: "auto",
            speed: 800,
            slideToClickedSlide: true,
            scrollbar: {
                el: homeDh.querySelector(".swiper-scrollbar"),
                hide: false,
                draggable: true,
            },
        });

        const homeDhLf = new Swiper(homeDh.querySelector('.mySwiperLf'), {
            slidesPerView: "auto",
            speed: 800,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: homeDh.querySelector(".next"),
                prevEl: homeDh.querySelector(".prev"),
            },
            thumbs: {
                swiper: homeDfBottomRt,
            },
        });

        const homeDfTopRt = new Swiper(homeDh.querySelector('.mySwiperRtTop'), {
            slidesPerView: "auto",
            speed: 800,

        });

        const homeDhIcs = homeDh.querySelectorAll(".home_dh--ic")

        homeDhLf.on('slideChange', () => {
            const homeDhIcShowed = homeDh.querySelector(".home_dh--ic.showed ")
            homeDhIcShowed.classList.remove("showed")

            const activeIndex = homeDhLf.activeIndex;

            homeDhIcs[activeIndex].classList.add("showed")
        });


        homeDhLf.controller.control = homeDfTopRt
        homeDfTopRt.controller.control = homeDhLf



    }

    const bnHome = document.querySelector(".banner_home");
    if(bnHome){
        const swiper = new Swiper(bnHome.querySelector('.mySwiperBnHome'), {
            slidesPerView: "auto",
            speed: 800,
            effect: "fade",
            // fadeEffect: {
            //     crossFade: true
            // },
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: bnHome.querySelector(".swiper-pagination"),
                clickable: true,
            },
        });
    }
}