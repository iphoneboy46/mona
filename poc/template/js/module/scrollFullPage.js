export default function ScrollFullPage() {
    $(document).ready(function () {
        const header = document.querySelector(".header");
        const fullPage = document.getElementById("fullpage");
        if(fullPage){
            if(window.screen.width > 1200){
                new fullpage('#fullpage', {
                    //options here
                    autoScrolling: true,
                    licenseKey: "gplv3-license",
                    fitToSection: true,
                    scrollBar: false,
                    verticalCentered: true,
        
                   
                  
                    onLeave: function (origin, destination) {
        
                        if (!destination.isFirst) {
                            header.classList.add("actived");
                        } else {
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
        
                });
            }
    
           
    
        }
       



    });
}