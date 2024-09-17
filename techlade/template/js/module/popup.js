export default function popup() {
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

                            if (dataPopupId == idString) {
                                popupForm.classList.add("showed");
                                document.body.style.overflow = "hidden";
                            }
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

    const popupQcLink = document.querySelector(".popupQcLink");
    if (popupQcLink) {
        window.addEventListener("scroll", () => {
            const heightBody = Math.floor(document.querySelector(".news_ct--content").clientHeight / 3);
            if (window.scrollY > heightBody) {
                popupQcLink.click();
                const popupQc = document.querySelector(".popup_qc");


                if (popupQc) {
                    popupQc.classList.add("showed")

                    const minute = popupQc.querySelector(".minute");
                    let minuteNumber = minute.innerHTML * 1;

                    const countDown = setInterval(() => {
                        let newMinute = minuteNumber -= 1;
                        minute.innerHTML = newMinute;


                        if (minuteNumber <= 0) {
                            clearInterval(countDown);
                            const title = popupQc.querySelector(".popup_qc--title");
                            title.classList.add("hidden")

                        }

                    }, 1000);

                }

                const fancyBoxContainer = document.querySelector(".fancybox__container");
                if (fancyBoxContainer) {
                    fancyBoxContainer.classList.add("ex");


                    const fancyBoxCar = document.querySelector(".fancybox__carousel.is-draggable");
                    fancyBoxCar.addEventListener("click", (e) => {
                        e.preventDefault();
                    })
                }


                const ex = document.querySelector(".carousel__button.is-close");
                if (ex) {

                    ex.addEventListener("click", () => {
                        const popupQc = document.querySelector(".popup_qc");
                        if (popupQc) {
                            popupQc.remove();

                        }
                        popupQcLink.addEventListener("click", (e) => {
                            e.preventDefault();
                        })
                    })
                }

                const ex2 = document.querySelector(".carousel__button.fancybox__button--close");
                if (ex2) {
                    ex2.addEventListener("click", () => {
                        const popupQc = document.querySelector(".popup_qc");
                        if (popupQc) {
                            popupQc.remove();

                        }
                        popupQcLink.addEventListener("click", (e) => {
                            e.preventDefault();
                        })
                    })
                }




            }

        })





    }



}

