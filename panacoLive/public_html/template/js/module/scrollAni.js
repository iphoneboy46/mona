export default function scrollAni() {


    const anis = document.querySelectorAll(".ani");

    if (anis) {
        if (window.screen.width > 1200) {

            const aboutOver = document.querySelector(".about_over");
            if (aboutOver) {
                window.addEventListener("load", () => {
                    const itemAnis = document.querySelectorAll(".ani");

                    itemAnis.forEach((itemAni) => {
                        if (itemAnis[0].offsetTop > 0) {
                            itemAnis[0].classList.add("showed");
                        }

                    })
                })
            }

            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 8 / 10;
                const anis = document.querySelectorAll(".ani");
                anis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;

                    if (triggerBottom > boxTop) {
                        itemAni.classList.add("showed");
                    }
                })
            })
        }




    }


    const spDesTabLinks = document.querySelectorAll(".sp_des--tab-link");
    if (spDesTabLinks) {
        const speed = 600;
        // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
        const hash = window.location.hash;
        if ($(hash).length) scrollToID(hash, speed);


        spDesTabLinks.forEach((spDesTabLink) => {
            spDesTabLink.addEventListener("click", (e, index) => {
                const actived = document.querySelector(".sp_des--tab-link.actived")
                if (actived) {
                    actived.classList.remove("actived");

                }
                spDesTabLink.classList.add("actived");
                const href = spDesTabLink.getAttribute("href");
                const id = href.slice(1);

                e.preventDefault();
                if (id.length > 0) {
                    scrollToID(id, speed);
                } else {
                    window.location.href = href;
                }
            })
        })


        function scrollToID(id, speed) {
            const offSet = $(".header").outerHeight();
            const section = document.getElementById(id);
            if (section) {
                const targetOffset = section.offsetTop - offSet;
                $("html,body").animate({
                    scrollTop: targetOffset
                }, speed);

            }
        }
    }

    const mls = document.querySelectorAll(".ml-btn");
    console.log(mls);
    if (mls) {
        const speed = 800;
        // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
        const hash = window.location.hash;
        if ($(hash).length) scrollToID(hash, speed);


        mls.forEach((ml) => {
            ml.addEventListener("click", (e, index) => {
                const actived = document.querySelector(".ml-btn.actived");
                if (actived) {
                    actived.classList.remove("actived");

                }
                ml.classList.add("actived");
                const href = ml.getAttribute("href");
                const id = href.slice(1);

                e.preventDefault();
                if (id.length > 0) {
                    scrollToID(id, speed);
                } else {
                    window.location.href = href;
                }
            })
        })


        function scrollToID(id, speed) {
            const offSet = $(".header").outerHeight();
            const section = document.getElementById(id);
            if (section) {
                const targetOffset = section.offsetTop - offSet;
                $("html,body").animate({
                    scrollTop: targetOffset
                }, speed);

            }
        }
    }

    const topHd = document.querySelector(".sp_des--top");
    if (topHd) {

        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {

                if (window.scrollY >= topHd.offsetTop) {
                    topHd.classList.add("actived")
                } else {
                    topHd.classList.remove("actived")
                }


                const links = topHd.querySelectorAll(".sp_des--tab-link");
                links.forEach((link) => {
                    const mt = document.getElementById("description");
                    const dg = document.getElementById("evaluate");
                    const lq = document.getElementById("similar");
                    // const pr = document.getElementById("productMain");
                    const hd = document.querySelector(".header");
                    const hHd = hd.clientHeight;
                    const hTopHd = topHd.clientHeight;
                    if (window.scrollY >= mt.offsetTop - hHd - hTopHd - 80) {
                        const lb = link.getAttribute("href").slice(1);
                        const id = mt.getAttribute("id");
                        if (lb === id) {
                            const linkAc = document.querySelector(".sp_des--tab-link.actived")
                            if (linkAc) {
                                linkAc.classList.remove("actived")
                            }
                            link.classList.add("actived")
                        }

                    }

                    if (window.scrollY >= dg.offsetTop - hHd - hTopHd - 80) {
                        const lb = link.getAttribute("href").slice(1);
                        const id = dg.getAttribute("id");
                        if (lb === id) {
                            const linkAc = document.querySelector(".sp_des--tab-link.actived")
                            if (linkAc) {
                                linkAc.classList.remove("actived")
                            }
                            link.classList.add("actived")
                        }

                    }

                    if (window.scrollY >= lq.offsetTop - hHd - hTopHd - 80) {
                        const lb = link.getAttribute("href").slice(1);
                        const id = lq.getAttribute("id");

                        if (lb === id) {
                            const linkAc = document.querySelector(".sp_des--tab-link.actived")
                            if (linkAc) {
                                linkAc.classList.remove("actived")
                            }
                            link.classList.add("actived")
                        }

                    }

                    // if(window.scrollY >= pr.offsetTop - hHd - hTopHd - 100){
                    //     const lb = link.getAttribute("href").slice(1);
                    //     const id = pr.getAttribute("id");

                    //     if(lb === id){
                    //         const linkAc = document.querySelector(".sp_des--tab-link.actived")
                    //     if(linkAc){
                    //         linkAc.classList.remove("actived")
                    //     }
                    //         link.classList.add("actived")
                    //     }

                    // }
                })
            })
        }

    }

    const topHd2 = document.querySelector(".sp_ct--ct-btn");
    if (topHd2) {

        if (window.screen.width < 1200) {
            window.addEventListener("scroll", () => {
                const hd = document.querySelector(".header");
                let screenHeight = window.innerHeight;
                let halfHeight = screenHeight * 0.5;
                const linkMain = document.querySelector(".links-main")
                if (window.scrollY >= topHd2.offsetTop + hd.clientHeight + halfHeight) {
                    topHd2.classList.add("actived")
                    linkMain.classList.add("active2");
                } else {
                    topHd2.classList.remove("actived")
                    linkMain.classList.remove("active2");
                }

            })
        }

    }

    const topHd3 = document.querySelector(".topHd3");
    if (topHd3) {

        window.addEventListener("scroll", () => {

            if (window.scrollY >= topHd3.offsetTop) {
                topHd3.classList.add("actived")

            } else {
                topHd3.classList.remove("actived")

            }

        })




    }


    const ml = document.querySelector(".box-ml");
    if (ml) {

        if (window.screen.width > 600 && window.screen.width < 1060) {
            window.addEventListener("scroll", () => {

                if (window.scrollY >= ml.offsetTop) {
                    ml.classList.add("showed")
                } else {
                    ml.classList.remove("showed")

                }

            })
        }

        if (window.screen.width < 600) {
            var btn = document.querySelector(".ez-toc-pull-right");

            window.addEventListener("scroll", () => {
                if (window.scrollY <= ml.offsetTop) {
                    ml.classList.remove("showed2")
                    btn.classList.remove("btnHanh")

                    btn.addEventListener("click", (e) => {
                        e.preventDefault();
                        
                    })

                } else {
                    ml.classList.add("showed2")
                    btn.classList.add("btnHanh");
                    btn.addEventListener("click", (e) => {
                        e.preventDefault();
                        
                    })

                }

                
            })

            



        }

    }

}