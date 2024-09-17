export default function filterSp() {
    const listFilter = document.querySelector(".list-filter");
    if (listFilter) {
        const itemFilters = listFilter.querySelectorAll(".item-filter");

        itemFilters.forEach((itemFilter, index) => {
            const btnTitleFilter = itemFilter.querySelector(".btn-title-filter");

            btnTitleFilter.addEventListener("click", () => {
                btnTitleFilter.classList.toggle("actived")
                const contentFilterTitle = itemFilter.querySelector(".content-title-filter");
                $(contentFilterTitle).slideToggle(300);
            });

            const secItemFilters = itemFilter.querySelectorAll(".sec-item-filter");
            secItemFilters.forEach((secItemFilter, index) => {
                const btnTitleFilterChild = secItemFilter.querySelector(".btn-title-filter-child");

                if (btnTitleFilterChild) {
                    btnTitleFilterChild.addEventListener("click", () => {
                        btnTitleFilterChild.classList.toggle("actived");
                        const contentFilterTitleChild = secItemFilter.querySelector(".content-title-filter-child");

                        $(contentFilterTitleChild).slideToggle(300);
                    })
                }



            })

            const checkAll = itemFilter.querySelector(".check-all > input");
            const checkAlones = itemFilter.querySelectorAll(".check-alone > input");

            var quantityChecked = () => {
                checkAlones.forEach((checkAlone, index) => {
                    checkAlone.addEventListener("change", () => {
                        let checkAlonesChecked = itemFilter.querySelectorAll(".check-alone > input:checked").length;

                        const quantityNumFilter = itemFilter.querySelector(".quantity-num-filter");
                        quantityNumFilter.innerHTML = checkAlonesChecked;

                        console.log(checkAlonesChecked);
                    })
                })
            }

            quantityChecked();


            checkAll.addEventListener("change", () => {




                checkAlones.forEach((checkAlone, index) => {

                    if (checkAll.checked) {
                        checkAlone.checked = true;
                        let checkAlonesChecked = itemFilter.querySelectorAll(".check-alone > input:checked").length;

                        const quantityNumFilter = itemFilter.querySelector(".quantity-num-filter");
                        quantityNumFilter.innerHTML = checkAlonesChecked;

                    } else {
                        checkAlone.checked = false;
                        let checkAlonesChecked = itemFilter.querySelectorAll(".check-alone > input:checked").length;

                        const quantityNumFilter = itemFilter.querySelector(".quantity-num-filter");
                        quantityNumFilter.innerHTML = checkAlonesChecked;
                    }


                })


            })












        })
    }

    const sanPhamBottomLf = document.querySelector(".san-pham-bottom-lf");
    if (sanPhamBottomLf) {
        const btnFilter = document.querySelector(".btn-filter");
        const btnExitFilter = document.querySelector(".btn-exits");
        const modalFilter = document.querySelector(".modal-filter")
        btnFilter.addEventListener("click", () => {
            sanPhamBottomLf.classList.add("showed");
            modalFilter.classList.add("showed");
            document.body.style.overflow = "hidden";

          
        })



        btnExitFilter.addEventListener("click", () => {
            sanPhamBottomLf.classList.remove("showed");
            modalFilter.classList.remove("showed");
            document.body.style.overflow = "auto";
        })

        modalFilter.addEventListener("click", () => {
            sanPhamBottomLf.classList.remove("showed");
            modalFilter.classList.remove("showed");
            document.body.style.overflow = "auto";
        })



       



    }
}