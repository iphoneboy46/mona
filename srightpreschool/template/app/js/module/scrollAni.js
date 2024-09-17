export default function scrollAni() {


    const anis = document.querySelectorAll(".ani");

    if (anis) {
        // if (window.screen.width > 1200) {
        window.addEventListener("scroll", () => {
            if (window.screen.width > 800) {
                const triggerBottom = window.innerHeight * 7 / 10;
                const anis = document.querySelectorAll(".ani");
                anis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;

                    if (triggerBottom > boxTop) {
                        itemAni.classList.add("showed");
                    }
                })
            } else {
                const triggerBottom = window.innerHeight * 5 / 5;
                const anis = document.querySelectorAll(".ani");
                anis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;

                    if (triggerBottom > boxTop) {
                        itemAni.classList.add("showed");
                    }
                })
            }

        })

        const aboutWhy = document.querySelector(".aboutWhy");
        if (aboutWhy) {
            if(window.screen.width > 800){
                window.addEventListener("load", () => {
                    const items = aboutWhy.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        if (items[0]) {
                            items[0].classList.add("showed");
                        }
                    })

                })
            }else{
                window.addEventListener("load", () => {
                    const items = aboutWhy.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })


                })
            }

        }

        const aboutTL = document.querySelector(".aboutTl");
        if (aboutTL) {
            if(window.screen.width > 800){
                window.addEventListener("load", () => {
                    const items = aboutTL.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        if (items[0]) {
                            items[0].classList.add("showed");
                        }
                    })

                })
            }else{
                window.addEventListener("load", () => {
                    const items = aboutTL.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })


                })
            }

        }


        const peopleInfo2 = document.querySelector(".peopleInfo2");
        if (peopleInfo2) {
            if(window.screen.width > 800){
                window.addEventListener("load", () => {
                    const items = peopleInfo2.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        if (items[0]) {
                            items[0].classList.add("showed");
                        }
                    })

                })
            }else{
                window.addEventListener("load", () => {
                    const items = peopleInfo2.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })


                })
            }

        }

        const studyUniform = document.querySelector(".studyUniform");
        if (studyUniform) {
            if (window.screen.width > 800) {
                window.addEventListener("load", () => {
                    const items = studyUniform.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        if (items[0]) {
                            items[0].classList.add("showed");
                        }
                    })

                })
            } else {
                window.addEventListener("load", () => {
                    const items = studyUniform.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })


                })
            }

        }

        const admissionsQC = document.querySelector(".admissionsQC");
        if (admissionsQC) {


            if (window.screen.width > 800) {
                window.addEventListener("load", () => {
                    const items = admissionsQC.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        if (items[0]) {
                            items[0].classList.add("showed");
                        }
                    })

                })
            } else {
                window.addEventListener("load", () => {
                    const items = admissionsQC.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })


                })
            }

        }

        const studyProgram = document.querySelector(".studyProgram");
        if (studyProgram) {


            if (window.screen.width < 800) {
                window.addEventListener("load", () => {
                    const items = studyProgram.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })


                })
            }

        }



        const admissionsProgram = document.querySelector(".admissionsProgram");
        if (admissionsProgram) {
            if (window.screen.width > 800) {
                window.addEventListener("load", () => {
                    const items = admissionsProgram.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        if (items[0]) {
                            items[0].classList.add("showed");
                        }
                    })

                })
            } else {
                window.addEventListener("load", () => {
                    const items = admissionsProgram.querySelectorAll(".valueAb_item");
                    items.forEach((item, i) => {
                        const lf = items[0].querySelector(".valueAb_item--lf");
                        const rt = items[0].querySelector(".valueAb_item--rt");

                        lf.classList.add("showed");
                        rt.classList.add("showed");


                    })

                })
            }


        }

        const valueAbs = document.querySelectorAll(".valueAb");
        if (valueAbs) {
            if (window.screen.width < 800) {
                valueAbs.forEach((valueAb, i) => {
                    const valueAbItems = valueAb.querySelectorAll(".valueAb_item");
                    valueAbItems.forEach((item, i) => {
                        item.classList.remove("ani")

                        const lf = item.querySelector(".valueAb_item--lf");
                        const rt = item.querySelector(".valueAb_item--rt");

                        lf.classList.add("ani")
                        rt.classList.add("ani")
                    })
                });

            }
        }

        const homeNews = document.querySelector(".home_news");
        if (homeNews) {
            if (window.screen.width < 600) {
                homeNews.classList.add("ani")

                const boxTitle = homeNews.querySelector(".box-title");
                const titleLg = boxTitle.querySelector(".title-lg");
                const btn = boxTitle.querySelector(".btn");
                const list = homeNews.querySelector(".home_news--list ")

                window.addEventListener("load", () => {
                    titleLg.setAttribute("data-aos", "")
                    list.setAttribute("data-aos", "")
                    btn.setAttribute("data-aos", "")


                })


            }
        }

        const topic = document.querySelector(".study_program--topic")
        if (topic) {
            if (window.screen.width < 800) {
                const lf = topic.querySelector(".study_program--topic-lf");
                const rt = topic.querySelector(".study_program--topic-rt");

                lf.setAttribute("data-aos", "fade-up")
                rt.setAttribute("data-aos", "fade-up")


            }
        }

        const ntl = document.querySelector(".study_program--ntl")
        if (ntl) {
            if (window.screen.width < 800) {
                const lf = ntl.querySelector(".study_program--ntl-lf");
                const rt = ntl.querySelector(".study_program--ntl-rt");

                lf.setAttribute("data-aos", "fade-up")
                rt.setAttribute("data-aos", "fade-up")


            }
        }

        const addQcTs = document.querySelector(".admissions_qc--ts");
        if (addQcTs) {
            if (window.screen.width < 800) {
                window.addEventListener("DOMContentLoaded", () => {
                    const titleLg = addQcTs.querySelector(".title-lg");
                    titleLg.setAttribute("data-aos", "fade-up")
                })

            }
        }

    }




    // }

}