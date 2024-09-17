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
                    if(window.screen.width > 1200){
                        fullpage_api.setAllowScrolling(false);
                        fullpage_api.setKeyboardScrolling(false);

                       
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
                   
                    if(window.screen.width > 1200){
                        const homePage = document.querySelector(".homePage");
                        if(homePage){
                            fullpage_api.setAllowScrolling(true);
                            fullpage_api.setKeyboardScrolling(true);
                            document.body.style.overflow = "hidden";
                        
                        }
                    }
                   
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

                    if(window.screen.width > 1200){
                        const homePage = document.querySelector(".homePage");
                        if(homePage){
                            fullpage_api.setAllowScrolling(true);
                            fullpage_api.setKeyboardScrolling(true);
                            document.body.style.overflow = "hidden";
                        
                        }
                    }
                })
            })

        }




    }


}