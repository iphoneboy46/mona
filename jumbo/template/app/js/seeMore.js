function seeMore() {

    const parentWrapper = document.querySelector(".parent-wrapper");
    if (parentWrapper) {
        let heightParent = parentWrapper.clientHeight;

        parentWrapper.style.height = heightParent / 2 + "px";

        const btnSeeMore = document.querySelector(".btn-see-more");
        if (btnSeeMore) {
            const btnExitMore = document.querySelector(".btn-exit-more");
            btnSeeMore.addEventListener("click", () => {
                btnSeeMore.style.display = "none";
                btnExitMore.style.display = "flex";
                parentWrapper.style.height = heightParent + "px";
            });
        }

        const btnExitMore = document.querySelector(".btn-exit-more");
        btnExitMore.style.display = "none";

        if (btnExitMore) {
            const btnSeeMore = document.querySelector(".btn-see-more");

            btnExitMore.addEventListener("click", () => {
                btnSeeMore.style.display = "flex";
                btnExitMore.style.display = "none";
                parentWrapper.style.height = heightParent / 2 + "px";


            });
        }
    }


}

window.seeMore = seeMore;