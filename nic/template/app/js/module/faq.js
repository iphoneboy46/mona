export default function faq() {


    // const faqItems = document.querySelectorAll(".faq-it");
    // const faqContents = document.querySelectorAll(".faq-content");


    // if (faqItems) {
    //     faqItems.forEach((faqItem, index) => {


    //         faqContents.forEach((faqContent, index) => {
    //             if (index === 0) {
    //                 $(faqContent).slideDown(500);
    //                 faqItems[0].classList.add("actived");
    //             }

    //         })


    //         faqItem.addEventListener("click", (e) => {

    //             if (!e.target.closest(".faq-content")) {


    //                 faqItems.forEach((faqItem, index) => {
    //                     faqItem.classList.remove("actived")

    //                     const faqItemShowed = document.querySelector(".showed");

    //                     if (faqItemShowed) {
    //                         faqItemShowed.classList.remove("showed")

    //                     }

    //                 })

    //                 faqContents.forEach((faqContent) => {
    //                     $(faqContent).slideUp(300);

    //                 })

    //                 const faqContent = faqItem.querySelector(".faq-content");
    //                 if (faqContent.style.display == "" || faqContent.style.display == "none") {
    //                     faqItem.classList.add("actived");
    //                     $(faqContent).slideDown(500);

    //                 } else {
    //                     faqItem.classList.remove("actived");
    //                     $(faqContent).slideUp(500);
    //                 }

    //             }
    //         })


    //         // window.addEventListener("click", (e) => {
    //         //     if (!e.target.closest(".faq-it")) {
    //         //         faqContents.forEach((faqContent, index) => {

    //         //             $(faqContent).slideUp(500);
    //         //             faqItem.classList.remove("actived");


    //         //         })
    //         //     }
    //         // })
    //     })



    // }

    const productCt = document.querySelector(".product_ct");
    if (productCt) {

        const faqItems = productCt.querySelectorAll(".faq-it");
        const faqContents = productCt.querySelectorAll(".faq-content");


        

        if (faqItems) {
            faqItems.forEach((faqItem, index) => {


                faqItem.addEventListener("click", (e) => {

                    if (!e.target.closest(".faq-content")) {


                        faqItems.forEach((faqItem, index) => {
                            faqItem.classList.remove("actived")

                            const faqItemShowed = document.querySelector(".showed");

                            if (faqItemShowed) {
                                faqItemShowed.classList.remove("showed")

                            }

                        })

                        faqContents.forEach((faqContent) => {
                            $(faqContent).slideUp(300);

                        })

                        const faqContent = faqItem.querySelector(".faq-content");
                        if (faqContent.style.display == "" || faqContent.style.display == "none") {
                            faqItem.classList.add("actived");
                            $(faqContent).slideDown(500);

                        } else {
                            faqItem.classList.remove("actived");
                            $(faqContent).slideUp(500);
                        }

                    }
                })


                // window.addEventListener("click", (e) => {
                //     if (!e.target.closest(".faq-it")) {
                //         faqContents.forEach((faqContent, index) => {

                //             $(faqContent).slideUp(500);
                //             faqItem.classList.remove("actived");


                //         })
                //     }
                // })
            })



        }
    }
}