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

    const story = document.querySelector(".story");
    if (story) {
        const items = story.querySelectorAll(".story_item");
        items.forEach((item, i) => {
            var mySwiperLf = new Swiper(item.querySelector(".mySwiperLf"), {
                speed: 0,
                slidesPerView: "auto",

                effect: "fade",
                // loop:true,
                // allowTouchMove: false,
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: item.querySelector(".swiper-pagination"),
                    clickable: !0,
                },

            });

            var mySWiperRt = new Swiper(item.querySelector(".mySwiperRt"), {
                speed: 0,
                slidesPerView: "auto",
                effect: "fade",
                // loop:true,
                allowTouchMove: true,
                fadeEffect: {
                    crossFade: false
                },

            });

            mySwiperLf.controller.control = mySWiperRt;
            mySWiperRt.controller.control = mySwiperLf;
        })
    }
}