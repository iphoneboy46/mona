export default function seeMore() {
  if (window.innerWidth <= 768) {
    const newsCt = document.querySelector(".product-details");
    if (newsCt) {
      const parentWrapper = document.querySelector(".parent-wrapper");
      if (parentWrapper) {
        let heightParent = parentWrapper.clientHeight;

        parentWrapper.style.height = heightParent / 2.3 + "px";

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
            parentWrapper.style.height = heightParent / 2.3 + "px";
            parentWrapper.classList.remove("hiddenPost");
          });
        }
      }
    }
  } else {
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
  }

  if (window.innerWidth <= 768) {
    const newsCt2 = document.querySelector(".product-seo");
    if (newsCt2) {
      const parentWrapper = document.querySelector(".parent-wrapper");
      if (parentWrapper) {
        let heightParent = parentWrapper.clientHeight;

        parentWrapper.style.height = heightParent / 3.6 + "px";

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
            parentWrapper.style.height = heightParent / 3.6 + "px";
            parentWrapper.classList.remove("hiddenPost");
          });
        }
      }
    }
  } else {
    const newsCt2 = document.querySelector(".product-seo");
    if (newsCt2) {
      const parentWrapper = document.querySelector(".parent-wrapper");
      if (parentWrapper) {
        let heightParent = parentWrapper.clientHeight;

        parentWrapper.style.height = heightParent / 2.8 + "px";

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
            parentWrapper.style.height = heightParent / 2.8 + "px";
            parentWrapper.classList.remove("hiddenPost");
          });
        }
      }
    }
  }

  $(document).ready(function () {
    $(".product-details-rt-item").slice(0, 6).css("display", "flex");
    $(".product-details-rt-item").slice(6, 19).css("display", "none");
    $(".product-details-rt-wrap .btn.btn-see-more").css("display", "flex");
    $(".product-details-rt-wrap .btn.btn-exit-more").css("display", "none");
    $(".product-details-rt-wrap .btn.btn-see-more").click(function () {
      $(".product-details-rt-item").slice(6, 19).slideToggle(200);
      $(".product-details-rt-wrap .btn.btn-see-more").css("display", "none");
      $(".product-details-rt-wrap .btn.btn-exit-more").css("display", "flex");
    });
    $(".product-details-rt-wrap .btn.btn-exit-more").click(function () {
      $(".product-details-rt-item").slice(6, 19).slideToggle(200);
      $(".product-details-rt-wrap .btn.btn-see-more").css("display", "flex");
      $(".product-details-rt-wrap .btn.btn-exit-more").css("display", "none");
    });

    //ask-ques

    // const askElement = $('.ask-ques');
    // if(askElement){
    //   const btnAsk = $('.btn.btn-see-more');
    //   var currentItem = 3;
    //   const commentList = $('.ask-ques-item');
    //   commentList.hide();
    //   for (var i = 0 ; i < commentList.length; i++){
    //     $(commentList[i]).show();
    //   }
    //   btnAsk.click(function(){
    //     for (var i =3; i < currentItem + 3; i ++){
    //       $(commentList[i]).slideDown();
    //     }
    //     currentItem += 3;
    //   })
    //   if (currentItem > 3) {
    //     btnAsk.show();
    //   }
    //   else{
    //     btnAsk.hide();
    //   }
    // }

    const wrap = document.querySelector(".ask-ques-lf");
    if (wrap) {
      const btnText = document.querySelector(".btn-text-1");
      const boxs = wrap.querySelectorAll(".ask-ques-item");
      const btn = wrap.querySelector(".btn-see-more");
      var icon = wrap.querySelector(".btn-ic i");
      let currentIndex = 5;
      let isExpanded = true;

      for (let i = 5; i < boxs.length; i++) {
        if (boxs[i]) {
          $(boxs[i]).slideToggle();
        } else if (boxs[i] < 5) {
          $(btn).hide();
        } else {
          $(btn).show();
        }
      }

      if (btn) {
        btn.addEventListener("click", () => {
          for (let i = 0; i < 5; i++) {
            if (currentIndex < boxs.length) {
              $(boxs[currentIndex]).slideToggle();
              currentIndex++;
            }
          }

          if (currentIndex >= boxs.length) {
            if (isExpanded) {
              btnText.textContent = "Thu gọn";
              icon.style.transform = "rotate(180deg)"
              isExpanded = false;
            } else {
              btnText.textContent = "Xem thêm";
              icon.style.transform = "rotate(0deg)"

              for (let i = 5; i < boxs.length; i++) {
                if (boxs[i]) {
                  $(boxs[i]).slideUp();
                }
              }
              currentIndex = 5;
              isExpanded = true;
            }
          }
        });
      }
    }
  });

  // const tuVanCt = document.querySelector(".tu-van-ct-post");
  // if(tuVanCt){
  //   const parentWrapper = document.querySelector(".wr-content");
  //   if (parentWrapper) {
  //     let heightParent = parentWrapper.clientHeight;

  //     parentWrapper.style.height = heightParent / 6.6 + "px";

  //     const btnSeeMore = document.querySelector(".btn-see-more");
  //     if (btnSeeMore) {
  //       const btnExitMore = document.querySelector(".btn-exit-more");
  //       btnSeeMore.addEventListener("click", () => {
  //         btnSeeMore.style.display = "none";
  //         btnExitMore.style.display = "flex";
  //         parentWrapper.style.height = heightParent + "px";
  //         parentWrapper.classList.add("hiddenPost");
  //       });
  //     }

  //     const btnExitMore = document.querySelector(".btn-exit-more");
  //     btnExitMore.style.display = "none";

  //     if (btnExitMore) {
  //       const btnSeeMore = document.querySelector(".btn-see-more");

  //       btnExitMore.addEventListener("click", () => {
  //         btnSeeMore.style.display = "flex";
  //         btnExitMore.style.display = "none";
  //         parentWrapper.style.height = heightParent / 6.6 + "px";
  //         parentWrapper.classList.remove("hiddenPost");
  //       });
  //     }
  //   }
  // }
}
