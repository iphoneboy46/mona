const productCt = document.querySelector(".productCt");
if (productCt) {

    if (window.screen.width > 1200) {
        $(document).ready(function () {
            $('.zoom').magnify({
                speed: 100,
                magnifiedWidth: 1200,
                magnifiedHeight: 1200
            });

        });
    }

    var mySwiperProImgs = new Swiper(productCt.querySelector(".mySwiperProImgs"), {
        spaceBetween: 0,
        speed: 1000,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        // loop:true,
        scrollbar: {
            el: productCt.querySelector(".swiper-scrollbar"),
            hide: false,
            draggable: true,
        },

        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
                // loop:true,

                direction: "vertical",
                // watchSlidesProgress: true,
                scrollbar: {
                    el: productCt.querySelector(".swiper-scrollbar"),
                    hide: false,
                    draggable: true,
                },
            }

        }
    });
    var mySwiperProThumbs = new Swiper(productCt.querySelector(".mySwiperProThumbs"), {
        // spaceBetween: 10,
        slidesPerView: "auto",
        speed: 1000,
        loop: true,
        lazy: !0,
        effect: "fade",
        navigation: {
            nextEl: productCt.querySelector(".next"),
            prevEl: productCt.querySelector(".prev"),
        },
        thumbs: {
            swiper: mySwiperProImgs,

        },


    });


    const contents = productCt.querySelectorAll(".productCt_rt--content");
    if (contents) {
        contents.forEach((content) => {
            const wrap = content.querySelector(".listInfo ");
            const btnShow = content.querySelector(".BtnShowInfo");
            const btnHidden = content.querySelector(".BtnHiddenInfo");


            btnShow.addEventListener("click", () => {
                wrap.classList.add("showed");
                btnShow.style.display = "none";
                btnHidden.style.display = "block";
            })

            btnHidden.addEventListener("click", () => {
                wrap.classList.remove("showed");
                btnShow.style.display = "block";
                btnHidden.style.display = "none";
            })
        })


    }


}

const product = document.querySelector(".productsc");
if (product) {




    const items = product.querySelectorAll(".productsc_filter--item.faqBox");

    items.forEach((item, index) => {
        const faqItem = item.querySelector(".faq-it");
        const faqContent = item.querySelector(".faq-content");


        // if (index === 0) {
        faqItem.classList.add("actived");
        $(faqContent).slideDown(300);
        // }



        faqItem.addEventListener("click", (e) => {
            if (!e.target.closest(".faq-content")) {
                if (faqContent.style.display == "none" || faqContent.style.display == "") {
                    faqItem.classList.add("actived");
                    $(faqContent).slideDown(300);

                } else {


                    faqItem.classList.remove("actived");
                    $(faqContent).slideUp(300);
                }
            }

        })

        // if(window.screen.width > 1024){
        //     window.addEventListener("click", (e) => {
        //         if (!e.target.closest(".faq-it")) {
        //             $(faqContent).slideUp(300);
        //             faqItem.classList.remove("actived");
        //         }
        //     })
        // }

    
    })



    if (window.screen.width < 1024) {
        const btn = product.querySelector(".btn-filter");
        const menu = product.querySelector(".productsc_lf");
        const modal = document.querySelector(".productsc_filter--modal");
        const ex = product.querySelector(".productsc_filter--ex");
        btn.addEventListener("click", () => {
            menu.classList.add("showed");
            modal.classList.add("showed");
            document.body.style.overflow = "hidden";
            totalHeight()
            const items = product.querySelectorAll(".productsc_filter--item.faqBox");
            items.forEach((item, index) => {
                const faqItem = item.querySelector(".faq-it");
                const faqContent = item.querySelector(".faq-content");
                setTimeout(() => {
                  
                        faqItem.classList.add("actived");
                        $(faqContent).slideDown(300);
                    
                }, 700)

            })

        })

        ex.addEventListener("click", () => {
            menu.classList.remove("showed");
            modal.classList.remove("showed");
            document.body.style.overflow = "auto";
        })

        function totalHeight() {
            const menu = product.querySelector(".productsc_lf");
            const filter = product.querySelector(".productsc_filter");
            const title = product.querySelector(".productsc_filter--title");
            const computedStyle1 = window.getComputedStyle(filter);
            const list = product.querySelector(".productsc_filter--list");
            const btn = filter.querySelector(".btn");
            const total = menu.clientHeight - parseInt(computedStyle1.paddingTop) - parseInt(computedStyle1.paddingBottom) - title.clientHeight - parseInt(computedStyle1.rowGap) - btn.clientHeight;


            list.style.maxHeight = total + "px";

        }
        totalHeight();


        function btnScroll() {
            window.addEventListener("scroll", () => {
                const title = product.querySelector(".productsc_rt--title");
                const hd = document.querySelector(".header");
                const btn = product.querySelector(".btn-filter");
                if (window.scrollY >= (title.offsetTop + (hd.clientHeight * 2.5))) {
                    btn.classList.add("actived");
                } else {
                    btn.classList.remove("actived");

                }
            })
        }

        btnScroll();

    }



}


function ScrollToSectionModule() {
    const speed = 800;
    // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
    const hash = window.location.hash;
    if ($(hash).length) scrollToID(hash, speed);

    function scrollToID(id, speed) {
        const offSet = $(".header").outerHeight();
        const section = $(id).offset();
        const targetOffset = section.top - offSet;
        $("html,body").animate({ scrollTop: targetOffset }, speed);
    }
}

ScrollToSectionModule();