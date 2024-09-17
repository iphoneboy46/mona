export default function scrollAni() {


    const anis = document.querySelectorAll(".ani");

    if (anis) {
        if (window.screen.width > 1200) {
            const details = document.querySelector(".details");
            if (details) {
                window.addEventListener("load", () => {
                    const itemAnis = document.querySelectorAll(".ani");

                    itemAnis.forEach((itemAni) => {
                        if (itemAnis[0].offsetTop > 0) {
                            itemAnis[0].classList.add("showed");
                        }

                    })
                })
            }



            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 8 / 10;
                const itemAnis = document.querySelectorAll(".ani");
                itemAnis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;

                    if (triggerBottom > boxTop) {
                        itemAni.classList.add("showed");
                    }
                })
            })
        }


    }


}