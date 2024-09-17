export default function SwiperProduct() {
    const productItemWraps = document.querySelectorAll(".product_item--wrap");
    if (productItemWraps) {

        productItemWraps.forEach((productItemWrap, i) => {
            var swiperThumbs = new Swiper(productItemWrap.querySelector(".mySwiperThumbs"), {
                speed: 1000,
                slidesPerView: "auto",
                spaceBetween: 4,
                scrollbar: {
                    el: productItemWrap.querySelector(".swiper-scrollbar"),
                    hide: false,
                    draggable: true,
                },
            });

            var swiperImgs = new Swiper(productItemWrap.querySelector(".mySwiperImgs"), {
                speed: 1000,
                slidesPerView: "auto",

                effect: "fade",
                // loop:true,
                allowTouchMove: false,
                fadeEffect: {
                    crossFade: true
                },
                thumbs: {
                    swiper: swiperThumbs,
                },

            })
        })

    }
}