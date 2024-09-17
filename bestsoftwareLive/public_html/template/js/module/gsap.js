export default function GSAPJS() {
    const serviceFt = document.querySelector(".service-features");

    if (serviceFt) {


        if (window.screen.width <= 600) {
            gsap.to(".service-features-tt", {
                left: "0%",
                top: "15%",
                opacity: 1,
                duration: 5,
                scrollTrigger: {
                    trigger: ".service-features",
                    start: "-=100 center",
                    end: "'-=100 end",
                    scrub: 1,

                },
            })

            gsap.to(".service-features-tt-2.th", {
                transform: "scale(1)",
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".service-features",
                    start: "center center",
                    end: "'-=100 end",
                    scrub: 1,

                },
            })


            gsap.to(".service-features-tt-2.xt", {
                right: "1%",
                bottom: "-1%",
                duration: 1,
                scrollTrigger: {
                    trigger: ".service-features",
                    start: "center center",
                    end: "'-=100 end",
                    scrub: 1,

                },
            })
        } else {
            gsap.to(".service-features-tt", {
                left: "5%",
                top: "5%",
                opacity: 1,
                duration: 5,
                scrollTrigger: {
                    trigger: ".service-features",
                    start: "-=100 center",
                    end: "'-=100 end",
                    scrub: 1,

                },
            })

            gsap.to(".service-features-tt-2.th", {
                transform: "scale(1)",
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".service-features",
                    start: "center center",
                    end: "'-=100 end",
                    scrub: 1,

                },
            })


            gsap.to(".service-features-tt-2.xt", {
                right: "1%",
                bottom: "0%",
                duration: 1,
                scrollTrigger: {
                    trigger: ".service-features",
                    start: "center center",
                    end: "'-=100 end",
                    scrub: 1,

                },
            })
        }
    }



}
