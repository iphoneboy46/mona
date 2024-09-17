export default function HoverJs() {
    const environment = document.querySelector(".environment");
    if (environment) {
        const items = environment.querySelectorAll(".environment_item");
        items.forEach(function (item) {

            // if (window.screen.width > 1200) {
            //     item.addEventListener("mousemove", function (e) {

            //         setTimeout(() => {
            //             const showed = environment.querySelector(".environment_item.showed");
            //             showed.classList.remove("showed");
            //             item.classList.add("showed");

            //         }, 300)

            //     });
            // }

            if (window.screen.width > 600) {
                item.addEventListener("click", function (e) {
                    console.log("ádasasd")
                    setTimeout(() => {
                        const showed = environment.querySelector(".environment_item.showed");
                        showed.classList.remove("showed");
                        item.classList.add("showed");

                    }, 300)

                });

            } else {
                const showed = environment.querySelector(".environment_item.showed");
                if (showed) {
                    showed.classList.remove("showed");

                }
            }



        })
    }


    const ratings = document.querySelectorAll(".rating");
    if (ratings) {
        ratings.forEach((rating) => {
            const stars = rating.querySelectorAll(".stars");
            stars.forEach((star, index) => {
                star.addEventListener("click", () => {
                    // Lấy giá trị của sao được click
                    const input = star.querySelector("input")
                    const ratingValue = parseInt(input.getAttribute('value'));

                    // Gỡ bỏ trạng thái active của tất cả sao
                    rating.querySelectorAll('.stars').forEach((star) => {
                        const input = star.querySelector("input")
                        const starValue = parseInt(input.getAttribute('value'));
                        // Chỉ giữ trạng thái active cho các sao có giá trị <= sao đã click
                        if (starValue <= ratingValue) {
                            star.classList.add('active');
                        } else {
                            star.classList.remove('active');
                        }
                    });
                })
            })
        })
    }
}