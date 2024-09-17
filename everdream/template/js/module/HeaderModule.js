export default function HeaderModule() {


    const header = document.querySelector(".header");
    if (header) {






        const menuItems = document.querySelectorAll(".menu-item");
        if (menuItems) {
            menuItems.forEach((menuItem) => {
                if (menuItem.classList.contains("dropdown")) {
                    const menuLink = menuItem.querySelector(".menu-link");
                    let menuIc = document.createElement("span");
                    menuIc.classList.add("menu-ic");
                    menuIc.innerHTML = `<i class="fas fa-angle-down"></i>`;
                    menuLink.appendChild(menuIc);
                }
            })
        }

        const dropdowns = document.querySelectorAll(".dropdown");
        if (dropdowns) {
            dropdowns.forEach((dropdown) => {
                const menuIc = dropdown.querySelector(".menu-ic");
                if (window.screen.width < 1200) {
                    if (menuIc) {
                        menuIc.addEventListener("click", (e) => {
                            e.preventDefault();
                            menuIc.classList.toggle("actived")
                            const menuList = dropdown.querySelector(".menu-list");
                            $(menuList).slideToggle(500);
                        })

                        window.addEventListener("click", (e) => {
                            if (!e.target.closest(".menu-ic")) {
                                const menuList = dropdown.querySelector(".menu-list");
                                $(menuList).slideUp(500);
                                menuIc.classList.remove("actived")
                            }
                        })
                    }
                }



            })
        }


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

        window.addEventListener("load", () => {
            if (window.screen.width > 1200 && window.screen.width < 2000) {
                const pt = document.querySelector(".pt")
                let heightHd = header.clientHeight / 10;
                pt.style.paddingTop = heightHd + "rem";
            }
        })

        var heightHd = header.clientHeight / 10;

        window.addEventListener("scroll", () => {
            const pt = document.querySelector(".pt")
            const heightHd2 = header.clientHeight / 10;

            if (window.screen.width > 1200 && window.screen.width < 2000) {
                if (window.scrollY > 0) {
                    header.classList.add("actived");
                    pt.style.paddingTop = heightHd2 + "rem";

                } else {
                    header.classList.remove("actived");
                    pt.style.paddingTop = heightHd + "rem";
                }
            }

        })
    }


}