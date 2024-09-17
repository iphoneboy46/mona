export default function GSAPJS() {
    const contactTT = document.querySelector(".contact_tt");

    if (contactTT) {

        if (window.screen.width >= 1200) {
            gsap.to(".contact_tt--ic.rt", {
                scrollTrigger: {
                    trigger: ".contact_tt--ic.rt",
                    scrub: 3,
                    markers: false,
                    start: "-=500",
                    end: "+=0",
                },

                right: 0,
            })

            gsap.to(".contact_tt--ic.lf", {
                scrollTrigger: {
                    trigger: ".contact_tt--ic.lf",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                left: 0,
            })


        }
    }

    const serviceTT = document.querySelector(".service_tt");

    if (serviceTT) {

        if (window.screen.width >= 1200) {
            gsap.to(".service_tt--ic.rt", {
                scrollTrigger: {
                    trigger: ".service_tt--ic.rt",
                    scrub: 3,
                    markers: false,
                    start: "-=1000",
                    end: "+=0",
                },

                right: 0,
            })

            gsap.to(".service_tt--ic.lf", {
                scrollTrigger: {
                    trigger: ".service_tt--ic.lf",
                    scrub: 3,
                    markers: false,
                    start: "-=1000",
                    end: "+=0",
                },

                left: 0,
            })


        }
    }

    const serviceCTTT = document.querySelector(".serviceCt_tt");

    if (serviceCTTT) {

        if (window.screen.width >= 1200) {
            gsap.to(".serviceCt_tt--ic.lf", {
                scrollTrigger: {
                    trigger: ".serviceCt_tt--ic.lf",
                    scrub: 3,
                    markers: false,
                    start: "-=1000",
                    end: "+=0",
                },

                left: 0,
            })

            // gsap.to(".serviceCt_tt--ic.rt", {
            //     scrollTrigger: {
            //         trigger: ".serviceCt_tt--ic.rt",
            //         scrub: 3,
            //         markers: false,
            //         start: "-=800",
            //         end: "+=0",
            //     },

            //     left: 0,
            // })


        }
    }

    const caseStudyCt = document.querySelector(".caseStudyCt_tt");

    if (caseStudyCt) {

        if (window.screen.width >= 1200) {
            gsap.to(".caseStudyCt_tt--ic.rt", {
                scrollTrigger: {
                    trigger: ".caseStudyCt_tt--ic.rt",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                right: 0,
            })


        }
    }

    const aboutTT = document.querySelector(".about_tt");

    if (aboutTT) {

        if (window.screen.width >= 1200) {
            gsap.to(".about_tt--ic.rt", {
                scrollTrigger: {
                    trigger: ".about_tt--ic.rt",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                right: 0,
            })

            gsap.to(".about_tt--ic.lf", {
                scrollTrigger: {
                    trigger: ".about_tt--ic.lf",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                right: 0,
            })


        }
    }

    const newsTT = document.querySelector(".news_tt");

    if (newsTT) {

        if (window.screen.width >= 1200) {
            gsap.to(".news_tt--ic.lf", {
                scrollTrigger: {
                    trigger: ".news_tt--ic.lf",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                left: 0,
            })

            gsap.to(".news_tt--ic.rt", {
                scrollTrigger: {
                    trigger: ".news_tt--ic.rt",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                right: 0,
            })


        }
    }

    const homeTT = document.querySelector(".home_tt");

    if (homeTT) {

        if (window.screen.width >= 1200) {
            gsap.to(".home_tt--ic.lf", {
                scrollTrigger: {
                    trigger: ".home_tt--ic.lf",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                left: 0,
            })

            gsap.to(".home_tt--ic.lf2", {
                scrollTrigger: {
                    trigger: ".home_tt--ic.lf2",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                left: 0,
            })

            gsap.to(".home_tt--ic.rt", {
                scrollTrigger: {
                    trigger: ".home_tt--ic.rt",
                    scrub: 3,
                    markers: false,
                    start: "-=800",
                    end: "+=0",
                },

                right: 0,
            })


        }
    }
}







