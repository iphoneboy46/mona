
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
        centeredSlides: ele.querySelector(".swiper").classList.contains("--center"),
        loop: ele.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      });
      if (!ele.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }

  const eleFree2 = document.querySelectorAll(".free-slide2");

  if (eleFree2) {
    eleFree2.forEach((ele2, i) => {
      var swiper2 = new Swiper(ele2.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        // pagination: {
        //   el: ele2.querySelector(".swiper-pagination"),
        //   clickable: !0,
        //   type: "progressbar",
        // },
        scrollbar: {
          el: ele2.querySelector(".swiper-scrollbar"),
          hide: false,
          draggable: true,
        },
        centeredSlides: ele2.querySelector(".swiper").classList.contains("--center"),
        loop: ele2.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele2.querySelector(".next"),
          prevEl: ele2.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele2.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }


  const qlProject = document.querySelector(".ql_project");
  if (qlProject) {
    var swiperLf = new Swiper(qlProject.querySelector(".mySwiperLf"), {
      slidesPerView: "auto",
      speed: 1200,

      effect: 'slide',
      loop: true,
    });

    var swiperRt = new Swiper(qlProject.querySelector(".mySwiperRt"), {
      speed: 1200,
      slidesPerView: "auto",
      // centeredSlides:true,
      loop: true,
      effect: 'slide',

      navigation: {
        nextEl: qlProject.querySelector(".next"),
        prevEl: qlProject.querySelector(".prev"),
      },
    });
    swiperLf.controller.control = swiperRt;
    swiperRt.controller.control = swiperLf;
  }


  const serviceSer = document.querySelector(".service_slide")
  if (serviceSer) {
    var swiperRtSer = new Swiper(serviceSer.querySelector(".mySwiperSerRt"), {
      spaceBetween: 12,
      slidesPerView: 2,
      speed: 1000,
      direction: "horizontal",
      // loop: true,
  
      scrollbar: {
        el: serviceSer.querySelector(".swiper-scrollbar"),
        hide: false,
        draggable: true,
      },
     
      breakpoints: {
        460: {
          spaceBetween: 8,
          slidesPerView: 3,
          speed: 1000,
          direction: "horizontal",
          // loop: true,
      
          scrollbar: {
            el: serviceSer.querySelector(".swiper-scrollbar"),
            hide: false,
            draggable: true,
          },
        },
      
        600: {
          scrollbar: {
            el: serviceSer.querySelector(".swiper-scrollbar"),
            hide: false,
            draggable: true,
          },
          spaceBetween: 12,
          slidesPerView: 1,
          speed: 1000,
          direction: "vertical",
        },
      },
    });
    var swiperBnT = new Swiper(serviceSer.querySelector(".mySwiperSerLf"), {
      // spaceBetween: 10,
      slidesPerView: "auto",
      speed: 1000,
      // loop: true,
      thumbs: {
        swiper: swiperRtSer,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

    });

    // swiperLfSer.controller.control = swiperRtSer;
    // swiperRtSer.controller.control = swiperLfSer;
  }


  const bannerHome = document.querySelector(".banner_home");
  if(bannerHome){
    var swiperBnT = new Swiper(bannerHome.querySelector(".mySwiperBnT"), {
      speed:1200,
      // spaceBetween:24,
      effect: "fade",
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      slidesPerView:"auto",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: bannerHome.querySelector(".next"),
        prevEl: bannerHome.querySelector(".prev"),
      },
      // direction: "vertical",
      pagination: {
        el: bannerHome.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className +  '">' + "0" + (index + 1) + "</span>";
        },
      },
    });

    var swiperBnB = new Swiper(bannerHome.querySelector(".mySwiperBnB"), {
      speed:1200,
      // spaceBetween:24,
      effect: "fade",
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      slidesPerView:"auto",
      fadeEffect: { crossFade: true },
     
     
    });

    swiperBnT.controller.control = swiperBnB;
    swiperBnB.controller.control = swiperBnT;
  }


  const homeCore = document.querySelector(".home_core");
  console.log(homeCore);
  if(homeCore){
    var swiperCore = new Swiper(homeCore.querySelector(".mySwiperCore"), {
      speed:1000,
      // spaceBetween:24,
      effect: "fade",
      slidesPerView:"auto",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: homeCore.querySelector(".next"),
        prevEl: homeCore.querySelector(".prev"),
      },
     
    });
  }

}