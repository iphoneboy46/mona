export default function Map() {
    const homeAcross = document.querySelector(".home_across");
    if (homeAcross) {
        const maps = homeAcross.querySelectorAll("svg path");
        const container = document.querySelector(".home_across--rt-map");
        let ic = document.querySelector(".ic-location");
        const items = document.querySelectorAll(".home_across--rt-item")
        maps.forEach((map, index) => {
            const width = container.clientWidth;

            console.log(map[index]);

            if (window.screen.width > 1200) {
                container.addEventListener("mousemove", (e) => {
                    var mouseY = e.clientY;
                    const height = container.clientHeight;

                    var list = document.querySelector(".home_across--rt-list");
                    if (mouseY > height / 1.5) {
                        container.addEventListener("mousedown", () => {
                            list.style.top = "2%";
                            list.style.bottom = "unset";
                        })
                    } else {
                        container.addEventListener("mousedown", () => {
                            list.style.bottom = "2%";
                            list.style.top = "unset";
                        })
                    }
                })
            }


            if (index == 0) {
                maps[0].classList.add("actived");
                items[0].classList.add("showed");
            }


            map.addEventListener("click", (e) => {

                const mapActive = document.querySelector("svg path.actived");
                const itemShowed = document.querySelector(".home_across--rt-item.showed");
                if (mapActive) {
                    mapActive.classList.remove("actived");
                }

                if (itemShowed) {
                    itemShowed.classList.remove("showed");
                }



                map.classList.add("actived");
                items[index].classList.add("showed");


            })


        });

        const exs = homeAcross.querySelectorAll(".home_across--rt-ex");
        if (exs) {
            exs.forEach((ex) => {
                ex.addEventListener("click", () => {
                    console.log("ádsad");
                    const mapActive = document.querySelector("svg path.actived");
                    const itemShowed = document.querySelector(".home_across--rt-item.showed");
                    if (mapActive) {
                        mapActive.classList.remove("actived");
                    }

                    if (itemShowed) {
                        itemShowed.classList.remove("showed");
                    }
                })
            })
        }



    }
}