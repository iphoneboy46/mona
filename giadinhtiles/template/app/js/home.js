


const bannerHome = document.querySelector(".banner_home");
if (bannerHome) {
    var mySwiperBnHome = new Swiper(bannerHome.querySelector(".mySwiperBnHome"), {
        // spaceBetween: 10,
        slidesPerView: "auto",
        speed: 1000,
        loop: true,
        lazy: !0,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: bannerHome.querySelector(".swiper-pagination"),
            clickable: !0,
        },


    });
}
 
const homeSp = document.querySelector(".home_sp");

if (homeSp) {
    const items = homeSp.querySelectorAll(".home_sp--lf-item");
    items.forEach((item) => {
        const link = item.querySelector(".link");
        const box = item.querySelector(".home_sp--lf-item-box");
        var computedStyle3 = window.getComputedStyle(box);


        const total = (link.clientHeight + parseInt(computedStyle3.rowGap) + 10 ) * -1;

        link.style.marginBottom = total + "px";

    })
}


const homeNb = document.querySelector(".home_nb");
if (homeNb) {


    var mySwiperNbrt = new Swiper(homeNb.querySelector(".mySwiperNbrt"), {
        // spaceBetween: 10,
        slidesPerView: "auto",
        speed: 1200,
        loop: true,
        lazy: !0,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: false,
            slideShadows: false,
            shadowOffset: 0,
            shadowScale: 0.9,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: homeNb.querySelector(".next"),
            prevEl: homeNb.querySelector(".prev"),
        },
        pagination: {
            el: homeNb.querySelector(".swiper-pagination"),
            clickable: !0,
        },


    });

    mySwiperNbrt.on('slideChange', function () {
        // Ẩn item của slide trước đó và hiển thị item của slide mới
        var activeIndex = mySwiperNbrt.realIndex; // Sử dụng realIndex để lấy chỉ số thực tế của slide
        const items = homeNb.querySelectorAll(".home_nb--lf-item")
        const itemActived = homeNb.querySelector(".home_nb--lf-item.actived")
        if (itemActived) {
            itemActived.classList.remove("actived")
        }

        items[activeIndex].classList.add("actived")


    });

}



const homeDa = document.querySelector(".home_da");
if (homeDa) {
    var mySwiperAlb = new Swiper(homeDa.querySelector('.mySwiperHda'), {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        pagination: {
            el: homeDa.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 25,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: homeDa.querySelector('.next'),
            prevEl: homeDa.querySelector('.prev'),
        },

    })

    mySwiperAlb.on('slideChange', function () {
        // Ẩn item của slide trước đó và hiển thị item của slide mới
        var activeIndex = mySwiperAlb.realIndex; // Sử dụng realIndex để lấy chỉ số thực tế của slide
        const items = homeDa.querySelectorAll(".home_da--filter-item")
        const itemActived = homeDa.querySelector(".home_da--filter-item.actived")
        if (itemActived) {
            itemActived.classList.remove("actived")
        }

        items[activeIndex].classList.add("actived")


    });


    const itemFilters = homeDa.querySelectorAll(".home_da--filter-item");
    itemFilters.forEach((item,index) => {
        item.addEventListener("click",()=>{
            const itemActived = homeDa.querySelector(".home_da--filter-item.actived")
            if (itemActived) {
                itemActived.classList.remove("actived")
            }

            item.classList.add("actived")
            mySwiperAlb.slideToLoop(index, 500);
        })
    })

    const items = homeDa.querySelectorAll(".home_da--item");
    items.forEach((item) => {
        const box = item.querySelector(".home_da--item-box");
        const content = item.querySelector(".home_da--item-content");
        const tt = item.querySelector(".home_da--item-tt");
        var computedStyle3 = window.getComputedStyle(box);

        const total = box.clientHeight - content.clientHeight - parseInt(computedStyle3.paddingTop);

        tt.style.height = total + "px";

    })
}