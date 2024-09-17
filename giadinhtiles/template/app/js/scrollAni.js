function scrollAni() {


    const anis = document.querySelectorAll(".ani");

    if (anis) {
        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 6 / 10;
                const anis = document.querySelectorAll(".ani");
                anis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;

                    if (triggerBottom > boxTop) {
                        itemAni.classList.add("showed");
                    }
                })
            })
        }
    }




    const boxMl = document.querySelector(".box_ml");
    if (boxMl) {
        if (window.screen.width > 900) {
            window.addEventListener("scroll", () => {
                const hd = document.querySelector(".header");
                if (window.scrollY >= boxMl.offsetTop + (hd.clientHeight * 2)) {
                    boxMl.classList.add("actived");
                } else {
                    boxMl.classList.remove("actived");
                }
            })
        } else {
            boxMl.classList.add("actived");
        }

    }
}

scrollAni();