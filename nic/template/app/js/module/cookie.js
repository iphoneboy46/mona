export default function cookie(){
    const cookie = document.querySelector(".cookie_cus");
    if(cookie){
        const btn = cookie.querySelector(".btn-cookie");
        btn.addEventListener("click", () => {
            const showed = document.querySelector(".cookie_cus.showed");
            if(showed){
                showed.classList.remove("showed");
            }
        });
    }
}