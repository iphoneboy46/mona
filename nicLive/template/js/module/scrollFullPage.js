export default function ScrollFullPage() {
    $(document).ready(function () {
        // const header = document.querySelector(".header");
        const fullPage = document.getElementById("fullpage");
        if (fullPage) {
            if (window.screen.width > 1200) {
                const header = document.querySelector(".header");
                new fullpage('#fullpage', {
                    //options here
                    autoScrolling: true,
                    licenseKey: "gplv3-license",
                    fitToSection: true,
                    scrollBar: false,
                    verticalCentered: true,
                    normalScrollElements: '.scroll-main',
                    onLeave: (origin, destination, direction) => {
                        if (direction === 'down') {
                            // Khi cuộn xuống, ẩn header
                            header.classList.add("actived");
                        } else if (direction === 'up') {
                            // Khi cuộn lên, hiện header
                            header.classList.remove("actived");

                        }
                    }

                });



            }



        }

        const aboutWrap = document.querySelector(".aboutWrap")
        if (aboutWrap) {
            const fullPage = document.getElementById("fullpage");
            if (fullPage) {
                if (window.screen.width > 1200) {
                    console.log("Ádasd")
                    const header = document.querySelector(".header");
                    new fullpage('#fullpage', {
                        //options here
                        autoScrolling: true,
                        licenseKey: "gplv3-license",
                        fitToSection: true,
                        scrollBar: false,
                        verticalCentered: true,
                        normalScrollElements: '.scroll-main',
                        onLeave: (origin, destination, direction) => {
                            if (direction === 'down') {
                                // Khi cuộn xuống, ẩn header
                                header.classList.add("actived");
                            } else if (direction === 'up') {
                                // Khi cuộn lên, hiện header
                                header.classList.remove("actived");

                            }
                        }

                    });



                }else{
                    new fullpage('#fullpage', {
                        //options here
                        autoScrolling: true,
                        licenseKey: "gplv3-license",
                        fitToSection: true,
                        scrollBar: false,
                        verticalCentered: true,
                        normalScrollElements: '.scroll-main',
                        // onLeave: (origin, destination, direction) => {
                        //     if (direction === 'down') {
                        //         // Khi cuộn xuống, ẩn header
                        //         header.classList.add("actived");
                        //     } else if (direction === 'up') {
                        //         // Khi cuộn lên, hiện header
                        //         header.classList.remove("actived");

                        //     }
                        // }

                    });
                }
                
                

               



            }


            if(window.screen.width < 800) {
                    
                

                const aboutHds = aboutWrap.querySelectorAll(".about_hd");
                console.log(aboutHds)
                aboutHds.forEach((aboutHd) => {
                    // const hdWrap = aboutHd.querySelector(".about_hd--wrap");
                    const aboutRt = aboutHd.querySelector(".about_hd--rt-img");
                    const aboutWrap = aboutHd.querySelector(".about_hd--lf-wrap");
                    const content = aboutHd.querySelector(".about_hd--lf-content");
                    const noteLg = content.querySelector(".note-lg");
                    const titleMd = content.querySelector(".title-md ");
                    var computedStyle = window.getComputedStyle(content);
                    var computedStyle2 = window.getComputedStyle(aboutWrap);
                    console.log(aboutHd.clientHeight)

                    const total = aboutHd.clientHeight - aboutRt.clientHeight - parseInt(computedStyle.rowGap) - parseInt(computedStyle2.paddingBottom) - parseInt(computedStyle2.paddingTop) - titleMd.clientHeight - 60;

                    console.log(total)

                    noteLg.style.maxHeight = total + "px";







                })
            }


        }



    });
}