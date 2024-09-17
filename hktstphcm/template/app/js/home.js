const bannerHome = document.querySelector(".banner_home");
if (bannerHome) {
    const bannerHomeSplide = bannerHome.querySelector(".banner_home--splide")

    const header = document.querySelector(".header");


    if (window.screen.width > 1200) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > bannerHomeSplide.offsetTop +( header.clientHeight * 1.5)) {
                bannerHomeSplide.classList.add("actived");
            } else {
                bannerHomeSplide.classList.remove("actived");
            }
        })
    }
}


