function popupJS() {
    const popupForms = document.querySelectorAll(".popup-form");
    if (popupForms) {
        const popupBtns = document.querySelectorAll(".popup-btn");
        const popupModals = document.querySelectorAll(".popup-modal");
        const popupExs = document.querySelectorAll(".popup-ex");



        if (popupBtns) {
            popupBtns.forEach((popupBtn) => {
                popupBtn.addEventListener("click", (e) => {

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

                    const items = document.querySelectorAll(".layoutAd_box--rt-post-item-action");
                    if (items) {
                        items.forEach((item) => {
                            const ip = item.querySelector("input");
                            ip.checked = false;
                        })
                    }
                })
            })

        }

        // if (popupModals) {
        //     popupModals.forEach((popupModal) => {
        //         popupModal.addEventListener("click", () => {
        //             popupForms.forEach((popupForm) => {
        //                 popupForm.classList.remove("showed");
        //             })
        //             document.body.style.overflow = "auto";
        //         })
        //     })

        // }

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




}

popupJS(); 