let tab = document.querySelectorAll('.tabJS');
if (tab) {
   tab.forEach((t) => {
      let tBtn = t.querySelectorAll('.tabBtn');
      let tPanel = t.querySelectorAll('.tabPanel');

      // for tab
      if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
         tBtn[0].classList.add('active');
         // tPanel[0].classList.add('open');
         $(tPanel[0]).slideDown();

         for (let i = 0; i < tBtn.length; i++) {
            tBtn[i].addEventListener('click', showPanel);

            function showPanel(e) {
               e.preventDefault();
               for (let a = 0; a < tBtn.length; a++) {
                  tBtn[a].classList.remove('active');
                  // tPanel[a].classList.remove('open');
                  $(tPanel[a]).slideUp(400);

               }
               tBtn[i].classList.add('active');
               // tPanel[i].classList.add('open');
               $(tPanel[i]).slideDown(400);

            }
         }
      }
   });
}

const tabBoxs = document.querySelectorAll(".tab-box")
if (tabBoxs) {
   tabBoxs.forEach((tabBox) => {
      const tabBtns = tabBox.querySelectorAll(".tab-btn");
      const tabContents = tabBox.querySelectorAll(".tab-content");


      if (tabBtns) {
         tabBtns.forEach((tabBtn, index) => {
            tabBtn.addEventListener("click", () => {
               const tabBtnActived = tabBox.querySelector(".tab-btn.actived");
               tabBtnActived.classList.remove("actived");

               const tabContentShowed = tabBox.querySelector(".tab-content.showed");
               tabContentShowed.classList.remove("showed");


               tabBtn.classList.add("actived");
               tabContents[index].classList.add("showed");
            })
         })
      }
   })
}

