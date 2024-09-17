export default function scrollAni() {


    const anis = document.querySelectorAll(".ani");

    if (anis) {
        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 7 / 10;
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

    const tabScrolls = document.querySelectorAll(".tab-scrolls");
    if (tabScrolls) {
        const speed = 600;
        // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
        const hash = window.location.hash;
        if ($(hash).length) scrollToID(hash, speed);


        tabScrolls.forEach((tab, index) => {
            const tabScroll = tab.querySelectorAll(".tab-scroll");
            tabScroll.forEach((tabScrollItem, index) => {
                tabScrollItem.addEventListener("click", (e, index) => {
                    console.log("asdas")
                    const actived = document.querySelector(".tab-scroll.actived")
                    if (actived) {
                        actived.classList.remove("actived");

                    }
                    tabScrollItem.classList.add("actived");
                    const href = tabScrollItem.getAttribute("href");
                    const id = href.slice(1);

                    e.preventDefault();
                    if (id.length > 0) {
                        scrollToID(id, speed);
                    } else {
                        window.location.href = href;
                    }
                })
            })


        })


        function scrollToID(id, speed) {
            const offSet = $(".header").outerHeight();
            const section = document.getElementById(id);
            const tabScroll = document.querySelector(".tab-scrolls");
            if (section) {
                const targetOffset = section.offsetTop - offSet - tabScroll.clientHeight;
                $("html,body").animate({
                    scrollTop: targetOffset
                }, speed);

            }
        }
    }

    const topHd = document.querySelector(".tab-scrolls");
    if (topHd) {

        if (window.screen.width > 1200) {
            window.addEventListener("scroll", () => {

                if (window.scrollY >= topHd.offsetTop) {
                    topHd.classList.add("actived")
                } else {
                    topHd.classList.remove("actived")
                }


                const links = topHd.querySelectorAll(".tab-scroll");
                links.forEach((link) => {
                    const mt = document.getElementById("intro");
                    const dg = document.getElementById("schedule");
                    const lq = document.getElementById("noteDk");
                    const eva = document.getElementById("Evaluate");
                    const hd = document.querySelector(".header");
                    const hHd = hd.clientHeight;
                    const hTopHd = topHd.clientHeight;
                    if (window.scrollY >= mt.offsetTop - hHd - hTopHd - 80) {
                        const lb = link.getAttribute("href").slice(1);
                        const id = mt.getAttribute("id");
                        if (lb === id) {
                            const linkAc = document.querySelector(".tab-scroll.actived")
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
                            const linkAc = document.querySelector(".tab-scroll.actived")
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
                            const linkAc = document.querySelector(".tab-scroll.actived")
                            if (linkAc) {
                                linkAc.classList.remove("actived")
                            }
                            link.classList.add("actived")
                        }

                    }

                    if (window.scrollY >= eva.offsetTop - hHd - hTopHd - 80) {
                        const lb = link.getAttribute("href").slice(1);
                        const id = eva.getAttribute("id");

                        if (lb === id) {
                            const linkAc = document.querySelector(".tab-scroll.actived")
                            if (linkAc) {
                                linkAc.classList.remove("actived")
                            }
                            link.classList.add("actived")
                        }

                    }
                })
            })
        }

    }

    const boxMl = document.querySelector(".box_ml");
    if (boxMl) {
        if (window.screen.width > 900) {
            window.addEventListener("scroll", () => {
                const hd = document.querySelector(".header");
                if (window.scrollY >= boxMl.offsetTop + (hd.clientHeight * 2)) {
                    boxMl.classList.add("actived");
                } else {
                    boxMl.classList.remove("actived");
                }
            })
        } else {
            boxMl.classList.add("actived");
        }

    }
}