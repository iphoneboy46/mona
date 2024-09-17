function admin() {
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener("click", (e) => {
            const items = document.querySelectorAll(".layoutAd_box--rt-post-item-action");
            items.forEach((item) => {
                if (!e.target.closest(".layoutAd_box--rt-post-item-action")) {
                    const ip = item.querySelector("input");
                    ip.checked = false;
                }
            })

        })


    });

    const items = document.querySelectorAll(".layoutAd_box--rt-post-item");
    if (items){
        items.forEach((item) => {
            const btnDelete = item.querySelector(".btn-delete");
            btnDelete.addEventListener("click", (e) => {
                const ip = item.querySelector("input");
                ip.checked = false;
            })
            
        })
    }
}

admin();