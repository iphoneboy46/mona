
const quesCmt = document.querySelector(".question_ct--cmt");
if (quesCmt) {
    const items = quesCmt.querySelectorAll(".question_ct--cmt-item");

    items.forEach((item, index) => {
        if (!item.classList.contains("not-loaded")) {

            const btnRep = item.querySelector(".btn-rep");
            if (btnRep) {
                btnRep.addEventListener("click", () => {
                    const cmtTl = quesCmt.querySelector(".cmt_tl");
                    const id = cmtTl.setAttribute("id", index);
                    const cmtTlShowed = quesCmt.querySelector(".cmt_tl.showed");
                    const name = item.querySelector(".name");
                    const content = item.querySelector(".content");
                    const nameTl = quesCmt.querySelector(".nameTl");
                    const contentTl = quesCmt.querySelector(".contentTl");

                    nameTl.innerText = name.innerText;
                    contentTl.innerText = content.innerText;
                    const ip = quesCmt.querySelector(".cmt_rt--ip .form-item-tx");

                    if (cmtTlShowed) {
                        cmtTlShowed.classList.remove("showed");
                        $(cmtTl).slideUp(300);

                    }

                    cmtTl.classList.add("showed")
                    $(cmtTl).slideDown(300);



                    setTimeout(() => {

                        // HÀM SCROLL CHO MƯỢT MÀ
                        function scrollToID(id, speed) {
                            console.log(id)
                            const offSet = $(".header").outerHeight();
                            const section = document.querySelector(".question_ct--cmt-ip");
                            const targetOffset = section.offsetTop - offSet - 20;
                            $("html,body").animate({ scrollTop: targetOffset }, speed);
                        }

                        scrollToID(".question_ct--cmt-ip", 0);

                        ip.focus();

                    }, 100)

                })
            }

            const content = item.querySelector(".content");
            const height = content.clientHeight;
            console.log(height)

            if (height > 63) {
                const seeMore = item.querySelector(".seeMore");
                seeMore.classList.remove("hidden");
                content.classList.add("lineClamp");

            } else {
                const seeMore = item.querySelector(".seeMore");
                seeMore.classList.add("hidden");
                content.classList.remove("lineClamp");

            }


            const seeMore = item.querySelector(".seeMore");
            if (seeMore) {
                seeMore.addEventListener("click", () => {
                    const content = item.querySelector(".content");
                    content.style.display = "block";
                    seeMore.classList.add("hidden");
                })
            }
            item.classList.add("not-loaded");

        }


    })

    const ex = quesCmt.querySelector(".cmt_tl--ex");
    ex.addEventListener("click", () => {
        const cmtTl = quesCmt.querySelector(".cmt_tl");
        const id = cmtTl.setAttribute("id", "");

        const items = quesCmt.querySelectorAll(".question_ct--cmt-item");
        items.forEach((item, index) => {
            const name = item.querySelector(".name");
            const content = item.querySelector(".content");
            const nameTl = quesCmt.querySelector(".nameTl");
            const contentTl = quesCmt.querySelector(".contentTl");
            nameTl.innerText = "";
            contentTl.innerText = "";
        })

        cmtTl.classList.remove("showed");
        $(cmtTl).slideUp(300);

    })


}