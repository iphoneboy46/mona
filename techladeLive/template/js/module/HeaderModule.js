export default function HeaderModule() {


    const header = document.querySelector(".header");
    if (header) {
        const headerSearch = document.querySelector(".header-search");
        const btnSearch = header.querySelector(".btn-search");
        const btnSearchExits = header.querySelector(".btn-search-exit");
        const headerSearchIp = header.querySelector(".header-search-ip");
        const headerSearchIpIp = header.querySelector(".header-search-ip input");

        btnSearch.addEventListener("click", () => {

            btnSearchExits.classList.add("showed");

            btnSearch.classList.add("hiddened");
            headerSearchIp.classList.add("showed");

            const menuMB = document.querySelector(".menu-mb");
            const modalMB = document.querySelector(".menu-modal");
            const btnMobi = header.querySelector(".btn-mobi");
            if (menuMB) {
                menuMB.classList.remove("actived");
                modalMB.classList.remove("actived");
                btnMobi.classList.remove("actived");
            }

            setTimeout(() => {
                headerSearchIpIp.focus()
            }, 500)
        })

        btnSearchExits.addEventListener("click", () => {

            btnSearchExits.classList.remove("showed");
            btnSearch.classList.remove("hiddened");
            headerSearchIp.classList.remove("showed");
        })

        window.addEventListener("click", (e) => {
            if (!e.target.closest(".header-search")) {
                btnSearchExits.classList.remove("showed");
                btnSearch.classList.remove("hiddened");
                if(headerSearchIp){
                    headerSearchIp.classList.remove("showed");
                }
            }
        })



        const menuItems = document.querySelectorAll(".menu-item");
        if (menuItems) {
            menuItems.forEach((menuItem) => {
                if (menuItem.classList.contains("dropdown")) {
                    const menuLink = menuItem.querySelector(".menu-link");
                    let menuIc = document.createElement("span");
                    menuIc.classList.add("menu-ic");
                    // menuIc.innerHTML = `<i class="fas fa-angle-down"></i>`;
                    menuLink.appendChild(menuIc);
                }
            })
        }

        const dropdowns = document.querySelectorAll(".dropdown");
        if (dropdowns) {

            dropdowns.forEach((dropdown) => {
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
                    })

                    window.addEventListener("click", (e) => {
                        if (!e.target.closest(".menu-ic")) {
                            const menuList = dropdown.querySelector(".menu-list");
                            $(menuList).slideUp(500);
                            menuIc.classList.remove("actived")
                        }
                    })
                }


            })


        }


        const btnMobis = header.querySelectorAll(".btn-mobi");
        const menuMB = document.querySelector(".menu-mb");
        const modalMB = document.querySelector(".menu-modal");
        const menuMbEx = document.querySelector(".menu-mb-ex");
        if (btnMobis) {
            btnMobis.forEach((btnMobi) => {
                btnMobi.addEventListener("click", () => {
                    // btnMobi.classList.toggle("actived")
                    menuMB.classList.toggle("actived");
                    modalMB.classList.toggle("actived");
                    document.body.classList.toggle("actived");
                })
            })

        }


        modalMB.addEventListener("click", () => {
            // btnMobi.classList.toggle("actived");
            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");

        });


        menuMbEx.addEventListener("click", () => {
            // btnMobi.classList.toggle("actived");
            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");

        });


        if (window.screen.width > 1200) {
            var headerNormal = document.querySelector(".header");
            var hdNormal = headerNormal.clientHeight;

            window.addEventListener("load", () => {
                const main = document.querySelector(".main");
                main.style.paddingTop = hdNormal + "px";

            })

            window.addEventListener("scroll", () => {


                if (window.scrollY > 0) {
                    const header = document.querySelector(".header");
                    const main = document.querySelector(".main");
                    const bannerHd = headerNormal.querySelector(".header-bg");
                    let heightHD = header.clientHeight;
                    header.classList.add("actived");
                    
                    main.style.paddingTop = heightHD - bannerHd.clientHeight + 50 + "px";

                } else {
                    const header = document.querySelector(".header");
                    const main = document.querySelector(".main");
                    header.classList.remove("actived");
                    main.style.paddingTop = hdNormal + "px";
                }

            })


        }
    }


    const cs = document.querySelector(".cs");
    if (cs) {
        const dropdowns = cs.querySelectorAll(".dropdown");
        if (dropdowns) {
            if (window.screen.width > 1200) {
                dropdowns.forEach((dropdown) => {
                    const menuIc = dropdown.querySelector(".menu-ic");

                    if (menuIc) {
                        menuIc.addEventListener("click", (e) => {
                            e.preventDefault();
                            menuIc.classList.toggle("actived")
                            const menuList = dropdown.querySelector(".menu-list");
                            menuIc.classList.toggle("actived");
                            const menuLink = dropdown.querySelector(".menu-link");
                            menuLink.classList.toggle("actived");
                            // menuList.classList.toggle("actived")

                        })

                        window.addEventListener("click", (e) => {
                            if (!e.target.closest(".menu-ic")) {
                                const menuList = dropdown.querySelector(".menu-list");
                                // menuList.classList.remove("actived");
                                menuIc.classList.remove("actived")

                                const menuLink = dropdown.querySelector(".menu-link");
                                menuLink.classList.remove("actived");
                            }
                        })
                    }

                })
            }

        }

    }


}