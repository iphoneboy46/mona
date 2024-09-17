AOS.init({
    startEvent: 'DOMContentLoaded',
    offset: 0,
    duration: 1400,
    delay: '200',
    easing: 'ease',
    once: true,
    mirror: true,
    disable: function () {
        return $(window).width() <= 1200;
    },
});

function LinksMain() {
    try {
        const scrollTop = document.querySelector(".scroll-to-top");

        if (scrollTop) {
            scrollTop.addEventListener("click", () => {
                document.body.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }

        const menuListLink = document.querySelector(".links-main");
        window.addEventListener("scroll", () => {
            if (menuListLink) {
                if (window.scrollY > 200) {
                    menuListLink.classList.add("active");
                } else {
                    menuListLink.classList.remove("active");
                }
            }
        });




    } catch (error) {
        console.log(error);
    }
}


LinksMain();


// $('.gallery').each(function () {
//     const $this = $(this);
//     const $item = $this.find('.gItem');
//     $(function () {
//         $this.lightGallery({
//             selector: $item,
//             thumbnail: true,
//             zoom: true,
//         });
//     });
// });


function SwiperModule() {
    const eleFree = document.querySelectorAll(".free-slide");
    console.log("asdasd")

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

}

SwiperModule();

function logMess(mess) {
    console.log(mess)
}


function LinksMain() {
    try {
        const scrollTop = document.querySelector(".scroll-to-top");

        if (scrollTop) {
            scrollTop.addEventListener("click", () => {
                document.body.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }

        const menuListLink = document.querySelector(".links-main");
        window.addEventListener("scroll", () => {
            if (menuListLink) {
                if (window.scrollY > 200) {
                    menuListLink.classList.add("active");
                } else {
                    menuListLink.classList.remove("active");
                }
            }
        });

        // if(menuListLink){
        //   const btnSocial = menuListLink.querySelector(".btn-social");
        //   const linksMainList = menuListLink.querySelector(".links-main-list");
        //   btnSocial.addEventListener("click",()=>{
        //       linksMainList.classList.toggle("showed")
        //   })

        //   window.addEventListener("click",(e)=>{
        //     if(!e.target.closest(".links-main")){
        //       linksMainList.classList.remove("showed")
        //     }
        //   })

        // }


    } catch (error) {
        console.log(error);
    }
}

LinksMain();


function news() {
    const newsNews = document.querySelector(".news_new");
    if (newsNews) {
        Fancybox.bind("[data-fancybox='gallery10']", {
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
}

news();

window.logMess = logMess;
// window.SwiperModule = SwiperModule;
// window.LinksMain = LinksMain;
// window.Header = Header;