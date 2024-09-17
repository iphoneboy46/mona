function booking(){
    const booking = document.querySelector(".booking");
    if(booking){
        const items = document.querySelectorAll(".booking_item");
        items.forEach(item => {
            var mySwiperBKLF = new Swiper(item.querySelector(".mySwiperBKLF"), {
                slidesPerView: "auto",
                lazy: !0,
                pagination: {
                    el: item.querySelector(".swiper-pagination"),
                    clickable: !0,
                },
                effect: "fade",
                // fadeEffect: {
                //     crossFade: true
                // },
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
            });
        })
    }
}

booking();