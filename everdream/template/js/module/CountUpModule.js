export default function CountUpModule() {
   
        const aboutOur = document.querySelector(".about_our ");
        if (aboutOur) {
          $('.about_our--rt-num .num').countUp({
            'time': 3000,
            'delay': 10
          });
        }

        const homeEx = document.querySelector(".home_ex ");
        if (homeEx) {
          $('.about_our--rt-num .num').countUp({
            'time': 3000,
            'delay': 10
          });
        }

      
}
