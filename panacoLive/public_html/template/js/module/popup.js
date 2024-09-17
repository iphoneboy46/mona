export default function popup() {
    const newsLogin = document.querySelector(".newsLogin")

    if(newsLogin) {
        if(newsLogin.classList.contains("showed")){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
    }
}

