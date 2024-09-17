export default function SwiperModule() {
  const eleFree = document.querySelectorAll(".free-slide");

  if (eleFree) {
    eleFree.forEach((ele, i) => {
      var swiper2 = new Swiper(ele.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
          el: ele.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        loop: ele.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }

  const newsBanner = document.querySelector(".news-banner");
  if (newsBanner) {
    var swiperNewLf = new Swiper(newsBanner.querySelector(".mySwiperNewsLf"), {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      breakpoints: {

        1200: {
          slidesPerView: "auto",

        },
      },
    });

    var swiperNewRt = new Swiper(newsBanner.querySelector(".mySwiperNewsRt"), {
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: newsBanner.querySelector(".next"),
        prevEl: newsBanner.querySelector(".prev"),
      },

      breakpoints: {

        1200: {
          slidesPerView: 1.5,

        },
      },

    });

    swiperNewLf.controller.control = swiperNewRt;
    swiperNewRt.controller.control = swiperNewLf;
  }

  const ourBrands = document.querySelectorAll(".our-brand-slide");
  if (ourBrands) {
    ourBrands.forEach((ourBrand)=>{
      var swiper = new Swiper(ourBrand.querySelector('.mySwiperBrand'), {
      
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        pagination: {
          el: ourBrand.querySelector('.swiper-pagination'),
          clickable:true,
        },
        breakpoints: {
          460: {
            grid: {
              rows: 1,
            },
            slidesPerView: "auto",
          },
  
        },
      });
    })
    
  }

  const newsTabs = document.querySelector(".news-tabs");
  if(newsTabs){
    var swiper = new Swiper(newsTabs.querySelector(".mySwiper"), {
      speed:1000,
      slidesPerView: "auto",
      draggable: true,
      scrollbar: {
        el: newsTabs.querySelector(".swiper-scrollbar"),
        hide: false,
        
      },
    });
  }
}