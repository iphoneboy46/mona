export default function LinksMain() {
  try {
    const scrollTop = document.querySelector(".scroll-to-top");

    if (scrollTop) {
      scrollTop.addEventListener("click", () => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    const menuListLink = document.querySelector(".links-main");
    window.addEventListener("scroll", () => {
      if (menuListLink) {
        if (window.scrollY > 0) {
          menuListLink.classList.add("active");
        } else {
          menuListLink.classList.remove("active");
        }
      }
    });

    if(menuListLink){
      const btnSocial = menuListLink.querySelector(".btn-social");
      const linksMainList = menuListLink.querySelector(".links-main-list");
      btnSocial.addEventListener("click",()=>{
          linksMainList.classList.toggle("showed")
      })

      window.addEventListener("click",(e)=>{
        if(!e.target.closest(".links-main")){
          linksMainList.classList.remove("showed")
        }
      })

    }


  } catch (error) {
    console.log(error);
  }
}
