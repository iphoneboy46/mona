export default function SplideSl() {
    const aboutAlbItemSlides = document.querySelectorAll('.about_alb--item-slide')
    if (aboutAlbItemSlides) {
        aboutAlbItemSlides.forEach((item, index) => {
            const elms = document.querySelectorAll('.splide');
            console.log(elms);
            if (index % 2 == 0) {
                new Splide(elms[index], {
                    type: 'loop',
                    autoWidth: true,
                    drag: 'free',
                    easing: "linear",
                    autoScroll: {
                        speed: 1,
                    },
                    focus: "center",
                    fixedWidth:true,
                    arrows: false,
                    pagination: false,


                }).mount(window.splide.Extensions);
            } else {
                new Splide(elms[index], {
                    type: 'loop',
                    autoWidth: true,
                    easing: "linear",
                    drag: 'free',
                    autoScroll: {
                        speed: -1,
                    },
                    fixedWidth:true,
                    focus: "center",
                    arrows: false,
                    pagination: false,


                }).mount(window.splide.Extensions);
            }

        })
    }


}