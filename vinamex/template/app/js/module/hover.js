export default function HoverJs() {
    const exclusiveItems = document.querySelectorAll(".exclusive_item")
    if (exclusiveItems) {
        window.addEventListener("load", () => {
            exclusiveItems.forEach((exclusiveItem) => {
                const content = exclusiveItem.querySelector(".exclusive_link--content");
                const heightContent = (content.clientHeight + 12) * -1;
                const title = exclusiveItem.querySelector(".exclusive_link--title");
                

                content.style.marginBottom = heightContent + "px";
                content.style.maxHeight = (exclusiveItem.clientHeight - title.clientHeight - 40) + "px";
            })
        })

    }

    const homeValue = document.querySelector(".home_value")
    if (homeValue) {
        if(window.screen.width > 1200){
            const items = homeValue.querySelectorAll(".home_value--item");

            items.forEach((item, i) => {
    
                window.addEventListener("load", () => {
                    const content = item.querySelector(".home_value--item-content")
    
                    const heightItem1 = content.clientHeight * -1;
    
                    content.style.marginBottom = heightItem1 + "px";
    
    
    
                })
    
    
                item.addEventListener("mouseenter", () => {
                    const imgs = homeValue.querySelectorAll(".home_value--img")
                    imgs[i].classList.add("showed");
                })
    
                item.addEventListener("mouseleave", () => {
                    const imgs = homeValue.querySelectorAll(".home_value--img")
                    imgs[i].classList.remove("showed");
    
                })
    
            })
        }
       

    }

    const homeSaleItems = document.querySelectorAll(".home_sale--item")
    if (homeSaleItems) {
        if(window.screen.width > 1200){
            window.addEventListener("load", () => {
                homeSaleItems.forEach((homeSaleItem) => {
                    const btn = homeSaleItem.querySelector(".home_sale--item-btn");
                    const heightItem = (btn.clientHeight + 20) * -1;
    
    
                    btn.style.marginBottom = heightItem + "px";
                })
            })
        }
      

    }

    const tienIch = document.querySelector(".tienIch");
    if (tienIch) {
        if (window.screen.width < 1200) {
            function toggleActiveClass() {
                const items = tienIch.querySelectorAll(".tienIch_item");
                items.forEach((item, i) => {
                    const imgs = item.querySelectorAll(".tienIch_item--img");

                    const img1 = imgs[0];
                    const img2 = imgs[1];


                    // Toggle the class
                    if (img1.classList.contains('showed')) {
                        img1.classList.remove('showed');
                        img2.classList.add('showed');
                    } else {
                        img1.classList.add('showed');
                        img2.classList.remove('showed');
                    }


                })
            }

            setInterval(toggleActiveClass, 5000)

            const items = tienIch.querySelectorAll(".tienIch_item");
            items.forEach((item, i) => {
                const imgs = item.querySelectorAll(".tienIch_item--img");

                const img1 = imgs[1];
                img1.classList.add('showed');
            })

        }
    }
}