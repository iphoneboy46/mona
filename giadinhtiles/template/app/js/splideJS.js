function SplideSl() {
    const aboutPrize = document.querySelectorAll('.about_prize')

    if (aboutPrize) {

        const splide = new Splide(".splide", {
            type: 'loop',
            autoWidth: true,
            drag: 'free',
            easing: "linear",
            autoScroll: {
                speed: 0.5,
            },
            focus: "center",
            fixedWidth: true,
            arrows: false,
            pagination: false,


        }).mount(window.splide.Extensions); 

        



    }


}


SplideSl()