export default function Quantity() {
    // const boxQuantitys = document.querySelectorAll(".box-quantity");
    // if (boxQuantitys) {
    //     boxQuantitys.forEach((boxQuantity) => {
    //         const btnPlus = boxQuantity.querySelector(".btn-plus");
    //         const btnMinus = boxQuantity.querySelector(".btn-minus");
    //         let ipValue = boxQuantity.querySelector(".ip-value");
    //         let numberChange = boxQuantity.querySelector(".number-change");
    //         var i = 1;


    //         if (ipValue.value != "") {

    //             i = ipValue.value;
    //             ipValue.setAttribute("value", i);
    //         } else {
    //             i = 1
    //         }



    //         btnPlus.addEventListener("click", (e) => {
    //             if (i >= 10) {
    //                 console.log("asdsad")
    //                 e.preventDefault();

    //             } else {
    //                 i++;
    //                 numberChange.innerHTML = i;
    //                 ipValue.setAttribute("value", i);
    //             }

    //         })

    //         btnMinus.addEventListener("click", (e) => {
    //             if (i <= 1) {
    //                 e.preventDefault();
    //             } else {
    //                 i--;
    //                 numberChange.innerHTML = i;
    //                 ipValue.setAttribute("value", i);
    //             }

    //         })
    //     })

    // }


    var event = new Event("change");
    const count = document.querySelectorAll('.box-quantity')
    if (count) {
        count.forEach(item => {
            const input = item.querySelector('.ip-value');
            const number = item.querySelector('.number-change');
            number.innerHTML = `${input.value < 10 && input.value > 0 ? "0" : " "}` + input.value;
        })
    }
    document.addEventListener('click', (e) => {

        const count = e.target.closest('.box-quantity');
        const countBtnPlus = e.target.closest('.btn-qt.btn-plus')
        const countBtnMinus = e.target.closest('.btn-qt.btn-minus');
        if (count) {
            const countNumber = count.querySelector('.number-change');
            const countInput = count.querySelector('.ip-value');
            
            if (countBtnPlus) {
                if (parseInt(countInput.value) < parseInt(countInput.max)) {
                    countInput.value++;
                    countNumber.innerHTML =
                        `${countInput.value < 10 && countInput.value > 0 ? "0" : " "}` + countInput.value;
                    $("[name='update_cart']").removeAttr('disabled');
                    $("[name='update_cart']").trigger("click");
                    countInput.dispatchEvent(event);
                }
            }
            if (countBtnMinus) {
                if (parseInt(countInput.value) > parseInt(countInput.min)) {
                    countInput.value--;
                    countNumber.innerHTML =
                        `${countInput.value < 10 && countInput.value > 0 ? "0" : " "}` + countInput.value;
                    $("[name='update_cart']").removeAttr('disabled');
                    $("[name='update_cart']").trigger("click");
                    countInput.dispatchEvent(event);
                }
            }

        }
    })
}