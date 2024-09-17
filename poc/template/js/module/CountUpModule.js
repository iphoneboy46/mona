export default function CountUpModule() {
   
        const about = document.querySelector(".about");
        if (about) {
          $('.about_rt--item-num .num').countUp({
            'time': 5000,
            'delay': 10
          });
        }

      
}
