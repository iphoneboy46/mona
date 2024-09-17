function menuFood() {
    const itemMenuFoods = document.querySelectorAll(".menuFood_item ");
    if (itemMenuFoods) {
        itemMenuFoods.forEach((itemMenuFood) => {
            const btnIC = itemMenuFood.querySelector(".openImgs");
            if (btnIC) {
                btnIC.addEventListener("click", () => {
                    const imgs = itemMenuFood.querySelectorAll(".menuFood_ref--img");
                    imgs[0].click();
                })
            }

        })


    }

    function scrollToID(id, speed) {
        const offSet = $(".header").outerHeight();
        const section = document.getElementById(id);
        if (section) {
            const targetOffset = section.offsetTop - offSet - 20;
            $("html,body").animate({
                scrollTop: targetOffset
            }, speed);

        }
    }


    const menuFood = document.querySelector(".menuFood");
    if (menuFood) {
        if (window.screen.width < 1200) {
            const btnFilterFood = menuFood.querySelector(".btnFilterFood");
            const menuFoodLf = menuFood.querySelector(".menuFood_box--lf ");
            const modalFood = document.querySelector(".menuFood_modal");
            const menuFoodEx = menuFood.querySelector(".menuFood_ex");
            const top = menuFood.querySelector(".menuFood_box--rt-top");
            const header = document.querySelector(".header");

            window.addEventListener("scroll", () => {
                if (window.scrollY >= top.offsetTop + (header.clientHeight * 1)) {
                    btnFilterFood.classList.add("fixed");
                } else {
                    btnFilterFood.classList.remove("fixed");

                }
            })

            btnFilterFood.addEventListener("click", () => {
                menuFoodLf.classList.add("showed");
                modalFood.classList.add("showed");
                document.body.style.overflow = "hidden";
            })

            modalFood.addEventListener("click", () => {
                menuFoodLf.classList.remove("showed");
                modalFood.classList.remove("showed");
                document.body.style.overflow = "auto";

            })

            menuFoodEx.addEventListener("click", () => {
                menuFoodLf.classList.remove("showed");
                modalFood.classList.remove("showed");
                document.body.style.overflow = "auto";

            })

            // tính chiều cao
            const menuFoodLfFilter = menuFood.querySelector(".menuFood_filter");
            const menuFoodLogo = menuFood.querySelector(".menuFood_logo");
            const menuFoodRef = menuFood.querySelector(".menuFood_ref");
            const boxFood = menuFood.querySelector(".menuFood_box--lf-box");
            const boxFoodWrap = menuFood.querySelector(".menuFood_box--lf-box-wrap")
            var computedStyle = window.getComputedStyle(boxFood);
            var computedStyle2 = window.getComputedStyle(boxFoodWrap);

            const total = menuFoodLf.clientHeight - menuFoodLogo.clientHeight - menuFoodRef.clientHeight - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.rowGap) - parseInt(computedStyle2.rowGap);

            menuFoodLfFilter.style.maxHeight = total + "px";


        }


        const menuFilter = menuFood.querySelector(".menuFood_filter");
        if (menuFilter) {
            const links = menuFilter.querySelectorAll(".menuFood_filter--link");
            links.forEach((link, index) => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const href = e.target.getAttribute("href").slice(1);
                    const lists = menuFood.querySelectorAll(".menuFood_box--rt-list");
                    const id = lists[index].getAttribute("id");
                    const linkActived = menuFood.querySelector(".menuFood_filter--link.actived");
                    linkActived.classList.remove("actived");
                    link.classList.add("actived");
                    if (href === id) {
                        if (id.length > 0) {
                            scrollToID(id, 200);
                        } else {
                            window.location.href = href;
                        }
                    }

                    if (window.screen.width < 1200) {
                        const menuFoodLf = menuFood.querySelector(".menuFood_box--lf ");
                        const modalFood = document.querySelector(".menuFood_modal");
                        modalFood.classList.remove("showed");
                        menuFoodLf.classList.remove("showed");
                        document.body.style.overflow = "auto";

                    }


                })

            })

            const lists = menuFood.querySelectorAll(".menuFood_box--rt-list");
            lists.forEach((list) => {
                window.addEventListener("scroll", () => {
                    const links = menuFood.querySelectorAll(".menuFood_filter--link");
                    const id = list.getAttribute("id");


                    links.forEach((link) => {
                        const href = link.getAttribute("href").slice(1);
                        const header = document.querySelector(".header")
                        const item = document.querySelector(".menuFood_box--rt-item-title")
                        if (window.scrollY >= list.offsetTop - header.clientHeight - item.clientHeight - 32) {
                            if (href === id) {
                                link.classList.add("actived");
                            } else {
                                link.classList.remove("actived");

                            }
                        }

                    })




                })
            })


        }



    }

    function ScrollToSectionModule() {
        const speed = 800;
        // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
        const hash = window.location.hash;
        if ($(hash).length) scrollToID(hash, speed);
        // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
        $(".btn-scroll").on("click", function (e) {
            e.preventDefault();

            // const href = $(this).find("> a").attr("href") || $(this).attr("href");
            // const id = href.slice(href.lastIndexOf("#"));
            // if ($(id).length) {
            //   scrollToID(id, speed);
            // } else {
            //   // window.location.replace(`/${id}`);
            //   window.location.href = href;
            // }
        });
        // HÀM SCROLL CHO MƯỢT MÀ
        function scrollToID(id, speed) {
            const offSet = $(".header").outerHeight();
            const section = $(id).offset();
            const targetOffset = section.top - offSet;
            $("html,body").animate({ scrollTop: targetOffset }, speed);
        }

        const mouse = document.querySelector(".scroll-down");
        const id_sl_pr = document.querySelector(".des-scroll");
        if (id_sl_pr) {
            mouse.addEventListener("click", () => {
                scrollToID(".des-scroll", 0);
            });
        }
    }

    ScrollToSectionModule();


}

menuFood()