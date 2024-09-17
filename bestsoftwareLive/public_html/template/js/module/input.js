export default function Input() {
    const itemForms = document.querySelectorAll(".item-form");

    if (itemForms) {


        itemForms.forEach((itemForm) => {
            const formIp = itemForm.querySelector(".form-ip");
            const formLb = itemForm.querySelector(".form-lb");
            if (formIp) {
                formIp.addEventListener("input", () => {
                    if (formIp.value.length > 0) {
                        formLb.classList.add("hiddenLB");
                    } else {
                        formLb.classList.remove("hiddenLB");

                    }
                })


               

            }

        })
    }

}