export default function hoverTT() {
    const items = document.querySelectorAll(".like_item--wrap");
    if (items) {
        if(window.screen.width > 1200){
            items.forEach((item) => {
                const titleItem = item.querySelector(".like_item--des .title")
                const title = item.querySelector(".like_item--des .title").textContent;
                var div = document.createElement("div");
                div.classList.add("like_item--tt");
                div.innerHTML = title;
              
                titleItem.appendChild(div);
                
                titleItem.addEventListener("mousemove", (event) => {
                    const title = item.querySelector(".like_item--des .title");
    
                    const tt = item.querySelector(".like_item--tt");
                    if(tt){
                        // tt.style.left = `${mouseX}px`;
                        tt.style.top = `${title.clientHeight}px`;
                        tt.classList.add("showed")
                    }
                })
    
                titleItem.addEventListener("mouseleave", (event) => {
                    const tt = item.querySelector(".like_item--tt");
                    if(tt){
                        
                        tt.classList.remove("showed")
                    }
                })
            })
        }
       
    }
}