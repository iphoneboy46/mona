export default function newsJs(){
    const tourCt = document.querySelector(".tourCt");
    if(tourCt){
        const items = tourCt.querySelectorAll(".item-schedule");
        if(items){
            items.forEach((item, index) => {
                const dot = item.querySelector(".dot");
                dot.innerText = (index + 1);
            });
        }
    }
}