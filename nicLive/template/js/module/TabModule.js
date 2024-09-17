export default function TabModule() {

    const tabBoxs = document.querySelectorAll(".tab-box")
    if (tabBoxs) {
        tabBoxs.forEach((tabBox) => {
            const tabBtns = tabBox.querySelectorAll(".tab-btn");
            const tabContents = tabBox.querySelectorAll(".tab-content");


            if (tabBtns) {
                tabBtns.forEach((tabBtn, index) => {

                    tabBtn.addEventListener("click", () => {

                        const tabBtnActived = tabBox.querySelector(".tab-btn.actived");
                        tabBtnActived.classList.remove("actived");
                        const tabContentShowed = tabBox.querySelector(".tab-content.showed");
                        tabContentShowed.classList.remove("showed");
                        tabBtn.classList.add("actived");
                        tabContents[index].classList.add("showed");


                    })
                })
            }
        })
    }


    const newsBanner = document.querySelector(".news_banner");
    if (newsBanner) {


        const tabs = document.querySelector(".box_tabs").clientHeight;

        const inner = newsBanner.querySelector(".news_banner--box-lf-inner");
        const item = newsBanner.querySelector(".swiper-slide");
        const wrap = newsBanner.querySelector(".news_banner--wrap");
        const total = newsBanner.clientHeight - tabs;

        wrap.style.minHeight = total + "px";
        inner.style.marginRight = item.clientWidth * -1 - 32 + "px";


    }
}


const newsBanner = document.querySelector(".news_banner");
if (newsBanner) {



    const newsBannerLf = new Swiper(newsBanner.querySelector('.mySwiperNewsLf'), {
        slidesPerView: "auto",
        autoplay: {
            delay: 8000,
            // disableOnInteraction: true,
        },
        spaceBetween: 16,
        slideToClickedSlide: true,
        loop: true,
        speed: 1200,
        pagination: {
            el: newsBanner.querySelector(".swiper-pagination"),
            clickable: !0,

        },
        navigation: {
            nextEl: newsBanner.querySelector(".next"),
            prevEl: newsBanner.querySelector(".prev"),
        },
        breakpoints: {
            1200: {
                slidesPerView: "auto",
                autoplay: {
                    delay: 5000,
                    // disableOnInteraction: true,
                },
                navigation: {
                    nextEl: newsBanner.querySelector(".next"),
                    prevEl: newsBanner.querySelector(".prev"),
                },
                spaceBetween: 32,
                slideToClickedSlide: true,
                loop: true,
                speed: 1200,
                pagination: {
                    el: newsBanner.querySelector(".swiper-pagination"),
                    clickable: !0,

                },
            },
        },


    });

    newsBannerLf.on("slideChange", () => {
        const itemShowed = newsBanner.querySelector(".news_banner--rt-item.showed");
        itemShowed.classList.remove("showed");
        const indexSl = newsBannerLf.realIndex;
        console.log(indexSl)
        const items = newsBanner.querySelectorAll(".news_banner--rt-item");
        console.log(items)
        items[indexSl].classList.add("showed")

    })


}