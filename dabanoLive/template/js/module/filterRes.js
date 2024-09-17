export default function filterRes() {
    const filterWrap = document.querySelector(".filter-wrap");
    if (filterWrap) {
        if(window.screen.width < 1200){
            const filterBox = filterWrap.querySelector(".filter-box");
            const btnExFilter = filterWrap.querySelector(".btn-filter-exits");
            const btnFilter = filterWrap.querySelector(".btn-filter");
            const modalFilter = document.querySelector(".modal-filter");
    
            btnFilter.addEventListener("click", () => {
                filterBox.classList.add("showed");
                modalFilter.classList.add("actived");
    
            })
    
            btnExFilter.addEventListener("click", () => {
                filterBox.classList.remove("showed");
                modalFilter.classList.remove("actived");
    
            })
    
            modalFilter.addEventListener("click", () => {
                filterBox.classList.remove("showed");
                modalFilter.classList.remove("actived");
    
            })
        }
       
    }
}