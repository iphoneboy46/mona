export default function seeMore() {
  const newsCt = document.querySelector(".product-details");
  if (newsCt) {
    const parentWrapper = document.querySelector(".parent-wrapper");
    if (parentWrapper) {
      let heightParent = parentWrapper.clientHeight;

      parentWrapper.style.height = heightParent / 1.2 + "px";

      const btnSeeMore = document.querySelector(".btn-see-more");
      if (btnSeeMore) {
        const btnExitMore = document.querySelector(".btn-exit-more");
        btnSeeMore.addEventListener("click", () => {
          btnSeeMore.style.display = "none";
          btnExitMore.style.display = "flex";
          parentWrapper.style.height = heightParent + "px";
          parentWrapper.classList.add("hiddenPost");
        });
      }

      const btnExitMore = document.querySelector(".btn-exit-more");
      btnExitMore.style.display = "none";

      if (btnExitMore) {
        const btnSeeMore = document.querySelector(".btn-see-more");

        btnExitMore.addEventListener("click", () => {
          btnSeeMore.style.display = "flex";
          btnExitMore.style.display = "none";
          parentWrapper.style.height = heightParent / 1.2 + "px";
          parentWrapper.classList.remove("hiddenPost");

        });
      }
    }
  }


  const newsCt2 = document.querySelector(".product-seo");
  if (newsCt2) {
    const parentWrapper = document.querySelector(".parent-wrapper");
    if (parentWrapper) {
      let heightParent = parentWrapper.clientHeight;

      parentWrapper.style.height = heightParent / 1.8 + "px";

      const btnSeeMore = document.querySelector(".btn-see-more");
      if (btnSeeMore) {
        const btnExitMore = document.querySelector(".btn-exit-more");
        btnSeeMore.addEventListener("click", () => {
          btnSeeMore.style.display = "none";
          btnExitMore.style.display = "flex";
          parentWrapper.style.height = heightParent + "px";
          parentWrapper.classList.add("hiddenPost");
        });
      }

      const btnExitMore = document.querySelector(".btn-exit-more");
      btnExitMore.style.display = "none";

      if (btnExitMore) {
        const btnSeeMore = document.querySelector(".btn-see-more");

        btnExitMore.addEventListener("click", () => {
          btnSeeMore.style.display = "flex";
          btnExitMore.style.display = "none";
          parentWrapper.style.height = heightParent / 1.8 + "px";
          parentWrapper.classList.remove("hiddenPost");

        });
      }
    }
  }


  // const showContents = document.querySelectorAll(".show-content");
  // if (showContents) {
  //   showContents.forEach((showContent) => {
  //     const contentText = showContent.querySelector(".content-text");
  //     const btnShowText = showContent.querySelector(".btn-show");
  //     const btnHiddenText = showContent.querySelector(".btn-hidden");

  //     btnShowText.addEventListener("click", () => {
  //       contentText.classList.add("showed");
  //       btnShowText.classList.add("hiddend");
  //       btnHiddenText.classList.remove("hiddend");
  //     })


  //     btnHiddenText.addEventListener("click", () => {
  //       contentText.classList.remove("showed");
  //       btnShowText.classList.remove("hiddend");
  //       btnHiddenText.classList.add("hiddend");
  //     })

  //   })
  // }


  


}
