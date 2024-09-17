export default function popupJS() {
    const popupForms = document.querySelectorAll(".popup-form");
    if (popupForms) {
        const popupBtns = document.querySelectorAll(".popup-btn");
        const popupModals = document.querySelectorAll(".popup-modal");
        const popupExs = document.querySelectorAll(".popup-ex");



        if (popupBtns) {
            popupBtns.forEach((popupBtn) => {
                popupBtn.addEventListener("click", (e) => {
                    console.log("Ádsad")
                    e.preventDefault();
                    const idString = popupBtn.getAttribute("data-popup");
                    if (popupForms) {
                        popupForms.forEach((popupForm) => {
                            const dataPopupId = popupForm.getAttribute("data-popup-id")
                            console.log("asdasd");
                            if (dataPopupId == idString) {
                                popupForm.classList.add("showed");
                                document.body.style.overflow = "hidden";
                            }
                        })
                    }
                })
            })

        }

        if (popupModals) {
            popupModals.forEach((popupModal) => {
                popupModal.addEventListener("click", () => {
                    popupForms.forEach((popupForm) => {
                        popupForm.classList.remove("showed");
                    })
                    document.body.style.overflow = "auto";
                })
            })

        }

        if (popupExs) {
            popupExs.forEach((popupEx) => {
                popupEx.addEventListener("click", () => {
                    popupForms.forEach((popupForm) => {
                        popupForm.classList.remove("showed");
                    })
                    document.body.style.overflow = "auto";
                })
            })

        }




    }


    const albums = document.querySelector(".tourCt_albums ")
    if (albums) {
        const btn = albums.querySelector(".btn");
        const items = albums.querySelectorAll(".tourCt_albums--item");
        btn.addEventListener("click", () => {
            const itemImgs = albums.querySelectorAll(".tourCt_albums--img");
            setTimeout(() => {
                itemImgs[0].click();

            }, 50)
            // items.forEach((item) => {
            //     item.classList.add("showed");
            // })
            // console.log(items)
        })
    }


}