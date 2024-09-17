export default function HomeJs() {
    const homeNews = document.querySelector(".home_news");
    if (homeNews) {
        // console.log("asdas")
        const list = document.querySelector(".home_news--list");
        const height1 = (list.clientHeight / 2) * -1;
        const height2 = list.clientHeight / 2;


        list.style.marginBottom = height1 + "px";
        homeNews.style.marginBottom = height2 + "px";
    }

    const admissionsQc = document.querySelector(".admissions_qc");
    if (admissionsQc) {
        const list = admissionsQc.querySelector(".admissions_qc--ts-list");
        const box = admissionsQc.querySelector(".admissions_qc--ts-box");
        const items = admissionsQc.querySelectorAll(".admissions_qc--ts-item-content")
        const arrow = admissionsQc.querySelector(".admissions_qc--ts-box .arrow")

        const height2 = list.clientHeight;

        list.style.paddingBottom = height2 + "px";

        function getMaxHeight() {
            let maxHeight = 0;

            items.forEach(item => {
                const itemHeight = item.clientHeight;

                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;

                }


            })

            return maxHeight;
        }

        const maxHeight = getMaxHeight();

        const height1 = (maxHeight / 2) * -1;
        list.style.marginTop = height1 + "px";

    }
}