const contactMap = document.querySelector(".contact_map");
if (contactMap) {


    if (window.screen.width > 800) {
        const list = contactMap.querySelector(".contact_map--lf-list");
        const items = list.querySelectorAll(".contact_map--lf-item");
        let heights = [];
        const itemCount = Math.min(items.length, 3); // Lấy tối đa 3 item, hoặc ít hơn nếu không đủ

        for (let i = 0; i < itemCount; i++) {
            heights.push(items[i].clientHeight);
        }
        const totalHeight = heights.reduce((total, height) => total + height, 0);


        list.style.maxHeight = totalHeight + 0.3 + "px";
    } else {

        function scrollToID(id, speed) {
            const offSet = $(".header").outerHeight();
            const section = document.getElementById(id);
            if (section) {
                const targetOffset = section.offsetTop - offSet - 10;
                $("html,body").animate({
                    scrollTop: targetOffset
                }, speed);

            }
        }
        const list = contactMap.querySelector(".contact_map--lf-list");

        const items = list.querySelectorAll(".contact_map--lf-item");
        items.forEach((item) => {
            item.addEventListener("click", (e) => {
                const box = contactMap.querySelector(".contact_map--rt-iframes");
                const id = box.getAttribute("id");
                scrollToID(id, 200);
            })
        })
    }








}