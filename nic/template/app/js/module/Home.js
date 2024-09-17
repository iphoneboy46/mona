export default function HomeJs() {
    const productFilter = document.querySelector(".product_filter");
    if (productFilter) {
        const wrap = productFilter.querySelector(".product_filter--wrap ")
        var computedStyle = window.getComputedStyle(wrap);
        const top = productFilter.querySelector(".product_filter--top").clientHeight;
        const bottom = productFilter.querySelector(".product_filter--bottom").clientHeight;
        const list = productFilter.querySelector(".product_filter--list");
        console.log(parseInt(computedStyle.rowGap))


        const total = productFilter.clientHeight - top - bottom - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.rowGap);
        list.style.maxHeight = total + "px";

        const btn = document.querySelector(".btnFilter");
        btn.addEventListener("click", () => {
            productFilter.classList.add("showed");
            document.body.style.overflowY = "hidden";
        });

        const btnEx = productFilter.querySelector(".btnFilterEx");
        btnEx.addEventListener("click", () => {
            productFilter.classList.remove("showed");
            document.body.style.overflowY = "auto";

        });

    }

    const bannerHome = document.querySelector(".banner_home");
    if (bannerHome) {
        const videos = bannerHome.querySelectorAll(".banner_home--bg-img video");
        videos.forEach((video) => {
            video.play().catch(error => {
                console.error('Error trying to autoplay video:', error);
            });
        })
    }

}