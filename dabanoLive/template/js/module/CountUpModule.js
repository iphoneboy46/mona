export default function CountUpModule() {
    const homeAtLfTop = document.querySelector(".home-at-lf-top");
    if(homeAtLfTop){
      $('.home-at-lf-top .home-at-lf-num').countUp({
        'time': 5000,
        'delay': 15
      });
    }  

     
}
