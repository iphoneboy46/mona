export default function HeaderModule() {
    const header = document.querySelector(".header");
    if (header) {
        const btnSearch = header.querySelector(".btn-search");
        const btnSearchExits = document.querySelectorAll(".btn-search-exit");
        const headerSearchIps = document.querySelectorAll(
            ".header-search-ip input"
        );
        const headerNav = header.querySelector(".header-nav");
        const headerBox = header.querySelector(".header-box");


        // search
        btnSearch.addEventListener("click", () => {
            if (window.screen.width > 1200) {
                headerBox.classList.add("showed");
                btnSearchExits.forEach((btnSearchExit) => {
                    btnSearchExit.classList.add("showed");
                });
                headerNav.classList.add("none");
                setTimeout(() => {
                    headerSearchIps.forEach((headerSearchIp) => {
                        headerSearchIp.focus();
                    });
                }, 300);
            } else {
                const rsMb = document.querySelector(".rs-mb");
                const menuMB = document.querySelector(".menu-mb");
                const btnMobi = header.querySelector(".btn-mobi");
                const modalMB = document.querySelector(".menu-modal");

                rsMb.classList.add("actived");
                document.body.style.overflow = "hidden !important";
                menuMB.classList.remove("actived");
                btnMobi.classList.remove("actived");
                modalMB.classList.remove("actived");



                setTimeout(() => {
                    headerSearchIps.forEach((headerSearchIp) => {
                        headerSearchIp.focus();
                    });
                }, 300);
            }
        });

        btnSearchExits.forEach((btnSearchExit) => {
            btnSearchExit.addEventListener("click", () => {
                const ips = document.querySelectorAll(".header-search-ip input")
                if (window.screen.width > 1200) {
                    headerBox.classList.remove("showed");
                    headerNav.classList.remove("none");
                    btnSearchExit.classList.remove("showed");
                    const ips = document.querySelectorAll(".header-search-ip input")
                    ips.forEach((ip) => {
                        ip.value = "";
                    })



                } else {
                    const rsMb = document.querySelector(".rs-mb");
                    rsMb.classList.remove("actived");
                    document.body.style.overflow = "auto !important";
                   
                    const ips = document.querySelectorAll(".header-search-ip input")
                    ips.forEach((ip) => {
                        ip.value = "";
                    })
                }
            });
        });

        const rsModal = document.querySelector(".result-mobi-modal")
        rsModal.addEventListener("click", () => {
            const rsMb = document.querySelector(".rs-mb");
            rsMb.classList.remove("actived");
            document.body.style.overflow = "auto !important";
        })



        // add mui ten
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
            });
        }

        // menu dropdown
        const dropdowns = document.querySelectorAll(".dropdown");


        if (dropdowns) {
            const menuMB = document.querySelector(".menu-mb");
            dropdowns.forEach((dropdown, index) => {
                const menuIc = dropdown.querySelector(".menu-ic");
                const menuList = dropdown.querySelector(".menu-list");



                if (menuIc) {
                    menuIc.addEventListener("click", (e) => {

                        e.preventDefault();

                        if (menuList.style.display == "none" || menuList.style.display == "") {
                            $(".menu-mb-wrap .dropdown .menu-list").slideUp(500);
                            const menuIcActived = document.querySelector(".menu-ic.actived")
                            if (menuIcActived) {
                                menuIcActived.classList.remove("actived");
                            }

                            $(menuList).slideDown(500);
                            menuIc.classList.add("actived");
                        } else {
                            $(menuList).slideUp(500);
                            menuIc.classList.remove("actived");
                        }

                    });

                    window.addEventListener("click", (e) => {
                        if (!e.target.closest(".menu-ic")) {
                            const menuList = dropdown.querySelector(".menu-list");
                            $(menuList).slideUp(500);
                            menuIc.classList.remove("actived");
                        }
                    });
                }
            });
        }

        //header mobi
        const btnMobi = header.querySelector(".btn-mobi");
        const menuMB = document.querySelector(".menu-mb");
        const modalMB = document.querySelector(".menu-modal");
        btnMobi.addEventListener("click", () => {
            btnMobi.classList.toggle("actived");

            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");
        });

        modalMB.addEventListener("click", () => {
            btnMobi.classList.toggle("actived");
            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");
        });

        // header scroll

        var prevScrollPos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            if (window.screen.width > 1200) {
                var currentScrollPos = window.pageYOffset;
                const filter = document.querySelector(".product_lf--wrap");
                const resultSearch = document.querySelector(".result-search");
                if (prevScrollPos > currentScrollPos) {
                    header.classList.remove("actived");
                    resultSearch.classList.remove("actived");

                    if (filter) {
                        filter.style.top = "14rem"
                    }
                } else {
                    header.classList.add("actived");

                    if (filter) {
                        filter.style.top = "8rem"
                    }
                }
                prevScrollPos = currentScrollPos;

                const headerAbout = document.querySelector(".header.trans");
                if (headerAbout) {
                    if (window.scrollY > 0) {
                        headerAbout.classList.add("bg");
                    } else {
                        headerAbout.classList.remove("bg");

                    }
                }
            }
        });

        // mega menu
        const megaMenus = document.querySelectorAll(".mega-menu");
        if (megaMenus) {
            megaMenus.forEach((megaMenu) => {
                const megaTitles = megaMenu.querySelectorAll(".mega-title");
                const megaContents = megaMenu.querySelectorAll(".mega-content");

                megaTitles.forEach((megaTitle, index) => {
                    megaTitle.addEventListener("mouseover", () => {
                        const megaTitleActived = megaMenu.querySelector(
                            ".mega-title.actived"
                        );
                        const megaContentActived = megaMenu.querySelector(
                            ".mega-content.actived"
                        );
                        megaTitleActived.classList.remove("actived");
                        megaContentActived.classList.remove("actived");
                        megaContents[index].classList.add("actived");
                        megaTitle.classList.add("actived");
                    });
                });
            });
        }
    }
}
