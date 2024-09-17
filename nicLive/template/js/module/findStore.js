export default function findStore(){
    // const find = document.querySelector(".find");
    // if(find){
    //     if(window.screen.width > 800){
    //         const findLf = find.querySelector(".find_lf").clientHeight;
    //         const findLfTitle = find.querySelector(".title-sm3").clientHeight;
    //         const findLfBox = find.querySelector(".find_lf--box").clientHeight;
    //         const findLfTitleBox = find.querySelector(".find_lf--result-title").clientHeight;
    //         const findLfList = find.querySelector(".find_lf--result-list");
    //         const findWrap = find.querySelector(".find_lf--wrap")
    //         var computedStyle = window.getComputedStyle(findWrap);
    //         const total = findLf - findLfBox - findLfTitle - findLfTitleBox - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.rowGap) - 30;
    
    
    //         findLfList.style.maxHeight = total + "px";
    
    //     }
    // }

     const find = document.querySelector(".find_menu");
    if(find){
       
            const findList = find.querySelector(".find_result--list");
            const findIp = find.querySelector(".find_ip").clientHeight;
            const title = find.querySelector(".find_result--title").clientHeight;
            const findWrap = find.querySelector(".find_menu--wrap");
            var computedStyle = window.getComputedStyle(findWrap);
            const total = find.clientHeight - findIp - title  - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.rowGap);
    
    
            findList.style.maxHeight = total + "px";
    
        
    }

    const btnFinds = document.querySelectorAll(".btn-find");
    if (btnFinds) {
        btnFinds.forEach((btn) => {
            const findMenu = document.querySelector(".find_menu");
            const findEx = findMenu.querySelector(".find_ex");
            const modalFind = document.querySelector(".find_menu--modal");
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                findMenu.classList.add("showed");
                document.body.style.overflowY = "hidden";
            })
            findEx.addEventListener("click", (e) => {
                e.preventDefault();
                findMenu.classList.remove("showed");
                document.body.style.overflowY = "auto";

            })

            modalFind.addEventListener("click", (e) => {
                e.preventDefault();
                findMenu.classList.remove("showed");
                document.body.style.overflowY = "auto";

            })

        })
    }

    const core = document.querySelector(".core");
    if (core) {
        const items = core.querySelectorAll(".core_item");

        items.forEach((item, index) => {
            if (index === items.length - 1) {
                items[items.length - 1].classList.add("end");

                const end = core.querySelector(".core_item.end");
                if (end) {
                    window.addEventListener("scroll", (e) => {


                        if (window.scrollY > (end.clientHeight * 2)) {
                            end.classList.add("actived")
                        } else {
                            end.classList.remove("actived")

                        }
                    })
                }
            }
        });

    }
}