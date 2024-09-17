export default function ScrollFullPage() {
    $(document).ready(function () {
        const header = document.querySelector(".header");
        const fullPage = document.getElementById("fullpage");
        if (fullPage) {
            if (window.screen.width > 1200) {
                new fullpage('#fullpage', {
                    //options here
                    autoScrolling: true,
                    licenseKey: "gplv3-license",
                    fitToSection: true,
                    scrollBar: false,
                    verticalCentered: true,



                    onLeave: function (origin, destination) {

                        // Xác định vị trí của phần tử hiện tại
                        var currentSection = destination.item;

                        if (currentSection.classList.contains("hd1")) {
                            // console.log("ádas")
                            header.classList.add("actived1");
                        } else {
                            header.classList.remove("actived1");

                        }

                        if (currentSection.classList.contains("hd2")) {
                            // console.log("ádas")
                            header.classList.add("actived2");
                        } else {

                            header.classList.remove("actived2");
                        }


                    }
                });
            } 

        }




    });
}