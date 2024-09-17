export default function HeaderModule() {

    const header = document.querySelector(".header");
    if (header) {
        const btnSearch = header.querySelector(".btn-search");
        const btnSearchExits = header.querySelector(".btn-search-exit");
        const modalSearch = document.querySelector(".modal-search");
        const headerSearchIp = header.querySelector(".header-search-ip");
        btnSearch.addEventListener("click", () => {

            btnSearchExits.classList.add("showed");
            modalSearch.classList.add("showed");
            btnSearch.classList.add("hidden");
            headerSearchIp.classList.add("showed");
        })

        btnSearchExits.addEventListener("click", () => {

            btnSearchExits.classList.remove("showed");
            btnSearch.classList.remove("hidden");
            modalSearch.classList.remove("showed");
            headerSearchIp.classList.remove("showed");
        })

        modalSearch.addEventListener("click", () => {

            btnSearchExits.classList.remove("showed");
            btnSearch.classList.remove("hidden");
            modalSearch.classList.remove("showed");
            headerSearchIp.classList.remove("showed");
        })


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
                    const menuListMB = dropdownMb.querySelector(".menu-list");
                    $(menuListMB).slideToggle(500);
                })
            }

          
        })
    }
}