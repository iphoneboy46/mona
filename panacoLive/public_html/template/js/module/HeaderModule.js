export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header) {
    const headerSearch = document.querySelector(".header-search");
    const btnSearch = header.querySelector(".btn-search");
    const btnSearchExits = header.querySelector(".btn-search-exit");
    const headerSearchIp = header.querySelector(".header-search-ip");
    const headerSearchIpIp = header.querySelector(".header-search-ip input");

    if (btnSearch) {
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
          headerSearchIpIp.focus();
        }, 500);
      });
    }

    if (btnSearchExits) {
      btnSearchExits.addEventListener("click", () => {
        btnSearchExits.classList.remove("showed");
        btnSearch.classList.remove("hiddened");
        headerSearchIp.classList.remove("showed");
      });
    }

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".header-search")) {
        btnSearchExits.classList.remove("showed");
        btnSearch.classList.remove("hiddened");
        headerSearchIp.classList.remove("showed");
      }
    });

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

    const dropdowns = document.querySelectorAll(".dropdown");
    if (dropdowns) {
      if (window.screen.width < 1200) {
        dropdowns.forEach((dropdown) => {
          const menuIc = dropdown.querySelector(".menu-ic");

          if (menuIc) {
            menuIc.addEventListener("click", (e) => {
              e.preventDefault();
              menuIc.classList.toggle("actived");
              const menuList = dropdown.querySelector(".menu-list");
              $(menuList).slideToggle(500);
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

    if (window.screen.width > 1200 && window.screen.width < 2000) {
      var heightHd = header.clientHeight / 10;

      window.addEventListener("load", () => {
        const pt = document.querySelector(".pt");
        const pt2 = document.querySelector(".pt-2");
        let heightHd = header.clientHeight / 10;
        if (pt) {
          pt.style.paddingTop = heightHd + "rem";
        }

        if (pt2) {
          pt2.style.paddingTop = heightHd + "rem";
        }
      });
    }

    window.addEventListener("scroll", () => {
      const pt = document.querySelector(".pt");
      const pt2 = document.querySelector(".pt-2");

      const heightHd2 = header.clientHeight / 10;

      if (window.screen.width > 1200) {
        if (window.scrollY > 1) {
          header.classList.add("actived");

          if (pt && window.screen.width < 2000) {
            pt.style.paddingTop = heightHd2 + "rem";
          }

          if (pt2 && window.screen.width < 2000) {
            pt2.style.paddingTop = heightHd2 + "rem";
          }
        } else {
          header.classList.remove("actived");

          if (pt && window.screen.width < 2000) {
            pt.style.paddingTop = heightHd + "rem";
          }

          if (pt2 && window.screen.width < 2000) {
            pt2.style.paddingTop = heightHd + "rem";
          }
        }
      }
    });

    const menuMega = document.querySelector(".menu-mega");
    if (menuMega) {
      const menuMgTitles = menuMega.querySelectorAll(".menuMgTitle");

      menuMgTitles.forEach((menuMgTitle, index) => {
        menuMgTitle.addEventListener("mousemove", () => {
          const menuMgItems = menuMega.querySelectorAll(".menuMgItem");

          const menuMgTitleAc = document.querySelector(".menuMgTitle.actived");
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
        });

        menuMgTitle.addEventListener("mouseleave", () => {
          const menuMgItems = menuMega.querySelectorAll(".menuMgItem");

          const menuMgTitleAc = document.querySelector(".menuMgTitle.actived");
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
        });
      });

      const menuMgItems = menuMega.querySelectorAll(".menuMgItem");
      menuMgItems.forEach((menuMgItem, index) => {
        const menuMgItemItems = menuMgItem.querySelectorAll(".menuMgItemItem");
        menuMgItemItems.forEach((menuMgItemItem) => {
          menuMgItemItem.addEventListener("mousemove", () => {
            const menuMgItemTitle =
              menuMgItemItem.querySelector(".menuMgItemTitle");
            menuMgItemTitle.classList.add("showed");
          });

          menuMgItemItem.addEventListener("mouseleave", () => {
            const menuMgItemTitle =
              menuMgItemItem.querySelector(".menuMgItemTitle");
            menuMgItemTitle.classList.remove("actived");
          });
        });

        menuMgItem.addEventListener("mousemove", () => {
          const menuMgTitles = menuMega.querySelectorAll(".menuMgTitle");

          const menuMgTitleAc = document.querySelector(".menuMgTitle.actived");
          const menuMgItemAc = document.querySelector(".menuMgItem.showed");

          const memuMegaRt = document.querySelector(".menu-mega-rt");

          if (menuMgTitleAc) {
            menuMgTitleAc.classList.remove("actived");
          }

          if (menuMgItemAc) {
            menuMgItemAc.classList.remove("showed");
          }

          menuMgTitles[index].classList.add("actived");
          menuMgItem.classList.add("showed");
          memuMegaRt.classList.add("showed");


          const headerMegaMenu = document.querySelector(".header-mega-menu");
          headerMegaMenu.classList.add("showed");
          headerMegaMenu.classList.add("normal");
          const zIndex = document.querySelector(".banner_home--lf-wrap");
          if (zIndex) {
            zIndex.classList.add("activedIndex");
          }
          const bannerHome = document.querySelector(".banner_home");
          if (bannerHome) {
            const menuMgTitle2s = bannerHome.querySelectorAll(".menuMgTitle2");
            menuMgTitle2s[index].classList.add("actived");
          }
        });

        menuMgItem.addEventListener("mouseleave", () => {
          const menuMgTitles = menuMega.querySelectorAll(".menuMgTitle");

          const menuMgTitleAc = document.querySelector(".menuMgTitle.actived");
          const menuMgItemAc = document.querySelector(".menuMgItem.showed");
          const memuMegaRt = document.querySelector(".menu-mega-rt");
          if (menuMgTitleAc) {
            menuMgTitleAc.classList.remove("actived");
          }

          if (menuMgItemAc) {
            menuMgItemAc.classList.remove("showed");
          }

          menuMgTitles[index].classList.remove("actived");
          menuMgItem.classList.remove("showed");
          memuMegaRt.classList.remove("showed");

          const headerMegaMenu = document.querySelector(".header-mega-menu");
          headerMegaMenu.classList.remove("showed");
          headerMegaMenu.classList.remove("normal");
          headerMegaMenu.classList.remove("showed2");
          const zIndex = document.querySelector(".banner_home--lf-wrap");
          if (zIndex) {
            zIndex.classList.remove("activedIndex");
          }
          const bannerHome = document.querySelector(".banner_home");
          if (bannerHome) {

            const menuMgTitle2s = bannerHome.querySelectorAll(".menuMgTitle2");
            menuMgTitle2s[index].classList.remove("actived");
          }

        });
      });
    }





    const btnMega = header.querySelector(".header-bottom-lf-wrap");
    if (btnMega) {
      btnMega.addEventListener("mousemove", () => {
        btnMega.classList.add("actived");
        const headerMegaMenu = document.querySelector(".header-mega-menu");
        headerMegaMenu.classList.add("showed");
        const zIndex = document.querySelector(".banner_home--lf-wrap");
        if (zIndex) {
          zIndex.classList.add("activedIndex");
        }
        headerMegaMenu.classList.add("normal");
        headerMegaMenu.classList.remove("showed2");

      });

      btnMega.addEventListener("mouseleave", () => {
        btnMega.classList.remove("actived");
        const headerMegaMenu = document.querySelector(".header-mega-menu");
        headerMegaMenu.classList.remove("showed");
        const zIndex = document.querySelector(".banner_home--lf-wrap");
        if (zIndex) {
          zIndex.classList.remove("activedIndex");
        }
        headerMegaMenu.classList.remove("normal");
        headerMegaMenu.classList.remove("showed2");

      });
    }

    const modalMega = document.querySelector(".menu-mega-modal");
    if (modalMega) {
      modalMega.addEventListener("click", () => {
        const btnMega = header.querySelector(".header-bottom-lf-wrap");
        btnMega.classList.remove("actived");
        modalMega.classList.remove("actived");
        const headerMegaMenuShowed = document.querySelector(".header-mega-menu.showed");
        headerMegaMenuShowed.classList.remove("showed");

        const headerMegaMenuNormal = document.querySelector(".header-mega-menu.normal");
        if (headerMegaMenuNormal) {
          headerMegaMenuNormal.classList.remove("normal");

        }

        const zIndexAc = document.querySelector(
          ".banner_home--lf-wrap.activedIndex"
        );
        if (zIndexAc) {
          zIndexAc.classList.remove("activedIndex");
        }
      });
    }

    const megaMenuLf = document.querySelector(".menu-mega-lf ");
    if (megaMenuLf) {

      megaMenuLf.addEventListener("mousemove", () => {
        const headerMegaMenu = document.querySelector(".header-mega-menu");

        const btnMega = header.querySelector(".header-bottom-lf-wrap");
        btnMega.classList.add("actived");
        headerMegaMenu.classList.add("showed");
        headerMegaMenu.classList.add("normal");
        const zIndex = document.querySelector(".banner_home--lf-wrap");
        if (zIndex) {
          zIndex.classList.add("activedIndex");
        }

      })


      megaMenuLf.addEventListener("mouseleave", () => {
        const headerMegaMenu = document.querySelector(".header-mega-menu");
        const btnMega = header.querySelector(".header-bottom-lf-wrap");
        btnMega.classList.remove("actived");
        headerMegaMenu.classList.remove("showed");
        headerMegaMenu.classList.remove("normal");
        const zIndex = document.querySelector(".banner_home--lf-wrap");
        if (zIndex) {
          zIndex.classList.remove("activedIndex");
        }

      })
    }
  }

  // const menuMega = document.querySelector(".menu-mega");
  // if(menuMega){
  //   const menuRtItems = menuMega.querySelectorAll(".menu-mega-rt-item-item");
  //   menuRtItems.forEach((menuRtItem) => {
  //       const menuMegaList = menuRtItem.querySelector(".menu-mega-list");
  //       if(menuMegaList){
  //           const menuRtTitle = menuRtItem.querySelector(".menu-mega-rt-item-title");
  //           const span = document.createElement("span");
  //           span.classList.add("ic");
  //           span.innerHTML += `<i class="fal fa-angle-down"></i>`
  //           menuRtTitle.appendChild(span);
  //       }
  //   })
  // }
}
