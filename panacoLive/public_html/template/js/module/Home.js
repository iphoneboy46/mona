export default function HomeJs() {
    const bannerHome = document.querySelector(".banner_home");
    if (bannerHome) {
        const header = document.querySelector(".header");
        const menuMega = document.querySelector(".menu-mega");
        const headerMegaMenu = document.querySelector(".header-mega-menu")
        const menuMgTitles = bannerHome.querySelectorAll(".menuMgTitle2");
        menuMgTitles.forEach((menuMgTitle, index) => {
            menuMgTitle.addEventListener("mousemove", () => {
                const headerMegaMenu = document.querySelector(".header-mega-menu");
                const menuMgItems = menuMega.querySelectorAll(".menuMgItem");

                const menuMgTitleAc = document.querySelector(".menuMgTitle2.actived");
                const menuMgItemAc = document.querySelector(".menuMgItem.showed");
                const memuMegaRt = document.querySelector(".menu-mega-rt");
                if (menuMgTitleAc) {
                    menuMgTitleAc.classList.remove("actived");
                }

                if (menuMgItemAc) {
                    menuMgItemAc.classList.remove("showed");
                }

                menuMgTitle.classList.add("actived");


                memuMegaRt.classList.add("showed");
                menuMgItems[index].classList.add("showed");
                headerMegaMenu.classList.remove("showed");
                headerMegaMenu.classList.add("showed2");


            });

            menuMgTitle.addEventListener("mouseleave", () => {
                const menuMgItems = menuMega.querySelectorAll(".menuMgItem");
                const headerMegaMenu = document.querySelector(".header-mega-menu");
                const menuMgTitleAc = document.querySelector(".menuMgTitle2.actived");
                const menuMgItemAc = document.querySelector(".menuMgItem.showed");
                const memuMegaRt = document.querySelector(".menu-mega-rt");
                if (menuMgTitleAc) {
                    menuMgTitleAc.classList.remove("actived");
                }

                if (menuMgItemAc) {
                    menuMgItemAc.classList.remove("showed");
                }

                menuMgTitle.classList.remove("actived");
                menuMgItems[index].classList.remove("showed");
                memuMegaRt.classList.remove("showed");
                // headerMegaMenu.classList.remove("showed2");

            });
        });

        // const menuMgItems = headerMegaMenu.querySelectorAll(".menuMgItem");
        // menuMgItems.forEach((menuMgItem, index) => {
        //     const menuMgItemItems = menuMgItem.querySelectorAll(".menuMgItemItem");
        //     menuMgItemItems.forEach((menuMgItemItem) => {
        //         menuMgItemItem.addEventListener("mousemove", () => {
        //             const menuMgItemTitle =
        //                 menuMgItemItem.querySelector(".menuMgItemTitle");
        //             menuMgItemTitle.classList.add("showed");
        //         });

        //         menuMgItemItem.addEventListener("mouseleave", () => {
        //             const menuMgItemTitle =
        //                 menuMgItemItem.querySelector(".menuMgItemTitle");
        //             menuMgItemTitle.classList.remove("actived");
        //         });
        //     });

        //     menuMgItem.addEventListener("mousemove", () => {
        //         const menuMgTitles = bannerHome.querySelectorAll(".menuMgTitle2");

        //         const menuMgTitleAc = document.querySelector(".menuMgTitle2.actived");
        //         const menuMgItemAc = document.querySelector(".menuMgItem.showed");

        //         const memuMegaRt = document.querySelector(".menu-mega-rt");
        //         const headerMegaMenu = document.querySelector(".header-mega-menu");

        //         if (menuMgTitleAc) {
        //             menuMgTitleAc.classList.remove("actived");
        //         }

        //         if (menuMgItemAc) {
        //             menuMgItemAc.classList.remove("showed");
        //         }

        //         menuMgTitles[index].classList.add("actived");
        //         menuMgItem.classList.add("showed");
        //         memuMegaRt.classList.add("showed");

        //         headerMegaMenu.classList.add("showed2");
        //         // if (headerMegaMenu.classList.contains("showed2")) {
        //         //     headerMegaMenu.classList.remove("showed");
        //         //     headerMegaMenu.classList.remove("normal");
        //         // }

                



        //     });

        //     menuMgItem.addEventListener("mouseleave", () => {
        //         const menuMgTitles = bannerHome.querySelectorAll(".menuMgTitle2");
        //         const headerMegaMenu = document.querySelector(".header-mega-menu");
        //         const menuMgTitleAc = document.querySelector(".menuMgTitle2.actived");
        //         const menuMgItemAc = document.querySelector(".menuMgItem.showed");
        //         const memuMegaRt = document.querySelector(".menu-mega-rt");
        //         if (menuMgTitleAc) {
        //             menuMgTitleAc.classList.remove("actived");
        //         }

        //         if (menuMgItemAc) {
        //             menuMgItemAc.classList.remove("showed");
        //         }

        //         menuMgTitles[index].classList.remove("actived");
        //         menuMgItem.classList.remove("showed");
        //         memuMegaRt.classList.remove("showed");
        //         headerMegaMenu.classList.remove("showed2");

        //         // const headerMegaMenu = document.querySelector(".header-mega-menu");
        //         // headerMegaMenu.classList.remove("showed");
        //         // headerMegaMenu.classList.remove("normal");

        //     });
        // });
    }
}
