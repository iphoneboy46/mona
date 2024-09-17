export default function GSAPJS() {
    const bannerHome = document.querySelector(".banner_home");

    if (bannerHome) {
        const bannerHomeTitle = bannerHome.querySelector(".banner_home--title");
        if(bannerHomeTitle) {
            let total = bannerHome.clientHeight / 1.5;
            if (window.screen.width >= 1200) {
                gsap.to(".banner_home--title .banner_home--title-text", {
                    scrollTrigger: {
                        trigger: ".banner_home--title .banner_home--title-text",
                        scrub: 1,
                        pin:false,
                        markers: false,
                        start: "center center",
                        end: "bottom center",
                    },
    
                    y:total,
                    // scale:0.5,
                    opacity:0,
                })
    
            }
        }
       
    }

    
}







