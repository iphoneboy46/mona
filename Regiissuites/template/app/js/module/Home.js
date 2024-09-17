export default function HomeJs() {
    const homeChoose = document.querySelector(".home_choose")

    if (homeChoose) {
        if (window.screen.width > 1200) {
            window.addEventListener("load", () => {
                const title = homeChoose.querySelector(".box-title2");
                const homeChooseWrap = homeChoose.querySelector(".home_choose--wrap");
                var total = homeChooseWrap.clientHeight - title.clientHeight - 140;
                var box = homeChoose.querySelector(".home_choose--box");
                const list = homeChoose.querySelector(".home_choose--list");
                const btns = homeChoose.querySelector(".home_choose--btns");

                box.style.height = total + "px";

                const homeItems = homeChoose.querySelectorAll(".home_choose--item");
                if (homeItems) {
                    homeItems.forEach(item => {
                        const btns = item.querySelector(".home_choose--btns");
                        const boxNavi = homeChoose.querySelector(".box-navi");
                        let link = item.querySelector(".home_choose--link");
                        link.style.height = total - btns.clientHeight - 32 + "px";

                        const heightLink = total - btns.clientHeight - 32;

                        console.log(heightLink)

                        boxNavi.style.height = heightLink + "px";


                    });
                }




            })
        }

    }

    const homeSale = document.querySelector(".home_sale");
    if (homeSale) {
        if (window.screen.width > 1200) {
            window.addEventListener("load", () => {
                const wrap = homeSale.querySelector(".home_sale--wrap");
                const title = homeSale.querySelector(".box-title2");
                const list = homeSale.querySelector(".home_sale--list");

                const total = wrap.clientHeight - title.clientHeight - 32 - 140;

                list.style.height = total + "px";
            })
        }



    }

    const homeProud = document.querySelector(".home_proud");
    if (homeProud) {
        if (window.screen.width > 1200) {
            window.addEventListener("load", () => {
                const wrap = homeProud.querySelector(".home_proud--lf-wrap");
                const title = homeProud.querySelector(".box-title2");
                const content = homeProud.querySelector(".home_proud--content");
                const btn = homeProud.querySelector(".home_proud--btn");

                const total = wrap.clientHeight - title.clientHeight - btn.clientHeight - 48;

                content.style.maxHeight = total + "px";

            });
        }

    }


    const homeAlb = document.querySelector(".home_alb");
    if (homeAlb) {
        if (window.screen.width > 1200) {
            window.addEventListener("load", () => {
                const wrap = homeAlb.querySelector(".home_alb--wrap");
                const title = homeAlb.querySelector(".home_alb--title");
                const list = homeAlb.querySelector(".home_alb--list");

                const total = wrap.clientHeight - title.clientHeight - 32 - 120;

                list.style.height = total + "px";
            })
        }



    }


    const homeNews = document.querySelector(".home_news");
    if (homeNews) {
        if (window.screen.width > 1200) {
            window.addEventListener("load", () => {
                const wrap = homeNews.querySelector(".home_news--wrap");
                const title = homeNews.querySelector(".box-title2");
                const list1 = homeNews.querySelector(".home_news--list");
                const list2 = homeNews.querySelector(".news_nb--list");
                const btn = homeNews.querySelector(".home_news--btn")

                const total = wrap.clientHeight - title.clientHeight - btn.clientHeight - 32 - 160;

                list1.style.height = total + "px";
            })
        }



    }


}