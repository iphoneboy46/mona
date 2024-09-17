function popupJS() {
    const popupForms = document.querySelectorAll(".popup-form");
    if (popupForms) {
        const popupBtns = document.querySelectorAll(".popup-btn");
        const popupModals = document.querySelectorAll(".popup-modal");
        const popupExs = document.querySelectorAll(".popup-ex");

        popupForms.forEach((popupForm)=>{
            if(popupForm.classList.contains("showed")){
                document.body.style.overflow = "hidden";
    
            }else{
                document.body.style.overflow = "auto";
    
            }
        })
     


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


   

    const popupMain = document.querySelector(".popup_main--wrap");
    if(popupMain){
        var swiper = new Swiper(popupMain.querySelector(".mySwiperPopup"), {
            slidesPerView: "auto",
            lazy: !0,
            effect:"fade",
            navigation: {
                nextEl: popupMain.querySelector(".next"),
                prevEl: popupMain.querySelector(".prev"),
            },
            loop:true,
            speed: 1200,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }


}

popupJS();