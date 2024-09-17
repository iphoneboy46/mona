export default function LinksMain() {
  try {
    const scrollTop = document.querySelector(".scroll-to-top");

    if (scrollTop) {
      scrollTop.addEventListener("click", () => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    const menuListLink = document.querySelector(".links-main2");
    window.addEventListener("scroll", () => {
      if (menuListLink) {
        if (window.scrollY > 200) {
          menuListLink.classList.add("actived");
        } else {
          menuListLink.classList.remove("actived");
        }
      }
    });

    // if (menuListLink) {
    //   const btnFollow = menuListLink.querySelector(".btnFollow");
    //   const btnExits = menuListLink.querySelector(".btnExFollow");
    //   const linksMainPopup = menuListLink.querySelector(".linksMainPopup");




    //   btnFollow.addEventListener("click", () => {

    //     linksMainPopup.classList.add("showed")
    //   })

    //   btnExits.addEventListener("click", () => {

    //     linksMainPopup.classList.remove("showed")
    //   })




    //   window.addEventListener("click", (e) => {
    //     if (!e.target.closest(".links-main2")) {
    //       linksMainPopup.classList.remove("showed")
    //     }
    //   })

    // }



    const prints = document.querySelectorAll(".print");
    if (prints) {
      prints.forEach((print) => {
        print.addEventListener("click", () => {
          window.print();
        })
      })
    }

  } catch (error) {
    console.log(error);
  }
}
