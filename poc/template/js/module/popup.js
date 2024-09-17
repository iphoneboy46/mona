export default function popup() {
    const popupFormMain = document.querySelector(".popup-form-main");
    if (popupFormMain) {
        const popupBtns = document.querySelectorAll(".popup-btn");
        const popupModal = document.querySelector(".popup-modal");
        const popupEx = document.querySelector(".popup-ex");
        if (popupBtns) {
            popupBtns.forEach((popupBtn)=>{
                popupBtn.addEventListener("click", () => {
                    popupModal.classList.add("showed");
                    popupFormMain.classList.add("showed");
                    document.body.style.overflow = "hidden";
                })
            })
           
        }

        if (popupModal) {
            popupModal.addEventListener("click", () => {
                popupModal.classList.remove("showed");
                popupFormMain.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }

        if (popupEx) {
            popupEx.addEventListener("click", () => {
                popupModal.classList.remove("showed");
                popupFormMain.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }




    }

    const popupFormTd = document.querySelector(".popup-form-td");
    if (popupFormTd) {
        const popupBtns = document.querySelectorAll(".popup-btn-td");
        const popupModal = document.querySelector(".popup-modal-td");
        const popupEx = document.querySelector(".popup-ex-td");
        if (popupBtns) {
            popupBtns.forEach((popupBtn)=>{
                popupBtn.addEventListener("click", () => {
                    popupFormTd.classList.add("showed");
                    document.body.style.overflow = "hidden";
                })
            })
           
        }

        if (popupModal) {
            popupModal.addEventListener("click", () => {
              
                popupFormTd.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }

        if (popupEx) {
            popupEx.addEventListener("click", () => {
              
                popupFormTd.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }




    }




}