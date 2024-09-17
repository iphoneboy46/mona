export default function danhMuc() {
    const product = document.querySelector(".product");

    if (product) {
        const btn = document.querySelector(".product_btn--filter");
        const ex = document.querySelector(".product_lf--item-ex");
        const modal = document.querySelector(".modal-pro-filter          ")
        const profilter = product.querySelector(".product_lf--wrap");

        if(window.screenX < 1024){
            btn.addEventListener("click", () => {
                profilter.classList.add("actived");
                modal.classList.add("actived");
                document.body.style.overflow = "hidden";
            });
    
            ex.addEventListener("click", () => {
                profilter.classList.remove("actived");
                modal.classList.remove("actived");
                document.body.style.overflow = "auto";
    
            });

            modal.addEventListener("click", () => {
                profilter.classList.remove("actived");
                modal.classList.remove("actived");
                document.body.style.overflow = "auto";

            });
        }

        
    }
}
