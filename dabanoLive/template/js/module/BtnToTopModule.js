export default function BtnToTopModule() {


  const btnToTop = document.querySelector(".btn-to-top");
  if (btnToTop) {
    btnToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }

  const fixedbar = document.querySelector(".fixedbar");
  if (fixedbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        fixedbar.classList.add("showed");

      } else {
        fixedbar.classList.remove("showed");

      }
    })
  }
}
