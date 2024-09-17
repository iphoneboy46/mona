const sign = document.querySelector(".sign");
if (sign) {
    const signCb = sign.querySelector(".sign_form--cb ");
    if(signCb){
        const itemChecks = signCb.querySelectorAll(".form-ck-item2 input");
        itemChecks.forEach((itemCheck) => {
            itemCheck.addEventListener("input", () => {
                const list2 = sign.querySelector(".sign_form--list2");
                const list1 = sign.querySelector(".sign_form--list");
    
                if (itemCheck.value === "1") {
                    const codeHv = sign.querySelector(".hv-no-hidden");
                    const ipHv = codeHv.querySelector("input");
                    ipHv.setAttribute("value", "");
                    $(list2).slideUp(400);
                    $(codeHv).slideDown(400);
    
                    const ip2s = list2.querySelectorAll(".form-item input");
                    ip2s.forEach((ip2) => {
                        ip2.setAttribute("value", "");
                        ip2.value = "";
                        const signStyles = document.querySelectorAll(".signStyle .form-item-ip ");
                        if (signStyles) {
                            signStyles.forEach((signStyle) => {
    
                                signStyle.classList.remove("actived")
    
                            }
                            )
                        }
                    })
    
                    const ip1s = list1.querySelectorAll(".form-item input");
                    ip1s.forEach((ip1) => {
                        ip1.setAttribute("value", "");
                        ip1.value = "";
                        const signStyles = document.querySelectorAll(".signStyle .form-item-ip");
                        if (signStyles) {
                            signStyles.forEach((signStyle) => {
    
                                signStyle.classList.remove("actived")
    
                            }
                            )
                        }
                    })
                    $("#datepicker").val(''); // Xóa giá trị date đã chọn
                    $("#datepicker").datepicker("setDate", null);
    
                } else {
                    const codeHv = sign.querySelector(".hv-no-hidden");
                    const ipHv = codeHv.querySelector("input");
                    ipHv.setAttribute("value", "");
                    $(codeHv).slideUp(400);
                    $(list2).slideDown(400);
                }
            })
        })
    }
   
}