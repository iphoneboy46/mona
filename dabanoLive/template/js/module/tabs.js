export default function Tabs() {
  const listTabBtn = document.querySelector(".list-tabs-btn");
  const listTabContent = document.querySelector(".list-tabs-content");

  if (listTabBtn) {
    const itemTabBtns = listTabBtn.querySelectorAll(".item-tabs-btn");
    const itemTabContents = listTabContent.querySelectorAll(".item-tabs-content");

    itemTabBtns.forEach((itemTabBtn, index) => {
      itemTabBtn.addEventListener("click", () => {

        const itemTabBtnActive = listTabBtn.querySelector(".item-tabs-btn.actived");
        const itemTabContentActive = listTabContent.querySelector(".item-tabs-content.actived");

        itemTabBtnActive.classList.remove("actived");
        itemTabContentActive.classList.remove("actived");
        itemTabBtn.classList.add("actived");
        itemTabContents[index].classList.add("actived");
      });
    });
  }

  const tuVanCtPl = document.querySelector(".tu-van-ct-pl");
  if (tuVanCtPl) {
    const tuVanCtPlTop = tuVanCtPl.querySelector(".tu-van-ct-pl-top");
    const tuVanCtPlBottom = tuVanCtPl.querySelector(".tu-van-ct-pl-bottom");

    tuVanCtPlTop.addEventListener("click", () => {
      const tuVanCtPlTopActive = document.querySelector(".tu-van-ct-pl-top.actived");
      tuVanCtPlTop.classList.toggle("actived")
      $(tuVanCtPlBottom).slideToggle(500);
    })

    const tuVanCtPlItems = tuVanCtPl.querySelectorAll(".tu-van-ct-pl-item");
    tuVanCtPlItems.forEach((tuVanCtPlItem) => {
      tuVanCtPlItem.addEventListener("click", () => {
        const tuVanCtPlItemActive = tuVanCtPl.querySelector(".tu-van-ct-pl-item.actived");
        tuVanCtPlItemActive.classList.remove("actived");

        tuVanCtPlItem.classList.toggle("actived");

      })
    })
  }
}
