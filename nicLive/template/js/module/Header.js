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

        // const megaMenu = header.querySelector(".menu-mega");
        // if (megaMenu) {
        //     {
        //         const menuMegaLfs = megaMenu.querySelectorAll(".menuMegaLf");
        //         const menuMegaRts = megaMenu.querySelectorAll(".menuMegaRt");

        //         menuMegaLfs.forEach((menuMegaLf, index) => {
        //             menuMegaLf.addEventListener("mousemove", () => {
        //                 const menuMegaLfActived = header.querySelector(".menuMegaLf.actived");

        //                 const menuMegaRtShowed = header.querySelector(".menuMegaRt.showed");

        //                 console.log(menuMegaLfActived)

        //                 menuMegaLfActived.classList.remove("actived");
        //                 menuMegaRtShowed.classList.remove("showed");


        //                 menuMegaLf.classList.add("actived");
        //                 menuMegaRts[index].classList.add("showed");

        //             })
        //         })
        //     }
        // }



        //cuon trang
        // if (window.screen.width > 1200) {
        //     window.addEventListener("scroll", () => {
        //         if (window.scrollY > 0) {
        //             header.classList.add("actived");
        //         } else {
        //             header.classList.remove("actived");



        //         }
        //     })
        // }

        //mui ten click
        if (window.screen.width < 1200) {
            const dropdowns = document.querySelectorAll(".dropdown");


            if (dropdowns) {
                const menuMB = document.querySelector(".menu_mb");
                dropdowns.forEach((dropdown, index) => {
                    const menuIc = dropdown.querySelector(".menu-ic");
                    const menuList = dropdown.querySelector(".menu-list");



                    if (menuIc) {
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
                });
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
                const searchForm = document.querySelector(".header_search--form");
                searchForm.classList.add("showed");
                const input = searchForm.querySelector(".form-item-ip");
                document.body.style.overflow = "hidden";
                const menuMB = document.querySelector(".menu_mb");
                if (menuMB) {
                    const btnMb = header.querySelector(".btn-mobi");
                    menuMB.classList.remove("showed");
                    btnMb.classList.remove("actived");

                }
                setTimeout(() => {
                    input.focus();
                }, 800)


            })
            const btnSearchEx = document.querySelector(".btn-search-ex");
            if (btnSearchEx) {
                btnSearchEx.addEventListener("click", () => {
                    const searchForm = document.querySelector(".header_search--form");
                    searchForm.classList.remove("showed");

                    document.body.style.overflow = "auto";

                })
            }

            // window.addEventListener("click", (e) => {
            //     if (!e.target.closest(".header_search")) {
            //         btnSearch.classList.remove("showed");
            //         const searchForm = header.querySelector(".header_search--form");
            //         searchForm.classList.remove("showed");
            //     }
            // })
        }

        var prevScrollPos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            if (window.screen.width > 1200) {
                var currentScrollPos = window.pageYOffset;

                if (prevScrollPos > currentScrollPos) {
                    header.classList.remove("actived");

                } else {
                    header.classList.add("actived");


                }
                prevScrollPos = currentScrollPos;


            }
        });
    }
}