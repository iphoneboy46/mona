function GSAPJS() {
    const bgGsap = document.querySelector(".bgGsap");

    if (bgGsap) {

        if (window.screen.width >= 1200) {
            window.addEventListener("load", () => {
                // if (window.screen.width >= 1200) {

                // const top = homeStore.offsetTop;
                // console.log(top);
                gsap.to(".bgGsap .bg_tt--bg", {
                    scrollTrigger: {
                        trigger: ".bgGsap .bg_tt--bg",
                        scrub: true,
                        markers: false,
                        start: "top 0vh",
                        end: "center 10vh",
                    },

                    opacity: 0.85,
                })


                // }
            })



            // const top = homeStore.offsetTop;
            // console.log(top);
            gsap.to(".bgGsap .bg_tt--bg", {
                scrollTrigger: {
                    trigger: ".bgGsap .bg_tt--bg",
                    scrub: true,
                    markers: false,
                    start: "top 0vh",
                    end: "center 10vh",
                },

                opacity: 0.85,
            })


        }
    }
}

GSAPJS()







