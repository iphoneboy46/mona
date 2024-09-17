function CountUpModule() {
   
        const layoutMainAb = document.querySelector(".layoutMain.ab");
        if (layoutMainAb) {
          $('.about_intro--bottom-item-num .num').countUp({
            'time': 3000,
            'delay': 10
          });
        }

      
}

CountUpModule();