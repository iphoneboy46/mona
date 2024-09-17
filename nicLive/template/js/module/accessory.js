export default function accessory() {
    const accessory = document.querySelector(".accessory");
    if (accessory) {
        const btnAccs = accessory.querySelectorAll(".box_filter--item");
        btnAccs.forEach((btnAcc) => {

            if (btnAcc.classList.contains("actived")) {
                const id1 = btnAcc.getAttribute("data-id");
                const items = accessory.querySelectorAll(".accItem");
                items.forEach((item) => {
                    const id2 = item.getAttribute("data-id");
                    // item.classList.remove("showed");

                    if (id1 === id2) {
                        item.classList.add("showed");
                    }
                    else if (id1 === "all") {
                        item.classList.add("showed");
                    }
                    else {
                        item.classList.remove("showed");
                    }
                })
            }


            btnAcc.addEventListener("click", () => {
                const btnAccActived = accessory.querySelector(".box_filter--item.actived");
                if (btnAccActived) {
                    btnAccActived.classList.remove("actived");
                }
                btnAcc.classList.add("actived");
                const id1 = btnAcc.getAttribute("data-id");
                const items = accessory.querySelectorAll(".accItem");
                items.forEach((item) => {
                    const id2 = item.getAttribute("data-id");
                    item.classList.remove("showed");

                    if (id1 === id2) {

                        item.classList.add("showed");


                    }
                    else if (id1 === "all") {

                        item.classList.add("showed");


                    }
                    else {

                        item.classList.remove("showed");


                    }
                })

            })
        })
    }
}