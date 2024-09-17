export default function GSAPJS() {
    const bannerQc = document.querySelector(".project_ct");

    if (bannerQc) {


        if (window.screen.width >= 1200) {
            const projectCtBg = bannerQc.querySelector(".project_ct--bg ")
            const top = projectCtBg.offsetTop;
            console.log(top);
            gsap.to(".project_ct--bg", {
                scrollTrigger: {
                    trigger: ".project_ct--bg",
                    scrub: 0.5,
                    markers: false,
                    start: `-=${top}`,
                    end: "bottom bottom",
                },
                
                width:"100%",
                borderRadius:"0rem",
            })


        }
    }
}







