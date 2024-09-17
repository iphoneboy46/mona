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
                // centeredSlides: ele.querySelector(".swiper").classList.contains("--center"),
                // loop: ele.querySelector(".swiper").classList.contains("--loop"),
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
            // if (!ele.querySelector(".swiper").classList.contains("--auto")) {
            //     swiper2.autoplay.stop();
            // }
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
                // centeredSlides: ele2.querySelector(".swiper").classList.contains("--center"),
                // loop: ele2.querySelector(".swiper").classList.contains("--loop"),
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
            // if (!ele2.querySelector(".swiper").classList.contains("--auto")) {
            //     swiper2.autoplay.stop();
            // }
        });
    }

    const why = document.querySelector(".why");
    if (why) {
        



        if (window.screen.width > 800) {
            const slideWrap = why.querySelector(".why_box--rt-wrap").clientWidth;
            const slideList = why.querySelector(".why_box--rt-list").clientWidth;

            console.log(slideList)

            
            const total = slideWrap - slideList / 1.1;

            console.log(total)

            const whyBg = new Swiper(why.querySelector('.mySwiperBgs'), {
                slidesPerView: "auto",
                speed: 1200,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
            });

            const whyImg = new Swiper(why.querySelector('.mySwiperImgs'), {
                    slidesPerView: "auto",
                    speed: 1200,
                    grabCursor: true,
                    effect: "creative",
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    // creativeEffect: {
                    //     prev: {
                    //         shadow: true,
                    //         translate: ["-120%", 0, -250],
                    //     },
                    //     next: {
                    //         shadow: true,
                    //         translate: ["65%", 0, -250],
                    //     },
                    // },
                    creativeEffect: {
                        prev: {
                            translate: ["-100%", 0, -250],
                        },
                        next: {
                            translate: [total, 0, -250],
                        },
                    },
                },

            );


            whyBg.controller.control = whyImg;
            whyImg.controller.control = whyBg;

            const faqItems = why.querySelectorAll(".faq-it-why");
            const faqContents = why.querySelectorAll(".faq-content-why");


            if (faqItems) {
                faqItems.forEach((faqItem, index) => {


                    faqContents.forEach((faqContent, index) => {
                        if (index === 0) {
                            $(faqContent).slideDown(500);
                            faqItems[0].classList.add("actived");
                            whyImg.slideTo(0)
                        }
                    })


                    faqItem.addEventListener("click", (e) => {
                        e.stopPropagation();
                        onItemClick(index);
                        faqItem.classList.add("actived");

                    })

                })

            }


            function onItemClick(index) {
                // Chuyển slide tới index
                whyImg.slideTo(index);


            }

            // Hàm xử lý sự kiện khi chuyển slide
            whyImg.on('slideChange', function () {
                // Ẩn item của slide trước đó và hiển thị item của slide mới
                var activeIndex = whyImg.realIndex; // Sử dụng realIndex để lấy chỉ số thực tế của slide
                const items = why.querySelectorAll(".faq-it-why")
                const itemActived = why.querySelector(".faq-it-why.actived")
                if (itemActived) {
                    itemActived.classList.remove("actived")
                }
                const faqContents = why.querySelectorAll(".faq-content-why");
                faqContents.forEach((faqContent) => {
                    $(faqContent).slideUp(500);

                });
                $(faqContents).eq(activeIndex).slideDown(500);
                items[activeIndex].classList.add("actived");

            });

            // Thêm sự kiện click cho các nút điều hướng Swiper
            $('.swiper-button-next, .swiper-button-prev').on('click', function () {
                var index = swiper.realIndex;
                onItemClick(index);
            });
        } else {

            const whyBg = new Swiper(why.querySelector('.mySwiperBgs'), {
                slidesPerView: "auto",
                speed: 1200,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
            });

            const whyImg = new Swiper(why.querySelector('.mySwiperImgs'), {
                    slidesPerView: "auto",
                    speed: 1200,
                    grabCursor: true,
                    effect: "fade",
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },
                },

            );


            whyBg.controller.control = whyImg;
            whyImg.controller.control = whyBg;

            const faqItems = why.querySelectorAll(".faq-it-why");
            const faqContents = why.querySelectorAll(".faq-content-why");


            if (faqItems) {
                faqItems.forEach((faqItem, index) => {


                    faqContents.forEach((faqContent, index) => {
                        if (index === 0) {
                            $(faqContent).slideDown(500);
                            faqItems[0].classList.add("actived");
                            whyImg.slideTo(0)
                        }

                    })


                    faqItem.addEventListener("click", (e) => {
                        e.stopPropagation();
                        onItemClick(index);



                        faqItem.classList.add("actived");

                    })


                })



            }


            function onItemClick(index) {
                // Chuyển slide tới index
                whyImg.slideTo(index);


            }

            // Hàm xử lý sự kiện khi chuyển slide
            whyImg.on('slideChange', function () {
                // Ẩn item của slide trước đó và hiển thị item của slide mới
                var activeIndex = whyImg.realIndex; // Sử dụng realIndex để lấy chỉ số thực tế của slide
                const items = why.querySelectorAll(".faq-it-why")
                const itemActived = why.querySelector(".faq-it-why.actived")
                if (itemActived) {
                    itemActived.classList.remove("actived")
                }
                const faqContents = why.querySelectorAll(".faq-content-why");
                faqContents.forEach((faqContent) => {
                    $(faqContent).slideUp(500);

                });
                $(faqContents).eq(activeIndex).slideDown(500);
                items[activeIndex].classList.add("actived");

            });

            // Thêm sự kiện click cho các nút điều hướng Swiper
            $('.swiper-button-next, .swiper-button-prev').on('click', function () {
                var index = swiper.realIndex;
                onItemClick(index);
            });
        }






    }

    const aboutAlb = document.querySelector('.about_albums');
    if (aboutAlb) {
        const abAlb = new Swiper(aboutAlb.querySelector('.mySwiperAlb'), {
            slidesPerView: "auto",
            speed: 1200,
            effect: "fade",
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            fadeEffect: {
                crossFade: false
            },
            pagination: {
                el: aboutAlb.querySelector(".swiper-pagination"),
                clickable: true,
                renderBullet: function (index, className) {
                    // Thêm số 0 nếu index nhỏ hơn 10
                    var pageNumber = index < 9 ? '0' + (index + 1) : index + 1;
                    return '<span class="' + className + '">' + pageNumber + '</span>';
                },
            },
        });
    }

    const bnHome = document.querySelector(".banner_home");
    if (bnHome) {
        const bannerHome = new Swiper(bnHome.querySelector('.mySwiperBnHome'), {
            slidesPerView: "auto",
            speed: 1200,
            effect: "fade",
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            fadeEffect: {
                crossFade: false
            },
            pagination: {
                el: bnHome.querySelector(".swiper-pagination"),
                clickable: true,
                renderBullet: function (index, className) {
                    // Thêm số 0 nếu index nhỏ hơn 10
                    var pageNumber = index < 9 ? '0' + (index + 1) : index + 1;
                    return '<span class="' + className + '">' + pageNumber + '</span>';
                },
            },
        });
    }

    const homeTeam = document.querySelector(".home_team");
    if (homeTeam) {


        const homeTeamBottom = new Swiper(homeTeam.querySelector('.mySwiperTeamBottom'), {


            slidesPerView: "auto",
            speed: 800,
            slideToClickedSlide: true,
            scrollbar: {
                el: homeTeam.querySelector(".swiper-scrollbar"),
                hide: false,
                draggable: true,
            },
        });

        const homeTeamTop = new Swiper(homeTeam.querySelector('.mySwiperTeamTop'), {
            allowTouchMove: false,
            slidesPerView: "auto",
            speed: 800,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },

            thumbs: {
                swiper: homeTeamBottom,
            },

        });

        homeTeamTop.on('slideChange', function () {
            pauseYouTubeVideo();
        })

        function pauseYouTubeVideo() {
            var iframes = document.querySelectorAll('iframe');
            console.log(iframes)
            if (iframes) {
                iframes.forEach(function (iframe) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

                })
            }
        }


    }
}