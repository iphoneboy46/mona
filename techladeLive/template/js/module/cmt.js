export default function Cmt() {
    const boxControls = document.querySelectorAll(".boxControl");
    if (boxControls) {
        boxControls.forEach((boxControl) => {
            const btnControlRep = boxControl.querySelector(".btnControlRep");
            const btnControlClose = boxControl.querySelector(".btnControlClose");
            const ipControl = boxControl.querySelector(".ipControl");



            if (btnControlRep) {
                btnControlRep.addEventListener("click", () => {

                    const ipControlShoweds = document.querySelectorAll(".ipControl.showed");

                    if (ipControlShoweds) {
                        ipControlShoweds.forEach((ipControlShowed, index) => {
                            ipControlShowed.classList.remove("showed")
                            $(ipControlShowed).slideUp(300);
                        })

                        const boxControls = document.querySelectorAll(".boxControl");
                        boxControls.forEach((boxControl) => {
                            const btnControlReps = boxControl.querySelector(".btnControlRep");
                            const btnControlCloses = boxControl.querySelector(".btnControlClose.showed");

                            if (btnControlReps) {
                                btnControlReps.classList.add("showed");

                            }

                            if (btnControlCloses) {
                                btnControlCloses.classList.remove("showed");
                            }
                        })
                    }

                    btnControlRep.classList.remove("showed");
                    btnControlClose.classList.add("showed");
                    ipControl.classList.add("showed");
                    $(ipControl).slideDown(300);
                })
            }

            if (btnControlClose) {
                btnControlClose.addEventListener("click", () => {
                    btnControlRep.classList.add("showed");
                    btnControlClose.classList.remove("showed");
                    ipControl.classList.remove("showed");
                    $(ipControl).slideUp(300);
                })
            }

        })

    }


    

    const boxs = document.querySelectorAll(".box");
    if (boxs) {

        boxs.forEach((box) => {
            console.log(box);
            const text = box.querySelector(".text");
            const btn = box.querySelector(".btn-see");


            if (text) {
                if (text.clientHeight > 168) {
                    text.classList.add("rg")
                    btn.classList.add("showed")
                }
                else {
                    text.classList.remove("rg")
                    if(btn){
                        btn.classList.remove("showed")

                    }

                }
            }






            if (btn)
                btn.addEventListener("click", () => {
                    text.classList.remove("rg")
                    btn.classList.remove("showed")
                })
        })
    }
}