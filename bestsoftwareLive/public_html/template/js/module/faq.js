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

                    const faqItemShowed = document.querySelector(".showed");
                    
                    if(faqItemShowed){
                        faqItemShowed.classList.remove("showed")

                    }
                   
                })

                faqContents.forEach((faqContent)=>{
                    $(faqContent).slideUp(300);

                })
                
                const faqContent = faqItem.querySelector(".faq-content");
                if(faqContent.style.display == "" || faqContent.style.display == "none"){
                    faqItem.classList.add("actived");
                    $(faqContent).slideDown(300);

                }else{
                    faqItem.classList.remove("actived");
                    $(faqContent).slideUp(300);
                }

            }
        })
       })



    }

    // const faqItem2s = document.querySelectorAll(".faq-it-2");
    // const faqContent2s = document.querySelectorAll(".faq-content-2");
   

    // if (faqItem2s) {
    //    faqItem2s.forEach((faqItem2,index)=>{

     
    //         faqContent2s.forEach((faqContent2,index)=>{
    //             if(index === 0) {
    //                 $(faqContent2).slideDown(300);
    //                 faqItem2s[0].classList.add("actived")
    //             }

    //         })
        

    //     faqItem2.addEventListener("click",(e)=>{
    //         if(!e.target.closest(".faq-content")){
              
               
    //             faqItem2s.forEach((faqItem2,index)=>{
    //                 faqItem2.classList.remove("actived")

    //             })

    //             faqContent2s.forEach((faqContent2)=>{
    //                 $(faqContent2).slideUp(300);

    //             })
                
    //             const faqContent2 = faqItem2.querySelector(".faq-content-2");
    //             if(faqContent2.style.display == "" || faqContent2.style.display == "none"){
    //                 faqItem2.classList.add("actived");
    //                 $(faqContent2).slideDown(300);

    //             }else{
    //                 faqItem2.classList.remove("actived");
    //                 $(faqContent2).slideUp(300);
    //             }

    //         }
    //     })
    //    })



    // }
}