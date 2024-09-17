export default function HeaderModule() {

    const header = document.querySelector(".header");
    if (header) {
       

        const btnMobi = header.querySelector(".btn-mobi");
        const menuMB = document.querySelector(".menu-mb");
        const modalMB = document.querySelector(".menu-modal");
        btnMobi.addEventListener("click", () => {

            btnMobi.classList.toggle("actived")

            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");
        })

        modalMB.addEventListener("click", () => {
            btnMobi.classList.toggle("actived");
            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");

        });


        window.addEventListener("scroll", () => {

           
            if (window.scrollY > 0) {
                header.classList.add("actived");
            } else {
                header.classList.remove("actived");
            }

        })



    }

    const dropdownMbs = document.querySelectorAll(".dropdown-mb");
    if (dropdownMbs) {
        dropdownMbs.forEach((dropdownMb) => {
            const menuIcMb = dropdownMb.querySelector(".menu-ic-mb");

            if(menuIcMb){
                menuIcMb.addEventListener("click", () => {
                    menuIcMb.classList.toggle("actived")
                    const menuListMB = dropdownMb.querySelector(".menu-list");
                    $(menuListMB).slideToggle(500);
                })

                window.addEventListener("click",(e)=>{
                    if(!e.target.closest(".menu-ic-mb")){
                        const menuListMB = dropdownMb.querySelector(".menu-list");
                        $(menuListMB).slideUp(500);
                        menuIcMb.classList.remove("actived")
                    }
                })
            }

          
        })
    }

    const footer = document.querySelector(".footer");
    if(footer){
        const ftDropDown = footer.querySelector(".ft-dropdown > .menu-ic")

        if(ftDropDown){
            ftDropDown.addEventListener("click",(e)=>{
                e.preventDefault();
            })
        }

      
    }
}