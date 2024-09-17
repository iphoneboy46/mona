export default function danhMuc() {

    const listHover = document.querySelector(".list-hover");
    if (listHover) {
        if(window.screen.width > 1200){
            const itemHovers = listHover.querySelectorAll(".item-hover");
            itemHovers.forEach((itemHover) => {
                itemHover.addEventListener("mouseenter", (e) => {
                    const itemHoverShowed = listHover.querySelector(".item-hover.showed")
                    itemHoverShowed.classList.remove("showed")
                    itemHover.classList.add("showed");
    
                })
            })
        }
        
    }

    const listHover2 = document.querySelector(".list-hover2");
    if (listHover2) {
        const itemImgs = listHover2.querySelectorAll(".itemImg");
        const itemHover2s = listHover2.querySelectorAll(".item-hover2");

        itemHover2s.forEach((itemHover2, index) => {
            itemHover2.addEventListener("mouseenter", () => {
                const itemHover2Actived = listHover2.querySelector(".item-hover2.actived");
                const itemImgShowed = listHover2.querySelector(".itemImg.showed");

                itemImgShowed.classList.remove("showed");
                itemHover2Actived.classList.remove("actived");
                itemHover2.classList.add("actived");
                itemImgs[index].classList.add("showed");
            })

            itemHover2.addEventListener("click", () => {
                const itemHover2Actived = listHover2.querySelector(".item-hover2.actived");
                const itemImgShowed = listHover2.querySelector(".itemImg.showed");

                itemImgShowed.classList.remove("showed");
                itemHover2Actived.classList.remove("actived");
                itemHover2.classList.add("actived");
                itemImgs[index].classList.add("showed");
            })
        })
    }

}