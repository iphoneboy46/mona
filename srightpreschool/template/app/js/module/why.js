export default function Why() {
    const why = document.querySelector(".why");
    if (why) {
        const btns = document.querySelectorAll(".banner_why--item");

        if (btns) {
            btns.forEach((btn, i) => {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    const link = btn.querySelector(".banner_why--item-wrap");
                    const values = why.querySelectorAll(".valueAb_item");
                    const id = values[i].getAttribute("id")
                    const linkCustom = link.hash.substring(1);

                    if (linkCustom == id) {
                        const offSet = document.querySelector(".header").clientHeight;
                        const section = document.getElementById(id);
                        if (section) {
                            const targetOffset = section.offsetTop - offSet;
                            $("html,body").animate({
                                scrollTop: targetOffset
                            }, 0);
                        }

                    }
                })
            })
        }
    }
}