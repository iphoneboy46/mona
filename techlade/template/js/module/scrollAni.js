export default function scrollAni() {


    const anis = document.querySelectorAll(".ani");

    if (anis) {
        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 10 / 10;
                const anis = document.querySelectorAll(".ani");
                anis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;

                    if (triggerBottom > boxTop) {
                        itemAni.classList.add("showed");
                    }
                })
            })

            window.addEventListener("load", () => {
                if (anis[0]) {
                    anis[0].classList.add("showed");
                }
            })
        }


    }

}