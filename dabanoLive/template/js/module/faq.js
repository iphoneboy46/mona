
export default function faq() {
    const faqItems = document.querySelectorAll(".faq-it");
    const faqContents = document.querySelectorAll(".faq-content");

    if (faqItems) {
       faqItems.forEach((faqItem,index)=>{

     
            // faqContents.forEach((faqContent,index)=>{
            //     if(index === 0) {
            //         $(faqContent).slideDown(500);

            //     }

            // })
        

        faqItem.addEventListener("click",(e)=>{
            if(!e.target.closest(".faq-content")){
              

                faqItems.forEach((faqItem,index)=>{
                    faqItem.classList.remove("actived")
                })

                faqContents.forEach((faqContent)=>{
                    $(faqContent).slideUp(500);

                })
                
                const faqContent = faqItem.querySelector(".faq-content");
                if(faqContent.style.display == "" || faqContent.style.display == "none"){
                    faqItem.classList.add("actived");
                    $(faqContent).slideDown(500);

                }else{
                    faqItem.classList.remove("actived");
                    $(faqContent).slideUp(500);
                }

            }
        })
       })



    }

    function AlertCustom(type = "success", title = "", desc = "") {
        if (type == "error") {
          var icon_alert = `<i class="m-css-icon fas fa-times-circle"></i>`;
          var title = title != "" ? title : "Lỗi";
          var desc = desc != "" ? desc : "Đã xảy ra lỗi nghiệm trọng";
        } else if (type == "warning") {
          var icon_alert = `<i class="m-css-icon  fas fa-exclamation-circle"></i>`;
          var title = title != "" ? title : "Cảnh báo";
          var desc = desc != "" ? desc : "Vui lòng kiểm tra lại";
        } else {
          var icon_alert = `<i class="m-css-icon fas fa-check-circle"></i>`;
          var title = title != "" ? title : "Thành công";
          var desc = desc != "" ? desc : "Hành động đã thành công";
        }
        var html_default = `
              <div class="alert showAlert show ${type}">
                  ${icon_alert}
                  <span class="msg"><span class="m-bold-text">${title}</span> ${desc}</span>
                  <div class="close-btn">
                  <span class="fas fa-times"></span>
                  </div>
              </div>
          `;
        let check_empty = jQuery(".alert").hasClass("show");
      
        if (!check_empty) {
          $("body").append(html_default);
          setTimeout(function () {
            jQuery(".alert").removeClass("show");
            jQuery(".alert").addClass("hide");
            setTimeout(() => {
              jQuery(".alert").remove();
            }, 1000);
          }, 3000);
        }
      
        jQuery(".close-btn").click(function () {
          jQuery(".alert").removeClass("show");
          jQuery(".alert").addClass("hide");
          setTimeout(() => {
            jQuery(".alert").remove();
          }, 1000);
        });
      }

    const stk = document.querySelector(".success-ck-lf-bottom-ip input")

    if(stk){
        const btnCopy = document.querySelector(".btn-cp");
        
        btnCopy.addEventListener("click", () =>{
            stk.select();
            stk.setSelectionRange(0, 99999);

            navigator.clipboard.writeText(stk.value);
            btnCopy.classList.add("actived");

           
            AlertCustom("success", "Copied","Sao chép thành công");
        })

       


    }
}