export default function Header() {


    const header = document.querySelector("header");
    if (header) {
        // add mui ten
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menuItem) => {
            if (menuItem.classList.contains("dropdown")) {
                let menuLink = menuItem.querySelector(".menu-link");
                let span = document.createElement("span");
                span.classList.add("menu-ic");
                span.innerHTML += `<i class="far fa-angle-down"></i>`
                menuLink.appendChild(span);
            }
        })

        //cuon trang
        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    header.classList.add("actived");
                } else {
                    header.classList.remove("actived");
                    header.classList.remove("actived1");
                    header.classList.remove("actived2");


                }
            })
        }

        //mui ten click
        if (window.screen.width < 1200) {
            const dropdowns = document.querySelectorAll(".menu-item.dropdown");
            if (dropdowns) {
                dropdowns.forEach((dropdown) => {
                    const ic = dropdown.querySelector(".menu-ic");
                    ic.addEventListener("click", (e) => {
                        e.preventDefault();
                        ic.classList.toggle("actived");
                        const menuList = dropdown.querySelector(".menu-list");
                        $(menuList).slideToggle(500);
                    })

                    window.addEventListener("click", (e) => {
                        if (!e.target.closest(".menu-ic")) {
                            const menuList = dropdown.querySelector(".menu-list");
                            $(menuList).slideUp(500);
                            ic.classList.remove("actived")
                        }
                    })
                })

            }

        }

        //menuMb 

        const btnMb = header.querySelector(".btn-mobi");
        if (btnMb) {
            btnMb.addEventListener("click", () => {
                btnMb.classList.toggle("actived");
                const menuMB = document.querySelector(".menu_mb");
                menuMB.classList.toggle("showed");
                document.body.classList.toggle("actived");
            })
        }

        const modalMb = document.querySelector(".menu_mb--modal");
        if (modalMb) {
            modalMb.addEventListener("click", () => {
                const btnMb = header.querySelector(".btn-mobi");
                btnMb.classList.remove("actived");
                const menuMB = document.querySelector(".menu_mb");
                menuMB.classList.remove("showed");
                document.body.classList.remove("actived");

            })
        }

        //chieu cao menuMb

        const menuMb = document.querySelector(".menu_mb");
        if (menuMb) {
            const menuList = menuMb.querySelector(".menu-list");
            const menuInfo = menuMb.querySelector(".menu_mb--info");
            const menuBtn = menuMb.querySelector(".menu_mb--btn");
            let heightMenuInfo = menuInfo.clientHeight;
            let heightMenuMb = menuMb.clientHeight;
            let heightMenuBtn = menuBtn.clientHeight;



            let heightTotal = heightMenuMb - heightMenuInfo - heightMenuBtn;
            console.log(heightTotal)

            if (menuList) {
                menuList.style.maxHeight = heightTotal + "px"

            }
        }

        //search
        const btnSearch = header.querySelector(".btn-search");
        if (btnSearch) {
            btnSearch.addEventListener("click", () => {
                btnSearch.classList.toggle("showed");
                const searchForm = header.querySelector(".header_search--form");
                searchForm.classList.toggle("showed");
                const input = header.querySelector(".form-item-ip");

                setTimeout(() => {
                    input.focus();
                }, 100)
            })

            window.addEventListener("click", (e) => {
                if (!e.target.closest(".header_search")) {
                    btnSearch.classList.remove("showed");
                    const searchForm = header.querySelector(".header_search--form");
                    searchForm.classList.remove("showed");
                }
            })
        }
    }
}