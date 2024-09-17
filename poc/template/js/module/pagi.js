import GalleryModule from "./GalleryModule.js";

export default function Pagi() {
    
    // const listPg = document.querySelector(".list-pg");

    // window.addEventListener("load", () => {
      
    // })


    // if (listPg) {
      
    // const itemPgs = listPg.querySelectorAll(".item-pg");

    // let arrayPg = [];

    // let numberView = 9;
    //     const loopItem = () => {
    //         itemPgs.forEach((itemPg) => {
    
    //             const img = itemPg.querySelector("img").src
    //             arrayPg.push(img);
    //         })
          
    //     }
    //     loopItem();
        
      
 
    //     const renderHtml = (index) => {
    //         console.log(index);
    //         const arrayPgNews = arrayPg.slice(Math.ceil(numberView * index - numberView), numberView * index);
       
    //         listPg.innerHTML = ""
    //         arrayPgNews.forEach((arrayPgNew) => {

    //             listPg.innerHTML += `
    //             <div class="du-an-ct-item d-item d-3 item-pg">
    //             <div class="du-an-ct-item-wrap gallery">
    //                 <div class="du-an-ct-item-img gItem" data-src="${arrayPgNew}">
    //                     <img src="${arrayPgNew}" alt="">
    //                 </div>
    //             </div>
    //         </div>
    //             `;

    //         })
    //     }


    //     const quantityPagi = (itemPgs) =>{
    //         var quantityArr = Math.ceil(itemPgs.length / 9);
    //         const pagePagiWrap = document.querySelector(".page-pagi-wrap");
         
    //         for (let i = 1; i <= quantityArr; i++) {
    //             pagePagiWrap.insertAdjacentHTML("beforeend", `<li>
    //             <span class="number-pagi">${i}</span>
    //         </li>`)
    
    //         }
    //     }
    //     quantityPagi(itemPgs)
  
    //     const changePagiNumber = () =>{
    //         var pagePagiArr = [];
    //         const pagePagiWrap = document.querySelector(".page-pagi-wrap");
    //         const numberPagis= document.querySelectorAll(".number-pagi");
    //         numberPagis.forEach((number)=>{
    //             pagePagiArr.push(number.innerHTML);
    //         })
        
    //         const maxLength = pagePagiArr.length - 1;
    //         const minLength = 3;

    //         pagePagiArr.splice(minLength , maxLength - minLength, "...");

    //         pagePagiWrap.innerHTML = "";
    //         pagePagiArr.forEach((number,index)=>{
    //                 pagePagiWrap.innerHTML += `<li>
    //                 <span class="number-pagi">${number}</span>
    //             </li>
    //                 `
            
    //         })
            
    //     }

    //     changePagiNumber();
        
    //     const pagiNumber = () =>{
    //         const numberPgs = document.querySelectorAll(".number-pagi");
    //         numberPgs.forEach((numberPg, index) => {
    //             if (index === 0) {
    
    //                 numberPgs[0].classList.add("current");
    //                 renderHtml(index + 1)
    //             }
    
    //             numberPg.addEventListener("click", () => {
    //                 const numberPsCurrent = document.querySelector(".number-pagi.current")
    //                 numberPsCurrent.classList.remove("current");
    
    //                 numberPg.classList.add("current");
    //                 const numberPagi  = numberPg.innerHTML;
    //                 console.log(numberPagi); 
    //                 renderHtml(numberPagi)
    //                 GalleryModule();
    //                 scrollToIdPaGi();
    
    //             })
    
    //         })
    //     }

    //     pagiNumber();


      


    //     const scrollToIdPaGi = () => {
    //         const id = document.getElementById("pagi-top");
        
    //         const top = id.offsetTop;
    //         console.log(top);
    //         if (id) {
    //             window.scrollTo({ top: top, behavior: 'smooth' });
            
    //         }
    //     }


    // }


}