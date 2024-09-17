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

        const megaMenu = header.querySelector(".menu-mega");
        if (megaMenu) {
            {
                const menuMegaLfs = megaMenu.querySelectorAll(".menuMegaLf");
                const menuMegaRts = megaMenu.querySelectorAll(".menuMegaRt");

                menuMegaLfs.forEach((menuMegaLf, index) => {
                    if (index === 0) {
                        menuMegaLfs[0].classList.add("actived");
                        menuMegaRts[0].classList.add("showed");
                    }
                    menuMegaLf.addEventListener("mousemove", () => {
                        const menuMegaLfActived = header.querySelector(".menuMegaLf.actived");

                        const menuMegaRtShowed = header.querySelector(".menuMegaRt.showed");

                        console.log(menuMegaLfActived)

                        menuMegaLfActived.classList.remove("actived");
                        menuMegaRtShowed.classList.remove("showed");


                        menuMegaLf.classList.add("actived");
                        menuMegaRts[index].classList.add("showed");

                    })
                })
            }
        }



        //cuon trang
        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    header.classList.add("actived");
                } else {
                    header.classList.remove("actived");



                }
            })
        }

        //mui ten click
        // if (window.screen.width < 1200) {
        const dropdowns = document.querySelectorAll(".dropdown");


        if (dropdowns) {
            const menuMB = document.querySelector(".menu_mb");
            dropdowns.forEach((dropdown, index) => {
                const menuIc = dropdown.querySelector(".menu-ic");
                const menuList = dropdown.querySelector(".menu-list");



                if (menuIc) {
                    if (window.screen.width < 1200) {
                        menuIc.addEventListener("click", (e) => {

                            e.preventDefault();
                            $(menuList).slideToggle(500);
                            menuIc.classList.toggle("actived");


                        });

                        window.addEventListener("click", (e) => {
                            if (!e.target.closest(".menu-ic")) {
                                const menuList = dropdown.querySelector(".menu-list");
                                $(menuList).slideUp(500);
                                menuIc.classList.remove("actived");
                            }
                        });
                    }

                }
            });
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

        const menuMBDM = document.querySelector(".menu_mb.menu-dm");
        if (menuMBDM) {
            if (window.screen.width > 1200) {
                menuMBDM.addEventListener("mousemove", () => {
                    const menuMB = document.querySelector(".menu_mb.menu-dm");
                    menuMB.classList.add("showed");
                    // document.body.classList.toggle("actived");
                    const btn = header.querySelector(".btn-dm");
                    btn.classList.add("actived");

                })


                menuMBDM.addEventListener("mouseleave", () => {
                    const menuMB = document.querySelector(".menu_mb.menu-dm");
                    menuMB.classList.remove("showed");
                    // document.body.classList.toggle("actived");

                    const btn = header.querySelector(".btn-dm");
                    btn.classList.remove("actived");
                })
            }
        }



        const btnDm = header.querySelector(".btn-dm");
        if (btnDm) {
            if (window.screen.width > 1200) {
                btnDm.addEventListener("mousemove", () => {
                    const menuMB = document.querySelector(".menu_mb.menu-dm");
                    menuMB.classList.add("showed");
                    // document.body.classList.toggle("actived");

                })

                btnDm.addEventListener("mouseleave", () => {
                    const menuMB = document.querySelector(".menu_mb.menu-dm");
                    menuMB.classList.remove("showed");
                    // document.body.classList.toggle("actived");


                })
            } else {
                btnDm.addEventListener("click", () => {
                    const menuMB = document.querySelector(".menu_mb.menu-dm");
                    menuMB.classList.toggle("showed");
                    // document.body.classList.toggle("actived");

                    const menuMB2 = document.querySelector(".menu_mb");
                    menuMB2.classList.remove("showed");
                })
            }

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

        const modalDM = document.querySelector(".menu-dm--modal");
        if (modalDM) {
            modalDM.addEventListener("click", () => {
                const menuMB = document.querySelector(".menu_mb.menu-dm");
                menuMB.classList.remove("showed");
                document.body.classList.remove("actived");

            })
        }

        const btnExDm = document.querySelector(".menu-dm-ex");
        if (btnExDm) {
            btnExDm.addEventListener("click", () => {
                const menuMB = document.querySelector(".menu_mb.menu-dm");
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
            // let heightMenuBtn = menuBtn.clientHeight;



            let heightTotal = heightMenuMb - heightMenuInfo;

            if (menuList) {
                menuList.style.maxHeight = heightTotal + "px"

            }
        }

        // const menuDM = document.querySelector(".menu_mb.menu-dm");
        // if (menuDM) {
        //     const menuList = menuDM.querySelector(".menu-list");
        //     const title = menuDM.querySelector(".menu_mb--title");
        //     const wrap = menuDM.querySelector(".menu_mb--wrap");
        //     var computedStyle3 = window.getComputedStyle(wrap);


        //     let heightTotal = menuDM.clientHeight - title.clientHeight - parseInt(computedStyle3.paddingBottom) - parseInt(computedStyle3.paddingTop) - parseInt(computedStyle3.rowGap);

        //     if (menuList) {
        //         menuList.style.maxHeight = heightTotal + "px"

        //     }
        // }

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


        const btnTour = header.querySelector(".header_btn .btn.scroll-booking");
        if (btnTour) {
            if (window.screen.width < 800) {
                btnTour.addEventListener("click", (e) => {
                    setTimeout(() => {
                        e.preventDefault();
                        function scrollToID(id, speed) {
                            const offSet = $(".header").outerHeight();
                            const section = $(id).offset();
                            const targetOffset = section.top - offSet;
                            $("html,body").animate({ scrollTop: targetOffset }, speed);
                            console.log("Ádasdas")
                        }

                        const speed = 800;
                        // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
                        const hash = window.location.hash;
                        if ($(hash).length) scrollToID(hash, speed);
                        // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
                    }, 100)

                })
            }
        }
    }
}