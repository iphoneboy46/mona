export default function scrollAni() {

    // const aboutHistory = document.querySelector(".about-history");

    // if (aboutHistory) {
    //     const observer = new IntersectionObserver((entries)=>{
    //         entries.forEach((entry)=>{
    //             console.log(entry);

    //             if(entry.isIntersecting){
    //                 entry.target.classList.add("show")


    //             }else{
    //                 entry.target.classList.remove("show")

    //             }




    //         })
    //     })

    //     const abItems = document.querySelectorAll(".abItem");
    //     abItems.forEach((abItem)=>{
    //         observer.observe(abItem)

    //     })
    // }

    const aboutHistory = document.querySelector(".about-history");

    if (aboutHistory) {

        if(window.screen.width > 1200){
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 5 / 4;
                const abItems = document.querySelectorAll(".abItem");
                abItems.forEach((abItem) => {
                    const boxTop = abItem.getBoundingClientRect().top;
    
                    if(triggerBottom > boxTop){
                        abItem.classList.add("show");
                    }else{
    
                        abItem.classList.remove("show");
                    }
                })
            })
        }
        
       
    }
}